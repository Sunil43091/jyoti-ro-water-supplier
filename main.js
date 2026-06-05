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