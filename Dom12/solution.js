document.addEventListener("DOMContentLoaded", function(){ //callback for eventListener
    solveTask1();
	solveTask2();
	solveTask3();
	solveTask4();
	solveTask5();
	solveTask6();
	solveTask7();
	solveTask8();
	solveTask9();
});

//Task 1 - Using innerText to change the content
function taskOne(){
    document.getElementById("task1").innerText = "Implemented the function for the first question using innerText.";
}

//Task 2 - Using innerHTML to add a submit button
function taskTwo(){
    document.getElementById("task2").innerHTML = '<button type="submit">Submit</button>';
}

//Task 3 - Changing the background color to #232323
function taskThree(){
    document.body.style.backgroundColor("#232323");
}

//Task 4 - Make all the elements that have class 'item' to have a border
function taskFour(){
    document.querySelectorAll(".item").forEach(item => {
        item.style.border = "1px solid black";
    });
}

// Task 5 - Change the href attribute of this link to 'https://www.springboard.com/'.
function taskFive(){
    document.getElementById("task5").href = 'https://www.springboard.com/';
}

//Task 6 - Change value to DOM Master
function taskSix(){
    document.getElementById("task6").value = "DOM Master";
}

//Task 7 - Use classList to add 'new-class' to this element.
function taskSeven(){
    document.getElementById("task7").classList.add("new-class"); 
}

//Task 8 - Append a new button under this element.
function taskEight(){
    const newButton = document.createButton("button");
    newButton.innerText = "New Button";
    document.getElementById("task8").appendChild(newButton);
}

//Task 9 - Remove this element
function taskNine(){
    const elementNine = document.getElementById("task9");
    elementNine.parentNode.removeChild(elementNine);
}
