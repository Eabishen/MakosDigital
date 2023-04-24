
// gsap.from('.featurescards', {
//     scrollTrigger: {
//         trigger: ".featurescards",
//         // markers: true
//       },
//     duration: 0.5,
//     scale: 1.5,
//     stagger: 0.1,
//     ease: "power1.inOut"

// })


// const features = document.querySelectorAll('.featurescards');

// features.forEach(featurecard => {
// let hover = gsap.fromTo(featurecard, 
//     {scale: 1}, 
//     {
//       scale: 1.05, 
//       duration: 0.3, 
//       paused: true, 
//       ease: "power1.inOut"
//     });
//   featurecard.addEventListener("mouseenter", () => hover.play());
//   featurecard.addEventListener("mouseleave", () => hover.reverse());
// })



gsap.registerPlugin(ScrollTrigger);

//////////////////////////////////// 
// Index page

const features = document.querySelectorAll('.featurescards');

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#featuressection",
       
        once:true
    },
  defaults: {
    duration: 0.3,
    scale: 1.5,
    opacity: 0,
    ease: "power2.inOut",
   
  }
});

tl.from('.featurescards', { 
    stagger: 0.1,
    
})
.add(() => {
  features.forEach(featurecard => {
    let hover = gsap.fromTo(featurecard, 
      {scale: 1}, 
      {scale: 1.05, duration:0.2, paused: true});
    featurecard.addEventListener("mouseenter", () => hover.play());
    featurecard.addEventListener("mouseleave", () => hover.reverse());
  });
})


// Contact section

gsap.from('.bgcust', {
    scrollTrigger: {
        trigger: "#contacussection",
       
    },
    scale: 1.1,
    opacity: 0,
    ease: "power2.inOut"
})

gsap.to(".bgcust", {
    
    display: "block",
}

)


// Service page

document.querySelectorAll(".rightsideimage").forEach(
    ele => {
        gsap.from(ele, {
            scrollTrigger: {
                trigger: ele,
                start:"30% 100%"
               
            },
            x: 50,
            duration:0.5,
            opacity: 0,
            ease: "power2.inOut"
        })
    }
)

document.querySelectorAll(".leftsideimage").forEach(
    ele => {
        gsap.from(ele, {
            scrollTrigger: {
                trigger: ele,
                start:"30% 100%"
               
            },
            x: -50,
            duration:0.5,
            opacity: 0,
            ease: "power2.inOut"
        })
    }
)

// Other pages image

gsap.from(".webintrogridimage", {
        scrollTrigger: {
            trigger: ".gridWrapper",
            start:"30% 100%"     
        },
        x: 50,
        duration:0.5,
        opacity: 0,
        ease: "power2.inOut"

})