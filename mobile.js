let api1="https://63ca76e04f53a004202382d4.mockapi.io/mobile"   
 let api2="https://63ca76e04f53a004202382d4.mockapi.io/mobile?sortBy=price&order=desc"
 api3="https://63ca76e04f53a004202382d4.mockapi.io/mobile?sortBy=price&order=asc"
 let dis=document.getElementById("main_cart") 
let arr=[]
 
let filter=document.getElementById("filter")


filter.addEventListener("change",()=>{
if(filter.value==""){
    fapi1()
}else{
    if(filter.value=="low"){
fapi3()
    }else{
       fapi2() 
    }
}
})


fapi1()
function fapi1(){
     fetch(api1)
 .then((request)=>{
return request.json()
 })
 .then((data)=>{
console.log(data)
arr=data
check(data)
 })
 .catch((err)=>{
console.log(err)
 })
}


function fapi2(){
     fetch(api2)
 .then((request)=>{
return request.json()
 })
 .then((data)=>{
console.log(data)
arr=data
check(data)
 })
 .catch((err)=>{
console.log(err)
 })
}
function fapi3(){
     fetch(api3)
 .then((request)=>{
return request.json()
 })
 .then((data)=>{
console.log(data)
arr=data
check(data)
 })
 .catch((err)=>{
console.log(err)
 })
}

let inp=document.querySelector("form")
inp.addEventListener("submit",(e)=>{
    e.preventDefault()
    let search=document.getElementById("scarch").value
    let f=arr.filter(element=>{
        if(element.name.toUpperCase().includes(search.toUpperCase())==true){
return true
        }else{
return false
        }
    })
    check(f)
    console.log(f)
})

 let count1=document.querySelector(".count1")

  let arr5=JSON.parse(localStorage.getItem("cart"))||[]

 function check(data){ 
   dis.innerHTML=null
data.forEach(element => {
    let div=document.createElement("div")

    let img=document.createElement("img")
    img.src=element.avatar
let h4=document.createElement("h4")
h4.innerText="RaxCart"
let p=document.createElement("p")
p.innerText=element.name
let p1=document.createElement("h1")
p1.innerText="₹"+element.price
let button =document.createElement("button")
button.innerText="Add To Cart" 
count1.innerText=data.length

button.addEventListener("click",()=>{
   if(checkduplicate(element)){
alert("Product already in cart")
   }else{
    arr5.push({...element,quentity:1})
    
    localStorage.setItem("cart",JSON.stringify(arr5))
    alert("Product add to cart")
   }


})

div.append(img,h4,p,p1,button)
   dis.append(div) 
});
 }
 
function checkduplicate(element){
   for(let i=0;i<arr5.length;i++){
if(arr5[i].id==element.id){
    return true
}
   } 
   return false
}
