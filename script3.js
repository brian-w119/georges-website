const info = document.createElement("p");
info.classList.add("company-info");
const body = document.querySelector("body");

const text = `Welcome to Power Tronic Innovation. We pride ourselves on being able to solve your electrical gremlins. Thinking outside 
the box to solve problems is our forte'.`;

const speed = 50;
let i = 0;
let content = "";
const typeWriter2 = () => {
  if (i < text.length) {
    content += text.charAt(i);
    info.innerHTML = content;
    i++;
    setTimeout(typeWriter2, speed);
  }
  body.insertBefore(info, body.children[2]);
};
//typeWriter2();

if (window.innerWidth < 480) {
  console.log("mobile viewing");
  typeWriter2();
}
