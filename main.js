 const bodyE1= document.getElementsByTagName('body');
 function changeBackgroundcolour(event){
    const backgroudcolour = event?.target?.value;
    bodyE1[0].style.backgroundcolour = backgroudcolour;
 }