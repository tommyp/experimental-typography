const headerTags = document.querySelectorAll('h1, h2');

const runRandom = (tag) => {
  const originalContent = tag.innerHTML;
  let newContent = '';
  let num = 0;
  const randomList = 'abcdefghijklmnopqrstuvwxyz!@£$%^&*'.split('');

  const addInterval = setInterval(() => {
    num++;

    newContent = originalContent.substring(0, num);

    if (tag.innerHTML == originalContent) {
      clearInterval(addInterval);
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

headerTags.forEach((heading) => {
  runRandom(heading);
});
