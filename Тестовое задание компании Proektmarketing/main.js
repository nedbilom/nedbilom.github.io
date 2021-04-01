const titleBtn = document.querySelector('.about-section__btn');
const hobby = document.querySelector('.about-section__hobby');
const photo = document.querySelector('.about-section__photo');

const inputs = Array.from(document.querySelectorAll('.about-section__input'));

const range = document.querySelector('.js-section__range');
const points = Array.from(document.querySelectorAll('.points__point'));

titleBtn.addEventListener('click', (e) => {
  e.preventDefault();

  hobby.style.display = 'block';
  photo.style.display = 'none';
})

titleBtn.addEventListener('dblclick', (e) => {
  e.preventDefault();

  hobby.style.display = 'none';
  photo.style.display = 'block';
})


points[range.value].classList.add('points__point_active');

range.addEventListener('input', () => {
  points.forEach(point => point.classList.remove('points__point_active'));

  points[range.value].classList.add('points__point_active');
})

inputs.forEach(input => {
  if (input.value === "") {
    input.parentElement.classList.remove('about-section__field-label_active');
  } else {
    input.parentElement.classList.add('about-section__field-label_active');
  }
})

inputs.forEach(input => {
  input.addEventListener('focus', function() {
    input.parentElement.classList.add('about-section__field-label_active');
  })

  input.addEventListener('blur', function() {
    if (this.value === "") {
      input.parentElement.classList.remove('about-section__field-label_active');
    }
  })
});