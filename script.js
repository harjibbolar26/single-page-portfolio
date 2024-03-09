const links = document.querySelectorAll(".link");
const navbar = document.querySelector(".navbar");
let stop = navbar.offsetTop;
const sections = document.querySelectorAll(".section");
const images = document.querySelectorAll(".image");
const prev = document.getElementById("left-arrow");
const next = document.getElementById("right-arrow");
let slideInterval;
const open = document.getElementById("hamburger");
const close = document.getElementById("close");
const menuWrap = document.querySelector(".list-item-wrap")
const menu = document.querySelector(".list-item")

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    // e.preventDefault();
    const active = document.getElementsByClassName("active");

    active[0].className = active[0].className.replace("active", "");
    e.target.className += " active";
    const filter = e.target.dataset.filter;
    // alert(filter)

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      // const current = document.getElementsByClassName("current");
      // current[0].className = current[0].className.replace("current", "");
      section.classList.remove("current");
      if (filter === section.id) {
        section.style.backgroundColor = "#1c4bda";
        section.style.color = "#fff";
      } else {
        section.style.backgroundColor = "#fff";
        section.style.color = "#000";
      }
    }
    // closeMenu()
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= stop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    images[0].classList.add("current");
  }
  current.classList.remove("current");
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    images[images.length - 1].classList.add("current");
  }
  current.classList.remove("current");
};

next.addEventListener("click", () => {
  nextSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
});

prev.addEventListener("click", () => {
  prevSlide();
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 3000);
});

slideInterval = setInterval(nextSlide, 3000);

const openMenu = () => {
    open.style.display = "none";
    close.style.transform = "translateY(0)"
    menu.style.transform = "translateX(0)"
    menuWrap.style.transform = "translateX(0)"
}

const closeMenu = () => {
    open.style.display = "block";
    close.style.transform = "translateY(-20rem)"
    menu.style.transform = "translateX(200%)"
    menuWrap.style.transform = "translateX(-200%)"
}

open.addEventListener("click", openMenu)
close.addEventListener("click", closeMenu)
menuWrap.addEventListener("click", closeMenu)