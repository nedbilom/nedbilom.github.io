"use strict";

var titleBtn = document.querySelector('.about-section__btn');
var hobby = document.querySelector('.about-section__hobby');
var photo = document.querySelector('.about-section__photo');
var inputs = Array.from(document.querySelectorAll('.about-section__input'));
var range = document.querySelector('.js-section__range');
var points = Array.from(document.querySelectorAll('.points__point'));
titleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  hobby.style.display = 'block';
  photo.style.display = 'none';
});
titleBtn.addEventListener('dblclick', function (e) {
  e.preventDefault();
  hobby.style.display = 'none';
  photo.style.display = 'block';
});
points[range.value].classList.add('points__point_active');
range.addEventListener('input', function () {
  points.forEach(function (point) {
    return point.classList.remove('points__point_active');
  });
  points[range.value].classList.add('points__point_active');
});
inputs.forEach(function (input) {
  if (input.value === "") {
    input.parentElement.classList.remove('about-section__field-label_active');
  } else {
    input.parentElement.classList.add('about-section__field-label_active');
  }
});
inputs.forEach(function (input) {
  input.addEventListener('focus', function () {
    input.parentElement.classList.add('about-section__field-label_active');
  });
  input.addEventListener('blur', function () {
    if (this.value === "") {
      input.parentElement.classList.remove('about-section__field-label_active');
    }
  });
});