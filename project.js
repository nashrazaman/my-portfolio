const pinNibble = document.getElementById('pin-nibble');
const nibbleText = document.getElementById('nibble');

pinNibble.addEventListener('mouseover', () => {
  nibbleText.style.display = 'block';
});

pinNibble.addEventListener('mouseleave', () => {
  nibbleText.style.display = 'none';
});

