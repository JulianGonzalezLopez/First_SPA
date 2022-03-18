import api from "../helpers/wp_api.js";
import {ajax} from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";

export async function Router(){

    let { hash } = location;
    const $main = document.querySelector("#main");

    $main.innerHTML = null;

    if(!hash || hash === "#/"){
         await ajax({
            url:api.POSTS,
            cbSuccess: (posts)=>{
                let html = "";
                posts.forEach(post=>html += PostCard(post));
                $main.innerHTML = html;
            }
        });
    }
    else if(hash.includes("#/search")){

    }
    else if(hash === "#/contact"){

    }
    else{
        await ajax({
            url:`${api.POST}/${localStorage.getItem("wpPostId")}`,
            cbSuccess: (post)=>{
                $main.appendChild(Post(post));
            }
        });
    }
    document.querySelector(".loader").style.display = "none";

}