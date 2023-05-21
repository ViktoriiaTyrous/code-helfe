const tabButtons = document.querySelectorAll('.structure__btn');
const tabContentBoxes = document.querySelectorAll('.structure__content-box');

const arrowRightBtn = document.querySelector('.arrow-right');
const arrowLeftBtn = document.querySelector('.arrow-left');

let currentTabIndex = 0;

function showTab(index) {
  tabContentBoxes.forEach(box => box.classList.remove('active'));
  tabContentBoxes[index].classList.add('active');
  tabButtons.forEach(button => button.classList.remove('active'));
  tabButtons[index].classList.add('active');
  currentTabIndex = index;
}

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showTab(index);
  });
});

arrowLeftBtn.addEventListener('click', () => {
  currentTabIndex++;
  if (currentTabIndex >= tabContentBoxes.length) {
    currentTabIndex = 0;
  }
  showTab(currentTabIndex);
});

arrowRightBtn.addEventListener('click', () => {
  currentTabIndex--;
  if (currentTabIndex < 0) {
    currentTabIndex = tabContentBoxes.length - 1;
  }
  showTab(currentTabIndex);
});

const btns = document.querySelectorAll('.structure__btn-mobile');
const contentBox = document.querySelectorAll('.structure__content-box-mobile');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    if (contentBox[i].style.display !== 'block') {

      
    
      contentBox.forEach(box => {
        box.style.display = 'none';
      });
      contentBox[i].style.display = 'block';
      btns.forEach(btn => {
        btn.classList.remove('active'); 
      });
      btns[i].classList.add('active');
    }
  });
}