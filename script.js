//Adding event listeners to the menu and navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
//Maximizing my portfolio image
let imageMaximized = document.querySelector('.photo');
imageMaximized.onclick = () =>{
    imageMaximized.classList.toggle('maximized');
}

//Adding event listeners to the read more button
let card = document.querySelector('.card');
let readMoreBtn = document.querySelector('.button');
let showParagraph = document.querySelector('.hidden');
readMoreBtn.addEventListener('click', function() {
    card.classList.toggle('expanded');
    showParagraph.classList.toggle('hidden');
});


