export function SearchCard(props){
    let {id, title, _embedded, links} = props;

    let urlAux  = _embedded.self[0] ? _embedded.self[0].jetpack_featured_media_url : "app/assets/favicon.png";

    document.addEventListener("click",e=>{
    if(!e.target.matches(".search-card a")) return false;
        localStorage.setItem("wpPostId",e.target.dataset.id);  
    })

    let  auxArticle = document.createElement("article");
    auxArticle.classList.add("search-card");
    let auxImg = document.createElement("img");
    auxImg.src = urlAux;
    auxImg.alt = title;
    let auxTitle = document.createElement("h2");
    auxTitle.textContent = title;
    let auxLink = document.createElement("a");
    auxLink.href = `#/${_embedded.self[0].slug}`;
    auxLink.textContent = "See original"
    auxLink.dataset.id = id;
    auxArticle.appendChild(auxImg);
    auxArticle.appendChild(auxTitle);
    auxArticle.appendChild(auxLink);

    console.log(auxArticle);
    return auxArticle;
}