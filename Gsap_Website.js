// var g1=gsap.timeline();


gsap.to(".page1 h1",{
    transform:"translateX(-100%)",
        fontWeight:100,
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})