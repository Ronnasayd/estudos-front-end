window.addEventListener("load", () => {
  const images = [
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.png",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
  ];
  const items = document.querySelectorAll(".item");
  items.forEach((item, index) => {
    item.style.backgroundImage = `url("./assets/images/${images[index]}")`;
  });
});
