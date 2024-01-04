function addBlock() {
    const targetBox = document.getElementById("block");
    const newBox = document.createElement("div");
    newBox.className = "block";
    targetBox.appendChild(newBox);
}

function removeBlock() {
    const targetBox = document.getElementById("block");
    targetBox.lastChild.remove();
}