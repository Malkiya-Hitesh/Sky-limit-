let time = gsap.timeline();
const courseElement = ['#c1', '#c2', '#c3'];
const heading=["#heading1","#heading2","#heading3","#heading4"];
time.from(".hero-left", {
    y: 300,
    opacity: 0,
    duration: 2,
});

time.from('#hero-img',{
    x: 300,
    opacity: 0,
    duration: 2,
    delay: -1,

})

courseElement.forEach((id) => {
    gsap.from(id, {
        x: 400,
        opacity: 0,
        scrollTrigger: {
            trigger: id,
            duration: 3.5,
            start: "top 90%",
            end: "top 40%",
            scroller: "body",
            scrub: true,

        }
    })
})
gsap.from('.about img ',{
    x: -300,
    opacity: 0,
    duration: 3,
    scrollTrigger: {
        trigger:'.about img',
        duration: 3.5,
        scroller: "body",
        start: "top 90%",
        end: "top 40%",
        scrub: true,
    }
    })
    gsap.from('.about .about-right',{
        x: 300,
        opacity: 0,
        duration: 3.5,
        scrollTrigger: {
            trigger:'.about .about-right',

            duration: 3.5,
            start: "top 90%",  
            end: "top 40%", 
            scroller: "body",   
            scrub: true,
        }
        })
heading.forEach((id) => {
gsap.from(id,{
    x: 300,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: id,
            duration: 3,
            start: "top 90%",
            end:"50%",
            scroller: "body",
  
        }
})
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbwplFQNeLE1ocbgnobYUDDBya0YUUR2tospVb3AWsAtY3lW5DbU-fFqVAyLVAZR7Q2y/exec'
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e);

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
});
