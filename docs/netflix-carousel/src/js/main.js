window.addEventListener("load", () => {
  const preview = document.getElementById("preview");
  const next = document.getElementById("next");
  const container = document.querySelector(".container");
  let active_class = 0;
  container.querySelectorAll("section")[active_class].classList.add("active");
  preview.addEventListener("click", () => {
    if (active_class === 0) {
      active_class = container.children.length - 1;
    } else {
      active_class -= 1;
    }
    console.log(active_class, container.children[active_class]);
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
    console.log(active_class, container.children[active_class]);
    container.children[active_class].scrollIntoView({
      behavior: "smooth",
    });
  });
});
