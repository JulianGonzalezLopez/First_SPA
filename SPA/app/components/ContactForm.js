export function ContactForm(){
    const $form = document.createElement("form");
    const $styles = document.getElementById("dynamic-styles");
    $styles.innerHTML = `
    main form{
        --main-color:#74BDCB;
        --secondary-color:aqua;
        --baby-blue:#E7F2F8;
        --font-color:white;
        --salmon-color:#FFA384;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10%;
        padding:1rem;
        background-color: var(--baby-blue);
    }
    main form > *{
        padding: .5rem;
    }
    
    main form > input[type='submit']{
        margin-top: .5rem;
        border: 1px var(--main-color) solid;
        border-radius: 10%;
        background-color: var(--main-color);
        color:var(--font-color);
    }
    main form > input[type='submit']:hover{
        transition: all .5s ease;
        background-color: var(--secondary-color);
    }
    main form > input[type='submit']:active{
        transition: all .5s ease;
        background-color: var(--salmon-color);
        border-color: black;  
    }
    main form > textarea{
        resize: none;
    }
    
    .fade{
        animation-name: fading;
        animation-duration: 0.5s;
        animation-iteration-count: 4;
    }
    @keyframes fading {
        0%{
            opacity: 1;
        }
        50%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    `;
    $form.innerHTML=`
    <legend>Send me an email! Don't be shy</legend>

                <label for="nombre">Name:  <input type="text" name="nombre" placeholder=" Gaspar Gomez" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" title="Ingresa tu nombre usando solo letras y espacios" required ></label>
            
                <label for="email">Email:  <input type="email" name="email"     placeholder=" larilu@termo74.com" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" title="Ingresa un email valido" required></label>
                
                <label for="subject">Subject:  <input type="text" name="subject" required></label>
                
                <label for="comments">Leave your comments down here!</label>   
                <textarea name="comments" id="" cols="30" rows="10" required></textarea>

                <input type="submit" id="sendEmail" value="Submit">`

    document.addEventListener("submit",(e)=>{
        //IF E MATCHES THE FORM SUBMIT BTN
        if(e.target.matches("form")){
            e.preventDefault();
            //CHANGES THE BTN TO AN IMG (AVOIDING STACKOVERFLOW)
            //FETCHES THE FORMSUBMIT API 
            fetch("https://formsubmit.co/ajax/ab72b771ef040cfbf0ea972f4c6b23ee", 
            {
                //HTTP VERB
                method: "POST",
                //SENT DATA
                body: new FormData(e.target)
            })
            .then(res=> res.ok ? res.json() : Promise.reject()) //VALITATION OF THE RESPONSE. IF NEGATIVE, THEN REJECT
            .catch(err=>console.log(err)) //ERROR CASE
            .finally(()=>{
                console.log("fin"); //FINALLY
            });
        }
        e.target.reset();
    })
    
    return $form;
}