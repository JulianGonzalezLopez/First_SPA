import api from "../helpers/wp_api.js";
import {ajax} from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { ContactForm } from "./ContactForm.js";

export async function Router(){


    let { hash } = location;
    const $main = document.querySelector("#main");

    $main.innerHTML = null;

    if(!hash || hash === "#/"){
        let $fragment = document.createDocumentFragment();
         await ajax({
            url:api.POSTS,
            cbSuccess: (posts)=>{
                let html = "";
                posts.forEach(post=>$fragment.appendChild(PostCard(post)));
            }
        });
        $main.appendChild($fragment);
    }
    else if(hash.includes("#/search")){
        if(hash.includes("?search=")){
            console.log("busqueda real")
            let $fragment = document.createDocumentFragment();
            await ajax({
                url:api.SEARCH + localStorage.getItem("wpSearch"),
                cbSuccess: (posts)=>{

                    if(posts.length === 0){
                        let auxP = document.createElement("p");
                        auxP.textContent = `Lo sentimos :( No existen resultados para el termino ${localStorage.getItem("wpSearch")}`
                        $fragment.appendChild(auxP);
                        auxP.classList.add("error");
                    }
                    else{


                        posts.forEach(post=>$fragment.appendChild(SearchCard(post)));
                    }
                }
            });
            $main.appendChild($fragment);
        }
        else{
            console.log("menu de busqueda puro")
        }
    }
    else if(hash === "#/contact"){
        $main.appendChild(ContactForm());
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