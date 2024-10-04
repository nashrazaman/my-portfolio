// Get all links and divs
const mixed = document.getElementById('mix');
const procreate = document.getElementById('pro');
const photoBtn = document.getElementById('photo');
const divMixed = document.getElementById('mixed');
const divPro = document.getElementById('procreate');
const divPhoto = document.getElementById('photoshop');

function hideAllDivs() {
  divMixed.style.display = 'none';
  divPro.style.display = 'none';
  divPhoto.style.display = 'none';
}

function removeActiveClass() {
    mixed.classList.remove('active');
    procreate.classList.remove('active');
    photoBtn.classList.remove('active');
  }


mixed.addEventListener('click', function(event) {
  event.preventDefault(); 
  hideAllDivs(); 
  divMixed.style.display = 'block';

    removeActiveClass();
    mixed.classList.add('active');
});


procreate.addEventListener('click', function(event) {
  event.preventDefault(); 
  hideAllDivs();
  divPro.style.display = 'block'; 

    
    removeActiveClass();
    procreate.classList.add('active');
});


photoBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
  hideAllDivs();
  divPhoto.style.display = 'block'; 
  console.log('Illustrator section displayed');

   
    removeActiveClass();
    photoBtn.classList.add('active');
});
