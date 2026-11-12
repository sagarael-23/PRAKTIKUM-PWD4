const inputPassword = document.getElementById("password");
const checkboxToggle = document.getElementById("togglePassword");
const toggleText = document.getElementById("toggleText");
const statusBadge = document.getElementById("statusBadge");

checkboxToggle.addEventListener("change", function () {
    if (checkboxToggle.checked) {
        inputPassword.type = "text";               
        toggleText.textContent = "SEMBUNYIKAN";
        statusBadge.textContent = "TERLIHAT";
        statusBadge.classList.add("terlihat");
    } else {
        inputPassword.type = "password";          
        toggleText.textContent = "LIHAT";
        statusBadge.textContent = "TERSEMBUNYI";
        statusBadge.classList.remove("terlihat");
    }
});