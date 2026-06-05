const menuBtn =
document.getElementById("menuBtn");

const navMenu =
document.getElementById("navMenu");

menuBtn.addEventListener(
"click",
()=>{

menuBtn.classList.toggle(
"active"
);

navMenu.classList.toggle(
"active"
);

}
);

/* close menu after click */

document
.querySelectorAll(".nav-menu a")
.forEach(link=>{

link.addEventListener(
"click",
()=>{

menuBtn.classList.remove(
"active"
);

navMenu.classList.remove(
"active"
);

});

});

const bar =
document.getElementById("progressBar");

const text =
document.getElementById("progressText");

const wave =
document.querySelector(".wave");

const wave2 =
document.querySelector(".wave2");

let progress = 0;

const loading = setInterval(()=>{

progress++;

bar.style.width =
progress + "%";

text.innerHTML =
progress + "%";

const level =
-170 + (progress * 1.4);

wave.style.bottom =
level + "px";

wave2.style.bottom =
(level - 10) + "px";

if(progress >= 100){

clearInterval(loading);

setTimeout(()=>{

document
.getElementById("loader")
.classList
.add("loader-hide");

},400);

}

},20);
