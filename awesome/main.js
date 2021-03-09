//Select Element function
const SelectElement = function (element) {
	  return document.querySelector(element);
};

let menuToggler = SelectElement('.menu-toggle');
let body = SelectElement('body');

menuToggler.addEventListener('click', function(){
	body.classList.toggle('open');
});

//Scroll reveal
window.sr =scrollReveal();


/*scroll reveal*/
window.sr=scrollReveal();

sr.reveal('.animate-left'),{
   origin: 'left',
   duration:1000,
   distance:'25rem',
   delay:300
};


sr.reveal('.animate-right'),{
   origin: 'right',
   duration:1000,
   distance:'25rem',
   delay:600
};