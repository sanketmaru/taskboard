function CompleteBoardTemplate(){
  BoardTemplate.apply(this, arguments);
}

CompleteBoardTemplate.prototype = Object.create(BoardTemplate.prototype);


// TODO: Breaking DRY here
CompleteBoardTemplate.prototype.createRow = function(taskId, taskName){
  var rootElement = this.getElement();

  var table = rootElement.getElementsByTagName("table")[0];

  var tableRow = new BoardElement("tr");

  var tableDiv = new BoardElement("td", taskId, "tableDiv");
  tableDiv.innerText = taskName;

  var cancelImageDiv = new BoardElement("div", "cancel", "imageDiv");
  var cancelImg = new BoardElement("img", "", "", 18, 18);
  cancelImg.setAttribute("src", "cancel-icon.png");

  cancelImageDiv.appendChild(cancelImg);

  tableDiv.appendChild(cancelImageDiv);

  tableRow.appendChild(tableDiv);
  table.appendChild(tableRow);
};
