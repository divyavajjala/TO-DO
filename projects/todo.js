function submitButtonClick() { 
    //creating elements//
    let listItemElement = document.createElement("li");
    createCheckboxAndAppendToListItem(listItemElement);
    let textLabel = document.createElement("label");
    let todoItemText = document.getElementById("text").value;
    textLabel.innerHTML = todoItemText;
    textLabel.classList.add("taskLabel");
    let editBtnRefElement = document.createElement("button");
    editBtnRefElement.innerHTML = "edit";
    editBtnRefElement.classList.add("editBtn");
    let doneBtnRefElement = document.createElement("button");
    doneBtnRefElement.innerHTML = "Done";
    doneBtnRefElement.style.display="none";
    doneBtnRefElement.classList.add("doneBtn");
    let dltBtnRefElement = document.createElement("button");
    dltBtnRefElement.innerHTML = "delete";
    dltBtnRefElement.classList.add("dltBtn");
    //append child method allows you to add node to the end of the list of child nodes of a specified parent node//
    listItemElement.appendChild(textLabel);
    listItemElement.appendChild(editBtnRefElement);
    listItemElement.appendChild(doneBtnRefElement);
    listItemElement.appendChild(dltBtnRefElement);
    addActionListeners(listItemElement, textLabel, editBtnRefElement, doneBtnRefElement, dltBtnRefElement);
    //prepend method puts element at first index and append puts element at last index//
    (document.getElementById("task")).prepend(listItemElement);
     //to clear the input text once user submit the button//
     document.getElementById("text").value="";
}
//create checkbox element and appends to newly created listitem element
function createCheckboxAndAppendToListItem(newlyCreatedListItemElement) {
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox")
    newlyCreatedListItemElement.appendChild(checkbox);
}

var submitBtnRef = document.getElementById("btn");
submitBtnRef.onclick = submitButtonClick;

//handling edit button for task

function editText(textLabel,editBtnRefElement,doneBtnRefElement) {
    textLabel.contentEditable = true;
    editBtnRefElement.style.display = "none";
    doneBtnRefElement.style.display = "inline-block";
    // textLabel.style:hover = ;
    textLabel.style.cursor = "auto";
    textLabel.style.color = "#00FFFF";
    textLabel.style.textOverflow = "clip";
}

//handling done button for task

function doneText(listItemElement, oldTextLabel, editBtnRefElement, dltBtnRefElement, doneBtnRefElement) {
    let newTextLabel = document.createElement("label");
    newTextLabel.classList.add("taskLabel");
    newTextLabel.innerHTML = oldTextLabel.innerHTML;
    oldTextLabel.replaceWith(newTextLabel);
    doneBtnRefElement.style.display = "none";
    editBtnRefElement.style.display = "inline-block";
    addActionListeners(listItemElement, newTextLabel, editBtnRefElement, doneBtnRefElement, dltBtnRefElement);
    // textLabel.contentEditable = false;
}

function addActionListeners(listItemElement, newTextLabel, editBtnRefElement, doneBtnRefElement, dltBtnRefElement) {
    editBtnRefElement.addEventListener("click", function(){ editText(newTextLabel,editBtnRefElement,doneBtnRefElement); });
    doneBtnRefElement.addEventListener("click", function(){doneText(listItemElement, newTextLabel, editBtnRefElement, dltBtnRefElement, doneBtnRefElement)});
    dltBtnRefElement.addEventListener("click", function(){dltText(listItemElement)});
}

// handling delete button for task
// remove method allows you to remove the element

function dltText(listItemElement) {
    listItemElement.remove();
}

//without append and prepend(bhanu's help)
// let oldData = document.getElementById("task").innerHTML;
    // oldData = oldData.replace(/<br>/g,"\n");
    // console.log(oldData);
    // document.getElementById("task").innerText = todoItemText;
    // let combinedList = todoItemText + "\n"+ oldData;
    // if(oldData===""){
    //    combinedList = todoItemText;
    // }
    // document.getElementById("task").innerHTML = listItemElement;
    

    //apply discount based on the shopping cart total
    //if the shopping cart total 

//     var passengers = [ { name: "Jane Doloop", paid: true },
//  { name: "Dr. Evel", paid: true },
//  { name: "Sue Property", paid: false },
//  { name: "John Funcall", paid: true } ];
//   //write a function to check if every passenger in the passenger's list paid the price
//   //abhilash asked me to check if evryone paid or not?
//   //then my brain took the list and saw the paid column
//   //go one by one 

//   function checkPaidList (passengers) {
//     for(var i=0; i<passengers.length; i++){
//         if(!passengers[i].paid===true){
//             return false;
//         }
//     }
//     return true;
//   }