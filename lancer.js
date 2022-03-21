// JavaScript 
let base = `
  <svg xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" fill="currentColor" class="bi bi-yin-yang m-auto" viewBox="0 0 16 16">
    <path d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0Z"/>
    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7Zm7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334Z"/>
  </svg>
`
let lancer6=`
  <div class="h-33 d-flex justify-content-around">
    <button class="deScore1"></button>
    <button class="deScore1 "></button>
    <button class="deScore1"></button>
  </div>
  <div class="h-33 d-flex justify-content-around">
    <button class="deScore1"></button>
    <button class="deScore1"></button>
    <button class="deScore1"></button>
  </div>
`
let lancer5 =`
  <div class="d-flex justify-content-around">
    <button class="deScore1"></button>
    <button class="deScore1"></button>
  </div>
  <div class="d-flex justify-content-around">
    <button class="deScore1"></button>
  </div>
  <div class="d-flex justify-content-around">     
    <button class="deScore1"></button>
    <button class="deScore1"></button>
  </div>     
`

let lancer4=`
  <div class="h-33 d-flex justify-content-around">
    <button class="deScore1"></button>
    <button class="deScore1"></button>
  </div>
  <div class="h-33 d-flex justify-content-around">
    <button class="deScore1"></button>
    <button class="deScore1"></button>
  </div>
`

let lancer3=`
  <div class="d-flex justify-content-end m-3">
    <button class="deScore1"></button>
  </div>
  <div class="h-33 d-flex justify-content-around">
    <button class="deScore1"></button>
  </div>
  <div class="h-33 d-flex justify-content-start m-3">
    <button class="deScore1"></button>
  </div>
`

let lancer2=`
  <div class="d-flex justify-content-around">
    <button class="deScore1"></button>
    <button class="deScore1"></button>
  </div>`

let lancer1=`
  <div class="d-flex justify-content-around">
    <button class="deScore1" type=disabled >
  </div>
`

const RollDice = (jetD) =>{
  jetD.point = Math.floor(Math.random()*6 +1);
  if (jetD.point===1){ 
    jetD.score = 0
    return jetD
  } else{
    jetD.score += jetD.point;
    return jetD
  }

}

