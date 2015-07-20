function Board(id){
  this.boardTasks = [];
  this.taskId = 0;

  var id = id;

  this.getBoardId = function(){
    return id;
  };
};

Board.prototype.setTemplate = function(template){
  this.boardTemplate = template;
};

Board.prototype.getTemplate = function(){
  return this.boardTemplate;
}

Board.prototype.addTask = function(taskName){
  var task = new Task(++this.taskId, taskName);
  var boardTemplate = this.getTemplate();
  boardTemplate.createRow(this.taskId, taskName);
  this.boardTasks.push(task);
};

Board.prototype.removeTask = function(id){
  for(var i=0;i<this.boardTasks.length;i++){

    var task  = this.boardTasks[i];
    if(task.id == id){
      var filteredTask = task;
      break;
    }

  }
  var task = this.boardTasks.splice(filteredTask);
};
