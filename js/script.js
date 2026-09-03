const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("nav");

//literally just makes the header jump to its appropriate spot
menuButton.addEventListener("click", function() {

    navigation.classList.toggle("active");

});