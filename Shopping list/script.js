var myForm = document.getElementById("myForm");
var myInput = document.getElementById("myInput");
var myItem = document.getElementById("myItem");

myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (myInput.value.trim() !== ""){
        createItem(myInput.value);
    }
});

function createItem(inputItems) {
    var item = `<li>${inputItems} <button onclick="deleteElement(this)">Delete</button></li>`;
    myItem.insertAdjacentHTML("beforeend", item);
    myInput.value = "";
    myInput.focus();
}

function deleteElement(elementToDeLete) {
    elementToDeLete.parentElement.remove();
}
