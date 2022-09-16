// get body element reference
// here we can get element reference in 5 ways
// refer https://www.w3schools.com/js/js_htmldom_elements.asp
const bodyEl = document.getElementsByTagName('body');

// onchange event handler 
// it will be triggered when ever we change the background color
function changeBackgroundColor(event) {
    const backgroundColor = event?.target?.value;
    bodyEl[0].style.backgroundColor = backgroundColor;
}