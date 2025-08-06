
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img"); //Grabs every single image tag and store it into a variable
    var category = 'nature';
    //const apiKey = 'YOUR_API_KEY';


    /*for(const image of images){
        fetch("https://dog.ceo/api/breeds/image/random").then(response => response.json()).then(data => { 
            image.src = data.message
            image.width = 100;
            image.height = 100;
    });        
    }*/

    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });


} )