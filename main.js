document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#animatedText", {
      strings: [
        "Hello",
        "Bonjour",
        "Hola",
        "Привет",
        "Hallo",
        "Ciao",
        "Olá",
        "안녕하세요",
        "Merhaba",
        "नमस्ते",
        "こんにちは",
        "你好",
    
      ],
      speed: 150,
      breakLines: false,
      loop: true,
      deleteSpeed: 100,
      nextStringDelay: 1500,
    }).go();
  });


  document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 800,  // animation duration in ms
      once: false,     // animate only once while scrolling down
    });
  });


  // document.addEventListener("DOMContentLoaded", function () {
  //   const header = document.getElementById("mainHeader");
  //   const trigger = document.getElementById("triggerSection");
  //   const myName = document.getElementById("myname");
  //   const buttons = document.querySelectorAll(".button button");
  
  //   function handleScroll() {
  //     const triggerTop = trigger.getBoundingClientRect().top;
  
  //     if (triggerTop <= 0) {
  //       // Apply scrolled styles
  //       header.classList.remove("bg-white/90");
  //       header.classList.add("bg-black/90",  "backdrop-blur-lg");
  
  //       myName.classList.remove("text-black");
  //       myName.classList.add("text-white");
  
  //       buttons.forEach(btn => {
  //         btn.classList.remove("bg-black", "text-white");
  //         btn.classList.add("bg-white", "text-black");
  //       });
  //     } else {
  //       // Restore original styles
  //       header.classList.remove("bg-black");
  //       header.classList.add("bg-white/90");
  
  //       myName.classList.remove("text-white");
  //       myName.classList.add("text-black");
  
  //       buttons.forEach(btn => {
  //         btn.classList.remove("bg-white", "text-black");
  //         btn.classList.add("bg-black", "text-white");
  //       });
  //     }
  //   }
  
  //   window.addEventListener("scroll", handleScroll);
  // });
  

  // new header change

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded - Setting up header scroll effect");
    
    // Get elements
    const header = document.getElementById("mainHeader");
    const myName = document.getElementById("myname");
    const buttons = document.querySelectorAll(".button button");
    const trigger = document.getElementById("triggerSection");
    
    // Validate elements exist
    if (!header) {
      console.error("Header element with ID 'mainHeader' not found!");
      return;
    }
    
    if (!myName) {
      console.error("Name element with ID 'myname' not found!");
      return;
    }
    
    if (!trigger) {
      console.error("Trigger section with ID 'triggerSection' not found!");
      return;
    }
    
    if (buttons.length === 0) {
      console.warn("No buttons found with selector '.button button'");
    }
    
    console.log("All elements found successfully");
    console.log("Trigger section offset top:", trigger.offsetTop);
    
    function handleScroll() {
      const scrollY = window.scrollY;
      const triggerOffset = trigger.offsetTop;
      const triggerHeight = trigger.offsetHeight;
      const triggerBottom = triggerOffset + triggerHeight;
      
      console.log("Scroll position:", scrollY, "Trigger start:", triggerOffset, "Trigger end:", triggerBottom);
      
      // Calculate if we're within the trigger section
      const isWithinTriggerSection = scrollY >= triggerOffset && scrollY < triggerBottom;
      
      if (isWithinTriggerSection) {
        console.log("WITHIN trigger section - Applying dark header");
        
        // Switch to dark mode
        header.classList.remove("bg-white/90");
        header.classList.add("bg-black/80", "backdrop-blur-sm");
        
        if (myName) {
          myName.classList.remove("text-black");
          myName.classList.add("text-white");
        }
        
        buttons.forEach(btn => {
          btn.classList.remove("bg-black", "text-white");
          btn.classList.add("bg-white", "text-black");
        });
      } else {
        console.log("OUTSIDE trigger section - Applying light header");
        
        // Switch to light mode (both above and below the trigger section)
        header.classList.remove("bg-black/80", "backdrop-blur-sm");
        header.classList.add("bg-white/90");
        
        if (myName) {
          myName.classList.remove("text-white");
          myName.classList.add("text-black");
        }
        
        buttons.forEach(btn => {
          btn.classList.remove("bg-white", "text-black");
          btn.classList.add("bg-black", "text-white");
        });
      }
    }
    
    // Set initial state
    console.log("Setting initial state");
    handleScroll();
    
    // Add scroll event listener
    console.log("Adding scroll event listener");
    window.addEventListener("scroll", function() {
      // Use requestAnimationFrame for better performance
      window.requestAnimationFrame(handleScroll);
    });
    
    console.log("Setup complete");
  });
  // page trnasition


  

  // other project mobile 

  document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
  
    if (!carousel || !nextBtn || !prevBtn) return;
  
    const items = carousel.children;
    const totalItems = items.length;
    let currentIndex = 0;
  
    function updateCarousel() {
      const offset = -currentIndex * 100;
      carousel.style.transform = `translateX(${offset}%)`;
    }
  
    nextBtn.addEventListener("click", () => {
      if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    updateCarousel(); // initialize
  });
  
  




