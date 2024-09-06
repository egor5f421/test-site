let checkbox = document.getElementById("theme_checkbox");
let body = document.body

checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
        body.style.color = "black";
        body.style.backgroundColor = "white";
    } else {
        body.style.color = "white";
        body.style.backgroundColor = "black";
    }
});