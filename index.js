
function getFirstSelector(selector) {
  var match = document.querySelector(selector);
  return match;
}

function nestedTarget() {
  var nested = document.querySelector('#nested');
  var target = nested.querySelector('.target');
  return target
}

function increaseRankBy(n) {
  var change = parseInt(n);
  var list = document.querySelectorAll('.ranked-list');
  for (var i=0; i<list.length; i++) {
    list[i].innerHTML = (i+change).toString()
  }
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  var deepest = '';
  var current = grandNode.children;
  var nodeList = [];
  while(current.length>0) {
    for (var i=0; i<current.length; i++) {
      var nextChild = current[i].children[0]
      
      if (nextChild) {
        //console.log(nextChild)
      //  if(nextChild.children.length>0){
          for (var j = 0; j<nextChild.length;j++) {
            console.log(nextChild.children)
            nodeList.push(nextChild.children[j])
          }
       // }
      }
    }
    current = nodeList
    nodeList = []
  } 
  return current
}