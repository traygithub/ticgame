const boxes=document.querySelectorAll(".box");

const resetbtn=document.querySelector(".resetbtn");

const new1=document.querySelector(".new");

const msg=document.querySelector("#msg");

const msgcontainer=document.querySelector(".msg-container");
let turnO=true; //player x,player O.agar turnO true hoga to O ayega


//2D array
const winPatterns =[

   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];

//console.log(winPatterns[0][1]);//ase hum array ke value ko access kar sakte hai

//abhi button sab button ko ek bar meinaccess karme klieye


//reset

const resetGame= () =>{
  turnO=true;
  enableBoxes();
  msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
   box.addEventListener('click', ()=>{
    console.log('someone is clicled');
     if(turnO){
      box.innerText="O";//player O
      turnO=false;
      }else{
       box.innerText="X";//player X
       turnO=true
      }
      box.disabled=true;//matlab pehel hum agar ek box par 2bar click karnese value chnage hojata hai butjo first time click kardiya bas wo chnage nhi hoga isliye dislable kardiya
      checkWinner();
   });
});

const enableBoxes= () =>{
  for(let ele of boxes){
    ele.disabled=false;
    ele.innerText="";
  }
}

const disableBoxes= () =>{
  for(let ele of boxes){
    ele.disabled=true;

  }
}
const showWinner = (winner)=>{
  msg.innerText=`Congratulation Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
}
const checkWinner=() =>{

 for(let patterns of winPatterns){
 //   console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText); 	
 //   console.log(patterns[0],patterns[1],patterns[2]);
     let pos1Val=boxes[patterns[0]].innerText;
 	let pos2Val=boxes[patterns[1]].innerText;
 	let pos3Val=boxes[patterns[2]].innerText;
  
    if(pos1Val !="" && pos2Val !== "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log('winner',pos1Val);

        showWinner(pos1Val);
      }
    }

 }

	
};

new1.addEventListener('click',resetGame);
resetbtn.addEventListener('click',resetGame);
