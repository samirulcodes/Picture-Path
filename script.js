// access key
const accessKey="z4GxYAkvxQEEm0Q_cj5wRaYy7AyaxVi5a88Ygm0O6UY"

const searchForm=document.getElementById('search-form')
const searchBox=document.getElementById('search-box')
const searchResult=document.getElementById('search-result')
const showMoreBtn=document.getElementById('show-more-btn')


let keyword=""
let page=1

// API
async function searchImages(){
    keyword=searchBox.value //it will store the value that we will enter in input field

    // with this api url we are adding page number using${page} and keyword using ${keyword} and accesKey using ${accessKey}
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response=await fetch(url)
    const data=await response.json()

    const results=data.results

    results.map((result)=>{
        const image=document.createElement("img")
        image.src=result.urls.small // this img is fetch from api of unsplash and urls.small means only small imgages will show

        const imageLink=document.createElement("a")
        imageLink.href=result.links.html  //  it will add link in a tag and link is fetching from api

        imageLink.target="_blank" // open in new tab

        // placed img in a tag
        imageLink.appendChild(image)

        // a tag will be displayed in search-result id 
        searchResult.appendChild(imageLink)
    })

    // show more button 
    showMoreBtn.style.display="block"
}

// search form
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    page=1  // everytime search new keyword it will start form page 1
    searchImages()
})

// click event on show more btn , when we click on shw btn it will displayed more images
showMoreBtn.addEventListener("click",()=>{
    page++ // increse the value of page by 1
    searchImages()
})