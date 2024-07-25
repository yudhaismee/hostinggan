function changeText() {
    var replaceText = document.    
    getElementsByClassName("mini-text");
    replaceText[0].innerHTML = "scroll untuk melihat";
 
    document.getElementId("icon-up").style.display = "none";
 
    document.getElementId("icon-down").style.display = "block";
 
 }

 var btnSubmit = document.querySelector('.submit');
var modal = document.querySelector('.modal-container');

if (btnSubmit) {
  btnSubmit.addEventListener('click', function () {
    modal.classList.add('show');

    const next = document.querySelector('.next');
    next.setAttribute('value', 'https://cobee-the-junior-programmer.netlify.app/contact.html');
  });
}