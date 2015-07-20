//TODO:- i think this should be built with a Builder Pattern

function BoardElement(elementName, id, className, width, height){

  if(!elementName){
    throw new Error("Please give the element name");
  }

  var element = document.createElement(elementName);

  if(id){
    element.id = id;
  }

  if(className){
    element.className = className;
  }

  if(width){
    element.width = width;
  }

  if(height){
    element.height = height;
  }

  return element;

}
