export function PostCard(props){
    console.log(props);
    let {title, _embedded, id, date, slug} = props;
    let dateFormated = new Date(date).toLocaleString();
    let urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "app/assets/favicon.png";
    
    document.addEventListener("click",e=>{
        if(!e.target.matches(".post-card a") || !e.target.matches(".search-card a")) return false;
        localStorage.setItem("wpPostId",e.target.dataset.id);
        
    })
    
    let  auxArticle = document.createElement("article");
    auxArticle.classList.add("post-card");
    let auxImg = document.createElement("img");
    auxImg.src = urlPoster;
    auxImg.alt = title.rendered;
    let auxTitle = document.createElement("h2");
    auxTitle.textContent = title.rendered;
    let auxLink = document.createElement("a");
    auxLink.href = `#/${slug}`;
    auxLink.textContent = "See original"
    auxLink.dataset.id = id;
    auxArticle.appendChild(auxImg);
    auxArticle.appendChild(auxTitle);
    auxArticle.appendChild(auxLink);



    return auxArticle;
}