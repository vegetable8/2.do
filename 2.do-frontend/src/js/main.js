var todoInput = document.getElementById("todo-input"); //new-todo
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompletetodosHolder = document.getElementById("incomplete-todos"); //incomplete-todos
var completedtodosHolder = document.getElementById("completed-todos"); //completed-todos

//New todo List Item
var createNewtodoElement = function(todoString) {
	//Create List Item
	var listItem = document.createElement("li");

	//input (checkbox)
	var checkBox = document.createElement("input"); // checkbox
	//label
	var label = document.createElement("label");
	//input (text)
	var editInput = document.createElement("input"); // text
	//button.edit
	var editButton = document.createElement("button");
	//button.delete
	var deleteButton = document.createElement("button");

	//Each element needs modifying

	checkBox.type = "checkbox";
	editInput.type = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	label.innerText = todoString;

	//Each element needs appending
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);

	return listItem;
}

//Add a new todo
var addtodo = function() {
	console.log("Add todo...");
	//Create a new list item with the text from #new-todo:
	var listItem = createNewtodoElement(todoInput.value);
	//Append listItem to incompletetodosHolder
	incompletetodosHolder.appendChild(listItem);
	bindtodoEvents(listItem, todoCompleted);

	todoInput.value = "";
}

//Edit an existing todo
var edittodo = function() {
	console.log("Edit todo...");

	var listItem = this.parentNode;

	var editInput = listItem.querySelector("input[type=text");
	var label = listItem.querySelector("label");

	var containsClass = listItem.classList.contains("editMode");

	//if the class of the parent is .editMode
	if (containsClass) {
		//Switch from .editMode
		//label text become the input's value
		label.innerText = editInput.value;
	} else {
		//Switch to .editMode
		//input value becomes the label's text
		editInput.value = label.innerText;
	}

	//Toggle .editMode on the list item
	listItem.classList.toggle("editMode");

}

//Delete an existing todo
var deletetodo = function() {
	console.log("Delete todo...");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;

	//Remove the parent list item from the ul
	ul.removeChild(listItem);
}

//Mark a todo as complete
var todoCompleted = function() {
	console.log("todo complete...");
	//Append the todo list item to the #completed-todos
	var listItem = this.parentNode;
	completedtodosHolder.appendChild(listItem);
	bindtodoEvents(listItem, todoIncomplete);
}

//Mark a todo as incomplete
var todoIncomplete = function() {
	console.log("todo incomplete...");
	//Append the todo list item to the #incomplete-todos
	var listItem = this.parentNode;
	incompletetodosHolder.appendChild(listItem);
	bindtodoEvents(listItem, todoCompleted);
}

var bindtodoEvents = function(todoListItem, checkBoxEventHandler) {
	console.log("Bind list item events");
	//select todoListItem's children
	var checkBox = todoListItem.querySelector("input[type=checkbox]");
	var editButton = todoListItem.querySelector("button.edit");
	var deleteButton = todoListItem.querySelector("button.delete");

	//bind edittodo to edit button
	editButton.onclick = edittodo;

	//bind deletetodo to delete button
	deleteButton.onclick = deletetodo;

	//bind checkBoxEventHandler to checkbox
	checkBox.onchange = checkBoxEventHandler;
}

// var ajaxRequest = function() {
// 	console.log("AJAX request");
// }

//Set the click handler to the addtodo function
addButton.addEventListener("click", addtodo);
//addButton.addEventListener("click", ajaxRequest);

//cycle over incompletetodosHolder ul list items
for (var i = 0; i < incompletetodosHolder.children.length; i++) {
	//bind events to list item's children (todoCompleted)
	bindtodoEvents(incompletetodosHolder.children[i], todoCompleted);
}

//cycle over completedtodosHolder ul list items
for (var i = 0; i < completedtodosHolder.children.length; i++) {
	//bind events to list item's children (todoIncomplete)
	bindtodoEvents(completedtodosHolder.children[i], todoIncomplete);
}

