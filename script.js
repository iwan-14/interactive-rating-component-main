const cardReview = document.querySelector('.card-review');
const cardThanks = document.querySelector('.card-thanks');
const rateText = document.querySelector('.rate span');
const buttons = document.querySelectorAll('.btn');
const submitButton = document.querySelector('#submits');

cardThanks.style.display = 'none';

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    buttons.forEach((btn) => btn.classList.remove('selected'));
    button.classList.add('selected');
    rateText.textContent = index + 1;
  });
});

submitButton.addEventListener('click', () => {
  if (rateText.textContent !== '') {
    cardReview.style.display = 'none';
    cardThanks.style.display = 'block';
  } else {
    alert('Silakan pilih rating terlebih dahulu.');
  }
});
