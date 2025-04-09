const siteScript = {
  main: document.querySelector(".main-section"),
  about: document.querySelector("about"),

  images: (image) => {
    const img = document.createElement("img");
    img.src = image;
    return img;
  },

  init: function () {
    const image1 = this.images("./images/power-tronic1.png");
    const image2 = this.images("./images/image6.png");
    const image3 = this.images("./images/image3.png");
    const image5 = this.images("./images/image5.png");

    const imageArr = [image1, image2, image3, image5];
    //
    const renderImg = () => {
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          let image = imageArr[i];
          image.classList.add("visible");
          this.main.appendChild(image);
          image.classList.remove("visible"); // cancels the fade in/ fade out effect
        }, 3000 * i);
      }
    };
    renderImg();
  },
};

siteScript.init();
