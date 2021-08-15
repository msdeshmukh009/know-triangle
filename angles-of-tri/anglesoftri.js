var inputAngles = document.querySelectorAll(".input");
var outputDiv = document.querySelector("#isTriangle");
var checkBtn = document.querySelector("#button");
var form =document.querySelector("#input-form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var firstAngle = Number(inputAngles[0].value);
    var secondAngle = Number(inputAngles[1].value);
    var ThirdAngle = Number(inputAngles[2].value);
    var sum = firstAngle+secondAngle+ThirdAngle;
    
    if(sum===180){
        outputDiv.innerText = "Yup!! this will work."
    }else{
        outputDiv.innerText = "nahh!! this is not feeling right."
    }
})

