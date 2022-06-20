let par1 = document.getElementById('textCard1')
let p1 = document.getElementById('p1li')
let par2 = document.getElementById('textCard2')
let p2 = document.getElementById('p2li')
let par3 = document.getElementById('textCard3')
let p3 = document.getElementById('p3li')

p1.addEventListener("mouseenter", function(event){
  par1.classList.remove('cacher')
})
p1.addEventListener("mouseleave", function(event){
  par1.classList.add('cacher')
})
p2.addEventListener("mouseenter", function(event){
  par2.classList.remove('cacher')
})
p2.addEventListener("mouseleave", function(event){
  par2.classList.add('cacher')
})
p3.addEventListener("mouseenter", function(event){
  par3.classList.remove('cacher')
})
p3.addEventListener("mouseleave", function(event){
  par3.classList.add('cacher')
})