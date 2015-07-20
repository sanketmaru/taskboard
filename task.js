function Task(id, taskName){
  this.id = id;
  this.taskName = taskName;
};

Task.prototype.getTaskId = function(){
  return this.id;
};

Task.prototype.getTaskName = function(){
  return this.taskName;
};
