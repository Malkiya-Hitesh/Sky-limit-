
const courseElement = ['#c1', '#c2', '#c3'];
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
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbynYlFC4E585oEcLCp9U5iodA9farScQVDrIjMoV27av97nSaTtFYZjW1m25Ptez4yt/exec'
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e);
    
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
});