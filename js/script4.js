const pictocliks = document.getElementsByClassName("pictoclick")
console.log(pictocliks)
let real = document.getElementById("changeP")
let v=''

Array.from(pictocliks).forEach(element => {
    element.addEventListener('click', picto1)
  
});
function picto1(evt){
  switch (evt.currentTarget.getAttribute("id")){
    case "1":
      v = "Peinture"
      break
    case "2":
      v = "Debosselage"
      break
    case "3":
      v= "Vitrage"
      break
    case "4":
      v="Entretien & Réparation"
      break
    case "5":
      v="Essuis glaces"
      break
    case "6":
      v="Ponçage"
      break
    default:
      v=''
      break

  }
  real.innerText=v
}