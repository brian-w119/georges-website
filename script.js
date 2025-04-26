const siteScript = {
  main: document.querySelector(".main-section"),
  header: document.querySelector("header"),
  about: document.querySelector(".about"),

  body: document.querySelector("body"),

  images: (image) => {
    const img = document.createElement("img");
    img.src = image;
    return img;
  },

  init: function () {
    const image1 = this.images("./images/power-tronic1.png");
    const image2 = this.images("./images/image6.png");
    const image3 = this.images("./images/solar-system-inst.png");
    const image5 = this.images("./images/image5.png");

    const imageArr = [image5, image1, image2, image3];

    //renders images for mobile phones
    const renderImg2 = () => {
      const intro =
        "At Power Tronic Innovation, problems are our forte'. Thinking out the box to provide a bespoke solution to electrical gremlins is our forte'.";

      // removes the intro text and adds it back due to styling issues
      const thirdChild =
        this.body.firstElementChild.nextElementSibling.nextElementSibling;
      this.body.removeChild(thirdChild);
      const text = document.createElement("p");
      text.classList.add("text2");
      text.innerHTML = intro;
      const child3 =
        this.body.firstElementChild.nextElementSibling.nextElementSibling;

      //positionsthe newly added intro text
      this.body.insertBefore(text, child3);

      //text.style.opacity = "0";
      text.style.leftanimation = "fadeIn(52 forwards)";

      const firstChild = this.header.firstElementChild;
      this.header.removeChild(firstChild);
      const newChild = this.images("./images/image7.png");
      newChild.classList.add("image-logo");
      //this.header.appendChild(newChild);
      this.header.insertBefore(newChild, this.header.firstChild);

      this.main.style.width = "24.5vw";
      this.main.style.height = "auto";
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          let image = imageArr[i];
          image.classList.add(`visibleA${i + 1}`);
          image.style.marginBottom = "2vh";
          //this.main.style.width = "50vw";
          this.main.appendChild(image);
          // image.classList.remove("visible"); // cancels the fade in/ fade out effect
        }, 2600 * i);
      }
    };

    const renderImg = () => {
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          let image = imageArr[i];
          image.classList.add(`visible${i + 1}`);
          this.main.style.width = "50vw";
          this.main.appendChild(image);
          // image.classList.remove("visible"); // cancels the fade in/ fade out effect
        }, 800 * i);
      }
    };

    if (window.innerWidth < 480) {
      renderImg2();
    } else {
      renderImg();
    }
  },
};

//render images for small screen sizes

siteScript.init();
