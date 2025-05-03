// this module contains the code for the typewrites effect on the about page

if (window.innerWidth < 480) {
  // this conditional changes the logo for screens smaller than 480 px
  const header = document.querySelector("header");
  const headerImg = document.querySelector(".header-img");
  headerImg.remove();

  const img = document.createElement("img");
  img.src = "./images/image7.png";
  img.classList.add("image-logo");
  header.appendChild(img);
}

if (window.innerWidth < 480) {
  const headerLine = document.querySelector("hr");
  headerLine.remove();
}

const about = document.querySelector(".about");

const text = `If it has electricity flowing through it, we can fix it.
The founder of Power Tronic Innovation is degree qualified in Electrical
Engineering, and has extensive hands on experience in the repair of a
variety of electrical, electronic and instrumentation systems.
This includes both domestic and industrial equipment. Additionally, he
has extensive experience in the repair and design of solar systems.`;

const speed = 20;
let i = 0;
let content = "";
const typeWriter = () => {
  if (i < text.length) {
    content += text.charAt(i);
    about.innerHTML = content;
    i++;
    setTimeout(typeWriter, speed);
  }
};
typeWriter();

/*
if (innerWidth < 480) {
  const img2 = document.createElement("img");
  img2.src = "./images/gradImg.png";
  img2.classList.add("grad-img");
  setTimeout(() => document.body.appendChild(img2), 5000);
}
  */
