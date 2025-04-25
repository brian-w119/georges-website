// this module contains the code for the typewrites effect on the about page

const about = document.querySelector(".about");

const text = `If it has electricity flowing through it, we can fix it.
The founder of Power Tronic Innovation is degree qualified in Electrical
Engineering, and has extensive hands on experience in the repair of a
variety of electrical/electronic systems.
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
