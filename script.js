const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mouseenter", (e) => {
    const { pageX, pageY } = e;
    const { offsetTop, offsetLeft } = card;

    span = card.querySelector("span");

    x = pageX - offsetLeft;
    y = pageY - offsetTop;

    span.style.cssText = `left: ${x}px; top:${y}px;`;
  });
});

cards.forEach((card) => {
  card.addEventListener("mouseout", (e) => {
    const { pageX, pageY } = e;
    const { offsetLeft, offsetTop } = card;
    const span = card.querySelector("span");

    x = pageX - offsetLeft;
    y = pageY - offsetTop;

    span.style.cssText = `left: ${x}px; top:${y}px;`;
  });
});
