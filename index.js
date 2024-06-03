// function time() {
//     const now = new Date();
//     document.getElementById("time").innerHTML = "เวลา " + now.toLocaleString();
// }
// setInterval(time, 1000)
let textbox = document.getElementById("textbox")
const one = () => textbox.value = textbox.value + document.getElementById("1").innerHTML
const two = () => textbox.value = textbox.value + document.getElementById("2").innerHTML
const three = () => textbox.value = textbox.value + document.getElementById("3").innerHTML
const four = () => textbox.value = textbox.value + document.getElementById("4").innerHTML
const five = () => textbox.value = textbox.value + document.getElementById("5").innerHTML
const six = () => textbox.value = textbox.value + document.getElementById("6").innerHTML
const seven = () => textbox.value = textbox.value + document.getElementById("7").innerHTML
const eight = () => textbox.value = textbox.value + document.getElementById("8").innerHTML
const nine = () => textbox.value = textbox.value + document.getElementById("9").innerHTML
const zero = () => textbox.value = textbox.value + document.getElementById("0").innerHTML
const dot = () => textbox.value = textbox.value + document.getElementById("dot").innerHTML
const plus = () => textbox.value = textbox.value + "+"
const minus = () => textbox.value = textbox.value + "-"
const multiply = () => textbox.value = textbox.value + "*"
const divide = () => textbox.value = textbox.value + "/"
const del = () => textbox.value =  "" + textbox.value
const enter = () => textbox.value = eval(textbox.value)