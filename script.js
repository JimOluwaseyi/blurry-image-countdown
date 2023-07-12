const count = document.querySelector("#count");
const image = document.querySelector("img");
const textDiv = document.querySelector("#text-div");

let counting = 0;

const onCounting = () => {
  if (counting < 100) {
    counting++;
    count.innerText = `${counting} %`;
    image.style.filter = `blur(${100-counting}px)`;
    textDiv.style.opacity = `${100-counting}%`;
  } else if (counting >= 100) {
    textDiv.style.filter = '';
    image.style.filter = ''
    clearInterval(myInterval);
  }
};


let myInterval = setInterval(onCounting, 20);
