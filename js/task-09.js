function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}





const refs = {

  changeBtn: document.querySelector('.change-color'),
  nameColor: document.querySelector('.color'),
  body: document.querySelector('body'),
};

refs.changeBtn.addEventListener('click', onChangeColor);



function onChangeColor() {
  
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.nameColor.innerHTML = color;

};


