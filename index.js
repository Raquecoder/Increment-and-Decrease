let countEl=document.getElementById('count')// this is call pass arguments
let count= 0;

console.log(countEl);
function increment(){
    
    count= count + 1;
    countEl.innerText = count;
    console.log(count);
}

function decrease(){
    count= count-1 ;
    countEl.innerText= count;
    console.log(count);
}