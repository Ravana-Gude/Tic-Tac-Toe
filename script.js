// document.getElementByClassName(".className")  ===> returns HTMl collection(array form)
// document.querySelector(".className/Tag name") ===> returns first occurance of html elemnt with className
// document.querySelectorAll(".className/Tag name")==> returns All occurance of html elemnt with className

// document.getElementByClassName(".className")[0].innerText ===>returns text inside class
// document.querySelector(".className/Tag name").innerText===>returns text inside class
// document.querySelectorAll(".className/Tag name").innerText==> returns text inside class

//.innerHTML ===>returns in html format

console.log("Welcome to Tic Tac Toe");
let turnMusic=new Audio("ting.mp3");
let turn="X";

// Function to change the turn
const changeTurn=()=>{
    return turn==="X"?"0":"X";
}

let isgameOver=false;
// Function to check for a win
const checkWin=()=>{
    let boxtexts=document.getElementsByClassName("box-text");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach((element)=>{
        if((boxtexts[element[0]].innerText)===(boxtexts[element[1]].innerText)&&(boxtexts[element[1]].innerText)===(boxtexts[element[2]].innerText)&&(boxtexts[element[0]].innerText!==""))
            {
            document.getElementsByClassName("info")[0].innerText=boxtexts[element[0]].innerText +" Won";
            isgameOver=true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="166px";
            // cannot directly apply style on imgBox,because it is a div element,occupies whole space.Where as img taghas some width already,so wecan apply style
        }
    });

}

// Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext=element.querySelector(".box-text");
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            turnMusic.play();
            checkWin();
            if(!isgameOver){
            document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
            }

        }
    });
});


// add onclick listener to reset button
// when we click on reset button 

document.getElementById('reset-btn').addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".box-text");
    Array.from(boxtext).forEach((element)=>{
        element.innerText="";
    });
    turn="X";
    isgameOver=false;
    document.getElementsByClassName("info")[0].innerText="Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width="0px";

})

