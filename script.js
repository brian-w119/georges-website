const siteScript = {
  main: document.querySelector(".main-section"),
  header: document.querySelector("header"),
  about: document.querySelector(".about"),
  aboutLink: document.querySelector(".aboutLink"),
  body: document.querySelector("body"),

  images: (image) => {
    const img = document.createElement("img");
    img.src = image;
    return img;
  },

  removeHeader: () => {
    const firstChild = this.header.firstElementChild;
    this.header.removeChild(firstChild);
  },

  init: function () {
    const image1 = this.images("./images/power-tronic1.png");
    const image2 = this.images("./images/image6.png");
    const image3 = this.images("./images/solar-system-inst.png");
    const image5 = this.images("./images/image5.png");

    const imageArr = [image5, image1, image2, image3];

    //changes the logo for the about page to the smaller logo when in mobile/cell phone viewing format
    const changeImg = () => {
      this.aboutLink.addEventListener("click", () => {
        alert("ok");
        this.header.removeChild(this.aboutLink);
      });
    };

    //renders images for mobile phones
    const renderImg2 = () => {
      const intro =
        " Welcome to Power Tronic Innovation. Thinking outside the box to provide a bespoke solution to your technical gremlins is our forte'.";

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
        }, 1000 * i);
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
    //removes rogue duplicate paragraph
    if (innerWidth < 480) {
      const rogueText = document.querySelector(".text");
      rogueText.remove();

      const headerLine = document.querySelector("hr");
      headerLine.remove();
    }
  },
};

//render images for small screen sizes

siteScript.init();
