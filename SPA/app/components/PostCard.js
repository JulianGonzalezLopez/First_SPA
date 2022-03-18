export function PostCard(props){
    console.log(props);
    let {title, _embedded, id, date, slug} = props;
    let dateFormated = new Date(date).toLocaleString();
    let urlPoster = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"][0].source_url : "app/assets/favicon.png";
    
    document.addEventListener("click",e=>{
        if(!e.target.matches(".post-card a")) return false;
        localStorage.setItem("wpPostId",e.target.dataset.id);
        
    })
    
    return `
    <article class="post-card">
        <img src="${urlPoster}" alt="${title.rendered}>
        <h2>${title.rendered}</h2>
        <p>
            <time datetime="${dateFormated}">${dateFormated}</time>
            <a href="#/${slug}" data-id="${id}">See original</a>
        </p>
    </article>
    `
}