document.addEventListener("scroll", () => {
  let header = document.querySelector("nav");
  header.classList.toggle("header", window.scrollY > 0);
});

const photo = document.getElementsByClassName("top-section")[0];
const image = document.querySelector(".image");

photo.onclick = () => {
  image.classList.add("active");
};

image.onclick = () => {
  image.classList.remove("active");
};

const letsTalk = document.querySelector(".btn");

letsTalk.onclick = () => {
  alert("Please contact me");
};
