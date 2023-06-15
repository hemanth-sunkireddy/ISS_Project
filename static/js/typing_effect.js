const text = document.getElementById("typing-text").textContent; 
const delay = 200; 
document.getElementById("typing-text").textContent="";
let index = 0;
function type() {
document.getElementById("typing-text").textContent += text[index];
index++;
if (index < text.length) {
    setTimeout(type, delay);
}
else{
    index=0;
    document.getElementById("typing-text").textContent=""
    setTimeout(type, delay);
}
}
type();