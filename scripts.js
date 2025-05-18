'use strict';

const overlay = document.querySelector('.overlay');
const closebtn = document.querySelector('.close-btn');
const showbtn = document.querySelector('.menu-icon');

showbtn.addEventListener('click', function () {
    console.log("showbutton clicked")
    overlay.classList.remove('hidden');
});

closebtn.addEventListener('click', function () {
    overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
    overlay.classList.add('hidden');
});
