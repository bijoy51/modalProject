const openModalBtn = document.getElementById("dialouge-btn");
const dialouge_box= document.getElementById("dialouge");
const closeBtn = document.getElementById("closeBtn");
const lightBox = document.getElementById("lightBox");
const openLightBox = document.getElementById("lightBox-btn");
const closeBtnLight = document.getElementById("closeBtn_1");
const notification = document.getElementById("notification-btn");
const openContact = document.getElementById("contact-btn");
const contactUs = document.getElementById("contact");
const closeContact = document.getElementById("closeBtn_2");
openModalBtn.onclick = function(){
    dialouge_box.style.display = "block";
    dialouge_box.style.animation = "slideDown 0.5s ease-in";
};
closeBtn.onclick = function(){
    dialouge_box.style.display = "none";
};
openLightBox.onclick = function(){
    lightBox.style.display = "block";
    lightBox.style.animation = "slideDown 0.5s ease-in";
};
closeBtnLight.onclick = function(){
    lightBox.style.display = "none";
};
notification.onclick = function(){
    alert("Your submission successful");
};
openContact.onclick = function(){
    contactUs.style.display = "block";
    contact.style.animation = "slideDown 0.5s ease-in";
}
closeContact.onclick = function(){
    contactUs.style.display = "none";
}
