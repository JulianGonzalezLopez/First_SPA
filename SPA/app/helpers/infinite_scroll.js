import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";
import { ajax } from "./ajax.js";
import api from "./wp_api.js";

export async function InfiniteScroll(){
    const $main = document.querySelector("main");
    let query = localStorage.getItem("wpSearch"),
     apiURL,
     Component; //Igual al Higher order components
    window.addEventListener("scroll",async ()=>{
        const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
        const {hash} = window.location;
        if(scrollTop + clientHeight >= scrollHeight - 100){
            api.page ++;
            if (!hash || hash === "#/"){
                apiURL = `${api.POSTS}&page=${api.page}`;
                Component = PostCard;
            }
            else if(hash.includes("#/search")){
                apiURL = `${api.SEARCH}${query}&page=${api.page}`;
                Component = SearchCard;
            }
            else{
                return false;
            }
            let $fragment = document.createDocumentFragment();
            document.querySelector(".loader").style.display = "block";
            await ajax({
                url: apiURL,
                cbSuccess: (posts)=>{
                    posts.forEach(post=>$fragment.appendChild(Component(post)));
                }
            })
            document.querySelector(".loader").style.display = "none";
            $main.appendChild($fragment);

        }
    console.log(apiURL);
    })

}