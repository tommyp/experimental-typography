const headerTags = document.querySelectorAll('h1, h2');

const runRandom = (tag) => {
  const originalContent = tag.dataset.original;
  let newContent = '';
  let num = 0;
  const randomList = 'abcdefghijklmnopqrstuvwxyz!@£$%^&*'.split('');

  const addInterval = setInterval(() => {
    num++;

    newContent = originalContent.substring(0, num);

    if (tag.innerHTML == originalContent) {
      clearInterval(addInterval);
      clearInterval(randomInterval);
    }
  }, 100);

  const randomInterval = setInterval(() => {
    tag.innerHTML = newContent;

    for (let i = newContent.length; i < originalContent.length; i++) {
      tag.innerHTML =
        tag.innerHTML +
        randomList[Math.floor(Math.random() * randomList.length)];
    }
  }, 50);
};

const observer = new IntersectionObserver(
  (entires) => {
    entires.forEach((entry) => {
      if (entry.intersectionRatio > 0.5) {
        runRandom(entry.target);
      }
    });
  },
  {
    threshold: [0, 0.5, 1],
  }
);

headerTags.forEach((heading) => {
  heading.dataset.original = heading.innerHTML;
  observer.observe(heading);
});
