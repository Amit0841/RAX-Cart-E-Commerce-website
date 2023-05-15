 
 let dis=document.getElementById("main_cart") 
 let arr5=JSON.parse(localStorage.getItem("cart"))||[]
let filter=document.getElementById("filter")
 let count1=document.querySelector(".count1")

  let Total_price=document.querySelector(".total-price")

  check()
 function check(){ 
   dis.innerHTML=null
   arr5.forEach((element,i) => {
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
button.innerText="Remove" 


count1.innerText=arr5.length


let quentity=document.createElement("span")
let incrim=document.createElement("button")
let dicrim=document.createElement("button")

incrim.innerText="+"
dicrim.innerText="-"

quentity.innerText=element.quentity
incrim.addEventListener("click",()=>{
  element=element.quentity++
  localStorage.setItem("cart",JSON.stringify(arr5))
  check() 
})

dicrim.addEventListener("click",()=>{
if(element.quentity>1){
  element=element.quentity--
  localStorage.setItem("cart",JSON.stringify(arr5))
  check() 
}
})

button.addEventListener("click",(e)=>{
  e.preventDefault();
  arr5=arr5.filter((ele,ind)=>{
if(ind==i){
return false
}else{
    return true
}
  })
localStorage.setItem("cart",JSON.stringify(arr5))
count1.innerText=arr5.length
check(arr5)

})

div.append(img,h4,p,p1,incrim,quentity,dicrim,button)
   dis.append(div) 
});



let sum=0
 for(let i=0;i<arr5.length;i++){
    sum+=arr5[i].price * arr5[i].quentity
 } 
Total_price.innerText=sum
 }