class JetD{
  constructor(){
    this.score=0
    this.point=0
    this.player=1
    this.stock1=0
    this.stock2=0
  }
  reset(){
    this.score=0
    this.point=0
    this.player=1
  }
  resetComplet(){
    this.reset()
    this.stock1=0
    this.stock2=0
  }
  switchP(){
    if (this.player===1) this.player=2;
    else this.player=1;
  }
  
}
$(document).ready(() => {
  //Initialisation différente variable
  let jetD = new JetD();
  // Button principaux
  const startB = document.getElementById('jouer');
  const reset = document.getElementById('reset');
  const butPs= document.getElementById('cash')
  const butP2 = document.getElementById('butP2');
  const butP1 = document.getElementById('butP1');

  //button fenetre modal 
  const chiant = document.getElementById('chiant');
  const vainqueur = document.getElementById('nomVainqueur');
  const resetVainqueur = document.getElementById('vainqueurReset')

  //affichage
  let tourP= document.getElementById('tourP');
  let score1= document.getElementById('stockP1')
  let score2= document.getElementById('stockP2')
  const player1=document.getElementById('scoreP1');
  const player2=document.getElementById('scoreP2');

  // Joueur
  let name1= document.getElementById('joueur1');
  let name2= document.getElementById('joueur2');

  // DE
  let deHTML = document.getElementById('deStyle');


  deHTML.innerHTML= base
  startB.addEventListener('click', () => {
    jetD = RollDice(jetD)
    switch (jetD.point){
      case 1: {
        deHTML.innerHTML=base;
        setTimeout(() => {
          deHTML.innerHTML=lancer1;
          
        }, 1000);
        break;
      }
      case 2: {
        deHTML.innerHTML=base;
        setTimeout(() => {
          deHTML.innerHTML=lancer2;
        }, 1000)
         break;
      }
      case 3: {
        deHTML.innerHTML=base;
        setTimeout(() => {
          deHTML.innerHTML=lancer3;
        }, 1000);
        break;
      }
      case 4: {
        deHTML.innerHTML=base;
        setTimeout(() => {
          deHTML.innerHTML=lancer4;
        }, 1000);
        break;
      }
      case 5: {
        deHTML.innerHTML=base;
        setTimeout(() => {
          deHTML.innerHTML=lancer5;
        }, 1000);
        break;
      }
      case 6: {
        deHTML.innerHTML=base;
        setTimeout(() => {
          deHTML.innerHTML=lancer6;
        }, 1000); break;
      }
    }
    console.log(`Round actuel : ${jetD.score}`)
    setTimeout(() => {
      if (jetD.player===1){
        player1.innerHTML=jetD.score;
        if (jetD.point===1) {
          jetD.switchP();
          tourP.innerHTML=name2.innerHTML
          $('#jet1').toggle()
        }
      } else{
        player2.innerHTML=jetD.score;
        if (jetD.point===1) {
          jetD.switchP();
          tourP.innerHTML= name1.innerHTML
          $('#jet1').toggle()
        }
      }
    }, 1000);
    
  });
  chiant.addEventListener('click', () =>{
    console.log('click')
    $('#jet1').hide()
  })
  //Bouton reset

  reset.addEventListener('click', () => {
    deHTML.innerHTML=base;
    jetD.resetComplet();
    player1.innerHTML=jetD.score;
    player2.innerHTML=jetD.score;
    name1.innerHTML= 'Player 1';
    name2.innerHTML= 'Player 2'
    score1.innerHTML= '0'
    score2.innerHTML= '0'
    tourP.innerHTML= name1.innerHTML
    document.getElementById("forjoueur2").value=''
    document.getElementById("forjoueur1").value=''
  })

  // modification playeur 2

  butP2.addEventListener('click', () =>{
    var input = document.getElementById("forjoueur2").value;
    name2.innerText= input;
    if (jetD.player===2) tourP.innerHTML= name2.innerHTML
    if ((name2.innerHTML!=='Player 2') && (input!=='')) {
      $('#forjoueur2').hide()
      $('#butP2').hide()
    }
  })
  // modification du playeur 1

  butP1.addEventListener('click', () =>{
    var input = document.getElementById("forjoueur1").value;
    name1.innerText= input;
    if (jetD.player===1) tourP.innerHTML= name1.innerHTML
    if ((name2.innerHTML!=='player 2')&&(input!=='')) {
      $('#forjoueur1').hide()
      $('#butP1').hide()
    }
  })

  // Mise en score
  
  butPs.addEventListener('click', () =>{
  if (jetD.score!==0){

    if (jetD.player===1) {
      jetD.stock1+=jetD.score;
      score1.innerHTML=jetD.stock1;
      jetD.switchP();
      tourP.innerHTML= name2.innerHTML;
      jetD.score=0;

    }else{
      jetD.stock2+=jetD.score;
      score2.innerHTML=jetD.stock2;
      jetD.switchP();
      tourP.innerHTML= name1.innerHTML;
      jetD.score=0;
    }
    if ((jetD.stock1>=100) || (jetD.stock2>=100)){
      if (jetD.stock1>=100){
        vainqueur.innerHTML=name1.innerHTML
        $('#modalVainqueur').toggle()
      }
      if (jetD.stock2>100){
        vainqueur.innerHTML=name2.innerHTML
        $('#modalVainqueur').toggle()
      }

      resetVainqueur.addEventListener('click', () =>{
        console.log('click')
        deHTML.innerHTML=base;
        jetD.resetComplet();
        player1.innerHTML=jetD.score;
        player2.innerHTML=jetD.score;
        score1.innerHTML= '0'
        score2.innerHTML= '0'
        tourP.innerHTML= name1.innerHTML
        document.getElementById("forjoueur2").value=''
        document.getElementById("forjoueur1").value=''
        $('#modalVainqueur').hide()

      })
      
      
    }
  }
  })
})