const i1=document.getElementById(`i1`)
const r1=document.getElementById(`r1`)
const r2=document.getElementById(`r2`)
const b=document.getElementById(`b`)
const h=document.getElementById(`h`)
let temp
function Convert(){
    if(r1.checked){
        temp=Number(i1.value)
        temp=(9*temp+160)/5
        h.textContent=temp.toFixed(1)+"F"
    }
    else if(r2.checked){
        temp=Number(i1.value)
        temp=(5*temp-160)/9
        h.textContent=temp.toFixed(1)+"C"
    }
    else{
        h.textContent=`Please choose a conversion`
    }
}