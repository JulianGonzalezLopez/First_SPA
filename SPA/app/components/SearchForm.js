export function SearchForm(){
    const $form = document.createElement("form"),

     $input = document.createElement("input");
     $input.placeholder = "Search...";
     $input.name ="search";
     $input.type = "search";
    $form.appendChild($input);
    $form.classList.add("form-search");

    if(location.hash.includes("#/search")){
        $input.value = localStorage.getItem("wpSearch");
    }


    document.addEventListener("submit",e=>{
        if(!e.target.matches(".form-search")) return false;

        e.preventDefault();

        localStorage.setItem("wpSearch",e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`

    })

    return $form;
}   