const hamburger=document.getElementById('hamburger');
const close=document.getElementById('close');
const menu=document.getElementById('menu');
const body=document.getElementById('body');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hidden'); 
    close.classList.toggle('hidden');     
    menu.classList.toggle('hidden');     
    body.classList.toggle('overflow-hidden');
});

close.addEventListener('click', () => {
    hamburger.classList.toggle('hidden'); 
    close.classList.toggle('hidden');    
    menu.classList.toggle('hidden');     
    body.classList.toggle('overflow-hidden'); 
});