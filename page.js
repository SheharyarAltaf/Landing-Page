// Select The Elements
var toggle_btn;
var wraper;


function declare() {
    toggle_btn = document.querySelector(".toggle-btn");
    wraper = document.querySelector(".wraper");
    
}

const main = document.querySelector("main");

declare();

let dark = false;

function toggleAnimation() {
    // Clone the wrapper
    dark = !dark;
    let clone = wraper.cloneNode(true);
    if (dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

   

    clone.addEventListener("animationend", () => {
       
        wraper.remove();
        // clone.classList.remove("copy");
        // Reset Variables
        declare();
        events();
    });
}

function events() {
    toggle_btn.addEventListener("click", toggleAnimation);
}

events();