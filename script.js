gsap.to("#w1",{
    stagger: 0.1,
    scale: 1.5,
    duration: 1.5,
    x: 300
})

gsap.to("#w2",{
    stagger: 0.1,
    scale: 1.5,
    duration: 1.5
})

gsap.to("#w3",{
    stagger: 0.1,
    scale: 1.5,
    duration: 1.5,
    x:-300  
})

gsap.from("#bgblur",{
    opacity: 0
})

gsap.from("#productText h2",{
    stagger: 0.5,
    duration: 1,
    opacity: 0,
    delay: 1.5,
    y: 20
})

gsap.from("#nav a, #home img",{
    stagger: .1,
    y: 50,
    duration: 1,
    ease: Power3,
    opacity: 0
})

gsap.from("#getitnow",{
    duration: 1,
    opacity: 0,
    y: 20,
    delay: 3,
})

gsap.from("#w1Img #bgW1",{
    duration: 2,
    opacity: 0,
    scrollTrigger:{
        trigger:"#watch1",
        scroller: "body",
        start: "top 85%",
        scrub: true
    }
})

gsap.from("#w1Img img",{
    duration: 5,
    x: 500,
    scrollTrigger:{
        trigger:"#watch1",
        scroller: "body",
        start: "top 85%",
        end: "top 5%",
        scrub: true
    }
})

gsap.from("#w1Tittle",{
    duration: 5,
    x: -500,
    scrollTrigger:{
        trigger:"#watch1",
        scroller: "body",
        start: "top 85%",
        end: "top 5%",
        scrub: true
    }
})

gsap.from("#w2Tittle",{
    duration: 5,
    y: 300,
    scrollTrigger:{
        trigger:"#watch2",
        scroller: "body",
        start: "top 85%",
        end: "top 5%",
        scrub: true
    }
})

gsap.from("#w3Img #bgW3",{
    duration: 2,
    opacity: 0,
    scrollTrigger:{
        trigger:"#watch3",
        scroller: "body",
        start: "top 85%",
        end: "top 20%",
        scrub: true
    }
})

gsap.from("#w3Img #w3image",{
    duration: 2,
    rotate: 120,
    scrollTrigger:{
        trigger:"#watch3",
        scroller: "body",
        start: "top 85%",
        scrub: true
    }
})

gsap.from("#w3Tittle",{
    duration: 2,
    x: -500,
    scrollTrigger:{
        trigger:"#watch3",
        scroller: "body",
        start: "top 85%",
        end: "top 10%",
        scrub: true
    }
})