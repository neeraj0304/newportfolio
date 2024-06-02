




document.addEventListener("DOMContentLoaded", function () {
  const toggleCheckbox = document.getElementById("checkbox");
  const navbarLinks = document.querySelectorAll(".navbar a");

  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleCheckbox.checked = false;
    });
  });
});






var timePeriodInMs = 5000;

setTimeout(function() 
{ 
    document.getElementById("loadersecond").style.display = "none"; 
}, 
timePeriodInMs);



/* var overflows = 5000;

setTimeout(function() 
{ 
    document.getElementById("black").style.display="inline"; 
}, 
overflows); */







/* function breakTheText() {

  var h1 = document.querySelector(" p")
  
  var h1Text = h1.textContent
  
  var splittedText = h1Text.split("")
 
  var clutter = ""
  
  splittedText.forEach(function (elem) {
 
  clutter += `<span>${elem}</span>`
  
  })
 
  h1.innerHTML = clutter
 
  }


  breakTheText() */



  






Shery.makeMagnet(".magnet" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});










let tl = gsap.timeline();
 



 tl.to("#loaderfirst h1,#loaderfirst h2",{
  textStroke: '2px red',
  duration:2,
 },'a')
 tl.from("#loaderfirst h1",{
   y:-200,
   opacity:0,
   stagger:2,
   duration:2,
   
},'a')


tl.from("#loaderfirst h2",{
  y:200,
  opacity:0,
  
  duration:2,
},"a"
)

tl.to("#loaderfirst",{
  opacity:0,
  duration:1
})
tl.to("#loadersecond #top",{
  x:-1000,
  duration:2,
  
},'b')
tl.to("#loadersecond #bottom",{
  x:1000,
  duration:2,
  
},'b')






   tl.from("#left h1", {
  y: -50,
  opacity: 0,

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
      start:"0% 50%",
      end:"50% 50%",         
      
      scrub: 1,
    },
  });
});

let a = gsap.matchMedia();
a.add("(max-width:1024px)", () => {
  tl.from("#second  #pic img", {
    scale: 0,
   
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#second  ",
      
      start: "0% 90%",
      end: "10% 50%",
      scrub: 1,
    },
  });
});
 
tl.from("#second h1, #second p , #second .c ",{
  
  opacity:0,
  scale:1.5,
  scrollTrigger:{
    trigger:"#second",
    start:"0% 50%",
      end:"70% 50%",         
      
      scrub: 1,
  }
})




a.add("(min-width:1025px)", () => {
  tl.from("#third  h1", {
    x: -1000,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
      trigger: "#second",

      start: "50% 50%",
      end: "90% 50%",
      scrub: 1,
    },
  });
});

a.add("(max-width:1024px)", () => {
  tl.from("#third  h1", {
    x: -1000,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
      trigger: "#third h1",
      
      start: "0% 100%",
      end: "50% 120%", 
      scrub: 1,
    },
  });
});

tl.from("#third #p_wrapper", {
  scale: 0,
  opacity: 0,
  x: 1000,
  scrollTrigger: {
    trigger: "#second",

    start: "90% 50%",
    end: "120% 50%",
    scrub: 1,
  },
});

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




   
  tl.from("#middle button,#credits", {
    y: 30,
    opacity: 0,
    scale: 0,
    stagger: .1,
    scrollTrigger: {
      trigger: "#middle",
      scrub: true,
      start: "-150% 70%",
      end: "130% 90%",
      
    },
  });
 



   







