function dragStart(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.getAttribute("drag_id"));
}
function dragOver(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.querySelector("*[drag_id = "+data+"]"))
}

window.addEventListener("DOMContentLoaded", () => {

});
