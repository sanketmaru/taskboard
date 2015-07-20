var bonzaiBoards = [];
var todoId = "Todo", completeId = "Complete", inProgress = "InProgress";

// template function
var _removeTaskFromBoard = function(board, trElement){
    board.removeTask(trElement.id);
    trElement.remove();
};

var addTask = function(){
  var taskName = document.getElementById("taskName").value;
  var todoBoard;
  if(!taskName){
    alert("Please add a Task Description");
    return;
  }

  for(var i=0;i<bonzaiBoards.length;i++){
    if(bonzaiBoards[i].getBoardId() === todoId ){
      todoBoard = bonzaiBoards[i];
    }
  }
  todoBoard.addTask(taskName);
};

function run(){

  var boards = document.getElementById("boards");

  var todoBoard = new Board(todoId);
  var todoBoardTemplate = new BoardTemplate(todoId);
  todoBoard.setTemplate(todoBoardTemplate);
  var todoBoardRootElement = todoBoardTemplate.getElement();
  boards.appendChild(todoBoardRootElement);

  todoBoardRootElement.addEventListener("click", function(event){
    var imageDiv = event.target.parentElement;
    var trElement = imageDiv.parentElement;

    if(imageDiv.id === "cancel"){
      _removeTaskFromBoard.apply(this, [todoBoard, trElement]);
      return;
    }

    if(imageDiv.id === "complete"){
      completeBoard.addTask(trElement.innerText);
      _removeTaskFromBoard.apply(this, [todoBoard, trElement]);
      return;
    }

    event.target.contentEditable = false;
  });

  todoBoardRootElement.addEventListener("dblclick", function(event){
    event.target.contentEditable = true;
  });

  var completeBoard = new Board(completeId);
  var completeBoardTemplate = new CompleteBoardTemplate(completeId);
  completeBoard.setTemplate(completeBoardTemplate);
  var completeBoardRootElement = completeBoardTemplate.getElement();
  boards.appendChild(completeBoardRootElement);

  completeBoardRootElement.addEventListener("click", function(event){
    var imageDiv = event.target.parentElement;
    var trElement = imageDiv.parentElement;

    if(imageDiv.id === "cancel"){
      _removeTaskFromBoard.apply(this, [completeBoard, trElement]);
      return;
    }
  });

  bonzaiBoards.push(todoBoard);
  bonzaiBoards.push(completeBoard);
}
