function buttonClick() { 
    let listItemElement = document.createElement("li");
    let todoItemText = document.getElementById("text").value;
    //to clear the input text once user submit the button//
    document.getElementById("text").value="";
    //creating elements//
    let textLabel = document.createElement("label");
    textLabel.classList.add("taskLabel");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    //append child method allows you to add node to the end of the list of child nodes of a specified parent node//
    listItemElement.appendChild(checkbox);
    // checkbox.style.margin= "5px";
    
    textLabel.innerHTML = todoItemText;
    listItemElement.appendChild(textLabel);
    
    let editBtnRefElement = document.createElement("button");
    editBtnRefElement.innerHTML = "edit";
    listItemElement.appendChild(editBtnRefElement);
    // editBtnRefElement.style.float = "right";
    let doneBtnElement = document.createElement("button");
    doneBtnElement.innerHTML = "Done";
    listItemElement.appendChild(doneBtnElement);
    
    // editBtnRefElement.style.float = "right";
    // doneBtnElement.style.float = "right";
    let dltBtnRefElement = document.createElement("button");
    dltBtnRefElement.innerHTML = "delete";
    listItemElement.appendChild(dltBtnRefElement);
    
    // editBtnRefElement.style.margin = "0px 10px 0px 10px";
    editBtnRefElement.addEventListener("click", function(){ editText(textLabel); });
    // editText.style.cursor = "auto";
    doneBtnElement.addEventListener("click", function(){doneText(textLabel)});
    //remove method allows you to remove the element//
    dltBtnRefElement.addEventListener("click", function(){dltText(listItemElement)});
    //prepend method puts element at first index and append puts element at last index//
    (document.getElementById("task")).prepend(listItemElement);
}
var submitBtnRef = document.getElementById("btn");
submitBtnRef.onclick = buttonClick;
//handling edit button for task
function editText(textLabel) {
    textLabel.contentEditable = true;
    textLabel.style.cursor="auto";
    textLabel.style.color = "#00FFFF";
    textLabel.style.textOverflow ="clip";
}
function doneText(textLabel){
//  textLabel = document.getElementById('selectable');
// const selection = window.getSelection();
// const range = document.createRange();
// selection.removeAllRanges();

    textLabel.contentEditable = false;
    textLabel.style.color = "white";
    // textLabel.focus();
    // textLabel.setSelectionRange(start,start);
    // textLabel.style.textOverflow ="ellipsis";
}

// handling delete button for task
function dltText(listItemElement){
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