const span = document.querySelector('h1 span');

const wordsList = ['Developer.', 'Coder.', 'Teacher.', 'YouTuber.'];

function autoType(wordsList, element, time = 100) {
  let wordIndex = 0;
  let characterIndex = 0;
  let skipUpdate = 0;
  let reverseType = false;

  const intervalId = setInterval(() => {
    if (skipUpdate) {
      skipUpdate--;
      return;
    }

    if (!reverseType) {
      skipUpdate = 2;
      element.innerText += wordsList[wordIndex][characterIndex];
      characterIndex++;
    } else {
      element.innerText = element.innerText.slice(0, -1);
      characterIndex--;
    }

    if (characterIndex === wordsList[wordIndex].length) {
      skipUpdate = 6;
      reverseType = true;
    }

    if (element.innerText.length === 0 && reverseType) {
      reverseType = false;
      wordIndex++;
    }

    if (wordIndex === wordsList.length) {
      wordIndex = 0;
    }
  }, time);
}

autoType(wordsList, span);
