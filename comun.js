

gsap.from('#ul li',{
    x: 60,
    opacity: 0,
    duration: 1,
   stagger:0.4
})




let omenu = document.getElementById('omenu');
let ul = document.getElementById('ul')
let cmene = document.getElementById('cmenu')




cmenu.addEventListener('click', () => {
    ul.classList.toggle('nav-content-o')
    omenu.classList.toggle('omenu');
})

omenu.addEventListener('click', () => {
    omenu.classList.toggle('omenu');
    ul.classList.toggle('nav-content-o')
})


