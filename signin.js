
let inp =document.getElementById("input")
let pass=document.getElementById("pass")
let arr=[]
document.getElementById("button").addEventListener("click",(e)=>{
e.preventDefault();
let obj={
    id : inp.value,
    pass : pass.value,
}
arr.push(obj)
localStorage.setItem("ID",JSON.stringify(arr))
// alert("Sing up success")
})