let x = ""
let y = ""
let brushSize = "30px"

const changeBrushColor = () => {
    x = document.querySelector("#getColor").value
    document.querySelector("#brushColor").innerHTML = x
}
const changeBgColor = () => {
    y = document.querySelector("#getBgColor").value
    document.querySelector("#paintBgColor").innerHTML = y
    document.querySelector(".paintBody").style.backgroundColor = y
}
const drawing = (e) => {
    let pageX = e.pageX
    let pageY = e.pageY
    let createDiv = document.createElement("div")
    createDiv.classList.add("span")
    createDiv.style.position = 'absolute';
    createDiv.style.left = pageX + 'px';
    createDiv.style.top = pageY + 'px';
    createDiv.style.backgroundColor = x;
    createDiv.style.width = brushSize
    createDiv.style.height = brushSize
    paintBody.append(createDiv)
    const paintErase = () => {
        if (createDiv) {
            createDiv.remove()
        }
    }
    document.querySelector("#deleteAll").addEventListener("click", paintErase)

}
let paintBody = document.querySelector(".paintBody")
paintBody.addEventListener("mousedown", (e) => {
    drawing(e)

    paintBody.addEventListener("mousemove", drawing)
    paintBody.addEventListener("mouseup", () => {
        paintBody.removeEventListener("mousemove", drawing)
    })

})


let createDiv = document.createElement("div")
createDiv.addEventListener('click', (e) => {
    e.target.remove();
    console.log(e);
})

const onDropDownChange = () => {
    let select = document.querySelector("#fontSize")
    let option = select.options[select.selectedIndex];
    brushSize = option.text
}
document.querySelector("#fontSize").addEventListener("change", onDropDownChange)