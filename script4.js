const removeChild = () => {
  const firstChild = this.header.firstElementChild;
  this.header.removeChild(firstChild);
  const newChild = this.images("./images/image7.png");
  newChild.classList.add("image-logo");
};

export default removeChild;
