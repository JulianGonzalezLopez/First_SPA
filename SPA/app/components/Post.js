export function Post(props){
    let {title, date, content} = props;
    let dateFormated = new Date(date).toLocaleString();

    let sec = document.createElement("section"),
     aside = document.createElement("aside"),
     h2 = document.createElement("h2"),
     time = document.createElement("time"),
     hr = document.createElement("hr"),
     article = document.createElement("article");

     article.innerHTML = content.rendered;
     time.datetime = date;
     time.textContent = dateFormated;
     h2.textContent = title.rendered;
     aside.appendChild(h2);
     aside.appendChild(time);
     sec.appendChild(aside);
     sec.appendChild(hr);
     sec.appendChild(article);
     sec.classList.add("post-page");

     return sec;
} 