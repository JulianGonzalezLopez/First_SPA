export function SeachForm(){
    const $form = document.createElement("form"),
     $input = document.createElement("input");
     $input.placeholder = "Search...";
     $input.name ="search";
     $input.type = "search";
    $form.appendChild($input);
    $form.classList.add("form-search");
    return $form;
}