//adding task:
//target "btn" class on "Add task" button
$(".btn").on("click", function(){
  var newTask = prompt("What is the next task?");
  console.log("newTask :", newTask);
//placign newTask into HTML
  var addedTask = "<li><span>" + newTask + "</span></li>" + "<i class= \"fa fa-trash-o\" aria-hidden=\"true\"></i>";
 //targeting "ul" with a id "task-list" and appending the addTask 
  $("#task-list").append(addedTask);
});

//delete the task
//target all fa fas with all elements
$(".fa").click(function(){
  $(this).parent().remove();
});

