import {Header} from "./components/Header.js";
import {Loader} from "./components/Loader.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/router.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";

export function App(){
    const $root = document.querySelector("#root");
    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();
    InfiniteScroll();
};