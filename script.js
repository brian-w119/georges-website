const siteScript = {
  main: document.querySelector(".main-section"),
  about: document.querySelector("about"),
  header: document.querySelector("header"),
  popover: document.querySelector("my-popover"),
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
      /* for (let i = 0; i < 4; i++) {
        this.main.innerHTML = null;
        this.main.style.width = "50vw";
        let image = imageArr[i];
        image.classList.add(`visible2${i + 1}`);
        this.main.appendChild(image);
        setTimeout(() => {
          this.main.innerHTML = null;
        }, 1200);
      }
        */
      /* this.main.innerHTML = null;
      this.main.style.width = "24.5vw";
      this.main.style.height = "auto";
      let image = image1;
      image.classList.add("visible2");
      this.main.appendChild(image);
    
      }
      */

      const intro =
        "At Power Tronic Innovation, problems are our forte'. Thinking out the box to provide a bespoke solution to electrical gremlins is our forte'.";
      //the below two lines of code removes the larger image logo, and adds a smaller one when viewed in mobile format
      const firstChild = this.header.firstElementChild;
      this.header.removeChild(firstChild);
      const newChild = this.images("./images/image7.png");
      this.header.appendChild(newChild);
      newChild.classList.add("image-logo");

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
    // renderImg2();

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

    window.addEventListener("load", () => {
      setTimeout(() => {
        if (window.innerWidth > 480) {
          //checks whether window is larger than mobile/cell phones
          console.log("Inner width > 480 px");
          renderImg();
        } else {
          console.log("Inner width < 480 px");
          renderImg2();
        }
      }, 2000);
      //
      this.body.style.backgroundColor = "blue";
    });
  },
};

//render images for small screen sizes

siteScript.init();
