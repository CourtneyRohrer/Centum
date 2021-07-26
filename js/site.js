//get values from page
//starts or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value; 

    //I need to validate the input
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
            //we call displayNumbers
         displayNumbers(numbers);

    } else {
        alert("You must enter intergers")
    }
}

//generate numbers from the start to end value
//logic function(s)
function generateNumbers(sValue, eValue){
    let numbers = [];

    for (let index = sValue; index <= eValue; index++){
        numbers.push(index);      
    }
    return numbers;
}

//display the numbers and mark the even numbers bold 
//view function
function displayNumbers(numbers){

    let templateRows = "";
    for (let index = 0; index < numbers.length; index++) {

        let className = "even";
        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        }
        else {
            className = "odd"
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}