document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const images = document.querySelectorAll(".image");
  let currentIndex = 0;

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      scrollGallery();
    } else if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      scrollGallery();
    }
  });

  function scrollGallery() {
    const imageWidth = images[currentIndex].clientWidth;
    const scrollOffset = currentIndex * (imageWidth + 20); 
    gallery.scrollTo({
      left: scrollOffset,
      behavior: "smooth",
    });
  }
});

// задвання 2
const controls = document.querySelector('#controls');
    const input = controls.querySelector('input');
    const renderButton = controls.querySelector('button[data-action="render"]');
    const destroyButton = controls.querySelector('button[data-action="destroy"]');
    const boxesContainer = document.querySelector('#boxes');

    renderButton.addEventListener('click', () => {
      createBoxes(parseInt(input.value, 10));
    });

    destroyButton.addEventListener('click', destroyBoxes);

    function createBoxes(amount) {
      destroyBoxes(); 
      const boxes = [];
      let size = 30;

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomColor();
        boxes.push(box);
        size += 10;
      }

      boxesContainer.append(...boxes);
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }

    function getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    }