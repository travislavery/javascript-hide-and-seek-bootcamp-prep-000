
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
      var nextChild = current[0].children[i]
      if (nextChild) {
        nodeList.push(nextChild)
        current.splice(0, 1)
        //console.log(nextChild)
      //  if(nextChild.children.length>0){
          //for (var j = 0; j<nextChild.length;j++) {
            //console.log(nextChild.children)
            //nodeList.push(nextChild.children[j])
         // }
       // }
      } else {
        console.log('No children')
        current.splice(i, 1)
      }
    }
    if (current.length===1) {
      if (current[0].children === []) {
        return current[0]
      } else {
        nextChildCheck(current)
      }
    }
    current = nodeList
    nodeList = []
  } 
  return current
}

function nextChildCheck(listToCheck) {
  
}