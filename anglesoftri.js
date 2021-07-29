var inputAngles = document.querySelectorAll(".input");
var outputDiv = document.querySelector("#isTriangle");
var checkBtn = document.querySelectorAll("#button")

checkBtn.addEventListener("click",angleHandler);

function angleHandler(){
    var firstAngle = Number(inputAngles[0].value);
    var secondAngle = Number(inputAngles[1].value);
    var ThirdAngle = Number(inputAngles[2].value);

    if(firstAngle+secondAngle+ThirdAngle===180){
        console.log("yes")
    }else{
        console.log("no")
    }

}