var t1 = gsap.timeline()
t1
.from("#text h1",{
    delay:1,
    opacity:0,
    duration:1,
    y: 60
},"-=1")
.from("#text h6",{
    delay:0.4,
    opacity:0,
    duration:1,
    y: 60
},"-=1")
.from("#soico",{
    delay:0.4,
    opacity:0,
    duration:2,
    y: 20
},"-=1")

gsap.from("#im1",{
    scrollTrigger:{
        trigger: "#aboutPk",
        start: "top 100%",
        end:"top top",
        // markers:true ,
        scrub: true,
        // pin: true
    },
    opacity: 0,
    delay : 0 ,
    duration : 2 ,
    x:-50
})
gsap.from("#im2",{
    scrollTrigger:{
        trigger: "#roww",
        start: "top 90%",
        // markers:true ,
        scrub: true,
        // pin: true
    },
    opacity: 0,
    delay : 0 ,
    duration : 1 ,
    x:150
})
gsap.from(".gallerytext h3",{
    scrollTrigger:{
        trigger: "#aboutPk",
        start: "top 80%",
        // markers:true ,
        scrub: true,
        // pin: true
    },
    opacity: 0,
    delay : 0 ,
    duration : 5 ,
    // y:-25
})
gsap.from(".cntnrtxt h2, .ri-play-circle-line",{
    scrollTrigger:{
        trigger: "#musicpage",
        start: "top 40%",
        // markers:true ,
        scrub: true,
        // pin: true
    },
    opacity: 0,
    delay : 0 ,
    duration : 5 ,
    // y:-25
})

gsap.from("#maine",{
    scrollTrigger:{
        trigger: "#events",
        start: "top 80%",
        // markers:true ,
        scrub: true,
        // pin: true
    },
    opacity: 0,
    delay : 0 ,
    duration : 5 ,
    // y:-25
})

gsap.from("#contentsection h2",{
    scrollTrigger:{
        trigger: "#page-ab",
        start: "top 90%",
        // markers:true ,
        scrub: true,
        // pin: true
    },
    opacity: 0,
    delay : 0 ,
    duration : 5 ,
    // y:-25
})

gsap.from(".contactForm",{
    scrollTrigger:{
        trigger: "#contactus",
        start:"top 90%",
        scrub:true,
        // markers:true
    },
    opacity: 0,
    delay : 0 ,
    // duration : 2
    // y:-25
})

gsap.from("#pg7imgcontents",{
    scrollTrigger:{
        trigger: "#page7",
        start: "top 200%",
        // markers:true ,
        scrub: true,
        // pin: true
    },
    opacity: 0,
    delay : 0 ,
    duration : 2 ,
    // y:-25
})
gsap.to(".contactimgbox",{
    scrollTrigger:{
        trigger: ".contact",
        start:"top 65%",
        end:"top 100%",
        scrub:5,
        // markers:true
    },
    opacity: 1,
    transform:"rotate(0deg)",
    duration:1
})
gsap.from("#pg7maincontents",{
    scrollTrigger:{
        trigger: "#page7",
        start: "top 100%",
        // markers:true ,
        scrub: true,
        // pin: true
    },
    opacity: 0,
    delay : 0 ,
    duration : 2 ,
    // y:-25
})