var todo = ["Buy new turtle"];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here

var input = prompt("what would you like to do");

while (input !== "quit"){
	if(input === "list"){
		listTodo();
		
	} else if (input === "new"){
		add();
	} else if(input === "delete"){
		Delete();
	}
	input = prompt("what would you like to do");
}
console.log("ok, you quit");
}, 500);

function listTodo(){
	todo.forEach(function(todos,i){

		console.log(i +":"+todos);
	});
}

function add(){
	var newTodo = prompt("enter new to do");
	todo.push(newTodo);
	console.log("Added.");
}

function Delete(){
	var index = prompt ("Enter index of todo to delete");
		todo.splice(index,1);
		console.log("Deleted.")
}