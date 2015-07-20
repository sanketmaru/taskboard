

function BoardTemplate(boardId){
    var element = document.getElementById("boardTemplate").cloneNode(true);
    element.style.display = "block";
    element.id = boardId;

    var heading = new BoardElement("span", "", "heading");
    heading.innerHTML = boardId;
    element.appendChild(heading);

    this.getElement = function(){
      return element;
    };
}

BoardTemplate.prototype.createRow = function(taskId, taskName) {
  var width = 18;
  var height = 18;
  var rootElement = this.getElement();

  var table = rootElement.getElementsByTagName("table")[0];

  var tableRow = new BoardElement("tr", taskId);

  var tableDiv = new BoardElement("td", "", "tableDiv");
  tableDiv.innerText = taskName;

  var cancelImageDiv = new BoardElement("div", "cancel", "imageDiv");
  var cancelImg = new BoardElement("img", "", "", width, height);
  cancelImg.setAttribute("src", "cancel-icon.png");

  var completeImageDiv = new BoardElement("div", "complete", "imageDiv");
  var completeImg = new BoardElement("img", "", "", width, height);
  completeImg.setAttribute("src", "complete-icon.png");

  cancelImageDiv.appendChild(cancelImg);
  completeImageDiv.appendChild(completeImg);

  tableRow.appendChild(tableDiv);
  tableRow.appendChild(completeImageDiv);
  tableRow.appendChild(cancelImageDiv);

  table.appendChild(tableRow);
};
