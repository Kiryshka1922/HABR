console.log ("");
const but1 = document.querySelector('.button-1')
const but2 = document.querySelector('.button-2')
const but0 = document.querySelector('.button-0')
console.log(but0)
console.log(but1);
function clickevent1(){
    if (but1.style.border != '#4CB7EB solid 2px' ){
        but1.style.border = '#4CB7EB solid 2px';
        but1.style.color = '#4CB7EB';
        //but1.style.background-color  '#4CB7EB';
        but2.style.border = "red";
        but2.style.color = '#fff';
    }}
function clickevent2(){
    if (but2.style.border != '#4CB7EB solid 2px' ){
        but2.style.border = '#4CB7EB solid 2px';
        but2.style.color = '#4CB7EB';
        //but1.style.background-color  '#4CB7EB';
        but1.style.border = "red";
        but1.style.color = '#fff';
    } 
}
 function clickevent0(){
if (but0.style.border != '#4CB7EB solid 2px' ){
        but0.style.border = '#4CB7EB solid 2px';
    }
//if (but0.style.border = '#4CB7EB solid 2px' ){
        //but0.style.border = 'white';}
}