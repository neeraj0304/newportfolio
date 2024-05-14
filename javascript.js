document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.getElementById("checkbox");
  const navbarLinks = document.querySelectorAll(".navbar a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleCheckbox.checked = false;
    });
  });
});

Shery.makeMagnet(".magnet" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

let tl = gsap.timeline();

/*let mm=gsap.matchMedia();
 mm.add("(max-width:900px)",()=>{
  tl.from(".toggle",{
    y:-400,
    opacity:0,
    
    duration:1,
  })
 })*/

tl.from("#left h1", {
  y: -50,
  opacity: 0,

  duration: 1,
});

let nn = gsap.matchMedia();
nn.add("(min-width:900px)", () => {
  tl.from("#right button", {
    y: -50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.3,
  });
});

tl.from("#matter h5", {
  y: -50,
  opacity: 0,

  duration: 0.2,
});

tl.from("#matter h1  span ", {
  x: -150,
  duration: 1,
  delay: 0.1,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#matter h2", {
  y: -20,
  opacity: 0,

  duration: 0.2,
});

tl.from("#matter button", {
  opacity: 0,
  scale: 0,
  duration: 0.2,
});

let b = gsap.matchMedia();
b.add("(min-width:1025px)", () => {
  tl.from("#second  #pic img", {
    scale: 0,
    x: -200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#second",

      start: "top 120%",
      end: "bottom 90%",
      scrub: 1,
    },
  });
});

let a = gsap.matchMedia();
a.add("(max-width:1024px)", () => {
  tl.from("#second  #pic img", {
    scale: 0,
    x: -200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#second",

      start: "top 110%",
      end: "top -30%",
      scrub: 1,
    },
  });
});


tl.from("#third h1",{

  x:-1000,
  opacity:0,
  scale:0,
  scrollTrigger: {
    trigger: "#second",

    start: "40% 50%",
    end:"70% 50%",
    scrub: 1,
  },
})


tl.from("#third #p_wrapper",{
   scale:0,
   opacity:0,
   x:1000,
  scrollTrigger: {
    trigger: "#second",

    start: "50% 50%",
    end:"130% 50%",
    scrub: 1,
  },

})



tl.from("#fourth  #lefty h1", {
  x: 2000,
  y: -350,
  scale: 0,
  opacity: 1,
  scrollTrigger: {
    trigger: "#third",
    scrub: true,
    start: "20% 50%",
    end: "120% 50%",
  },
});

tl.from(
  "#righty",
  {
    x: -2000,
    y: -350,
    scale: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: "#third",
      scrub: true,
      start: "20% 50%",
      end: "120% 50%",
    },
  },
  "-=1"
); 

a.add("(min-width:1025px)", () => {
  tl.from("#middle button,#credits", {
    y: 200,
    opacity: 0,
    scale: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#third",
      scrub: true,
      start: "90% 50%",
      end: "120% 50%",
    },
  });
});

a.add("(max-width:1024px)", () => {
  tl.from("#middle button,#credits", {
    y: 200,
    opacity: 0,
    scale: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#third",
      scrub: true,
      start: "85% 50%",
      end: "170% 50%",
    },
  });
});
