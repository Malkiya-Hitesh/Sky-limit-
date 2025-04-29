
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