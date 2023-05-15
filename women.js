
let api="https://63c63b14d307b7696735016b.mockapi.io/product?name=women"   
 let api1="https://63c63b14d307b7696735016b.mockapi.io/product?search=women&sortBy=price&order=asc" 
  let api2="https://63c63b14d307b7696735016b.mockapi.io/product?search=women&sortBy=price&order=desc" 
  let dis=document.getElementById("main_cart") 

 
let filter=document.getElementById("filter")


filter.addEventListener("change",()=>{
if(filter.value==""){
    fapi1()
}else{
    if(filter.value=="high"){
fapi3()
    }else{
       fapi2() 
    }
}
})

 let arr=[]
 fapi1()
function fapi1(){
 fetch(api)
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

function fapi3(){
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

button.addEventListener("click",()=>{
   if(checkduplicate(element)){
alert("Product already in cart")
   }else{
    arr5.push({...element,quentity:1})
    
    localStorage.setItem("cart",JSON.stringify(arr5))
    alert("Product add to cart")
   }


})

count1.innerText=data.length;
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