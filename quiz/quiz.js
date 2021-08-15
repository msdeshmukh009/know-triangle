var quizForm = document.forms[0];
var qDiv = document.querySelectorAll(".question");
var scoreBox =document.querySelector(".score-box");
var submiBtn = document.querySelector("#button");

var correctChoice = ["option1","option2","option1","option2","option1","option3","option1","option1","option3","option3"]
let score = 0;

quizForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data = new FormData(quizForm);
    let index=0;
    for(let entry of data){
        if(entry[1] == correctChoice[index]){
         qDiv[index].style.backgroundColor = "lightgreen";
         score++;
        }
        else{
         qDiv[index].style.backgroundColor = "pink";
        }
         index++;
     }
     scoreBox.innerText = "score= "+score+"/10";
     submiBtn.style.display= "none";
})
