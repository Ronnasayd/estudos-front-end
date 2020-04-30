window.addEventListener("load", () => {
  const preview = document.getElementById("preview");
  const next = document.getElementById("next");
  const container = document.querySelector(".container");
  const items = document.querySelectorAll(".item");
  const backImage = document.querySelector(".back-image");

  let active_class = 0;

  container.querySelectorAll("section")[active_class].classList.add("active");

  preview.addEventListener("click", () => {
    if (active_class === 0) {
      active_class = container.children.length - 1;
    } else {
      active_class -= 1;
    }
    container.children[active_class].scrollIntoView({
      behavior: "smooth",
    });
  });

  next.addEventListener("click", () => {
    if (active_class === container.children.length - 1) {
      active_class = 0;
    } else {
      active_class += 1;
    }
    container.children[active_class].scrollIntoView({
      behavior: "smooth",
    });
  });

  items.forEach((item) => {
    item.addEventListener("mouseover", () => {
      const imageSrc = item.querySelector("img").src;
      backImage.style.backgroundImage = `url("${imageSrc}")`;
    });
  });
});
