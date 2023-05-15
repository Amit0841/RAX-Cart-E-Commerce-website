let arr=JSON.parse(localStorage.getItem("ID"))||[]
let inp=document.getElementById("input")
let pass=document.getElementById("pass")

document.getElementById("button").addEventListener("click",(e)=>{
e.preventDefault();
arr.forEach(element => {
if(element.id==inp.value && element.pass==pass.value){

alert("LOGIN SUCCESS : Click home to go main page")
window.location.href="./index.html"
}else{
    alert("Something is Wrong")
}
});

})
let home=document.getElementById("home")