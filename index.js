
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
  var current = [grandNode.children];
  while(current.length>0) {
    if (current.length===1) {
      if (current[0].children.length === 0) {
        return current[0]
      }
    } else {
      for (var i=0; i<current[0].children.length; i++) {
        current.push(current[0].children[i])
      }
      current.splice(0,1);
    }
    }
    if (current[0].children.length > 0) {
      
    }
    current = nodeList
    nodeList = []
  } 
  return current
}

function nextChildCheck(listToCheck) {
  
    var nextChild = current[0].children[i]
    if (nextChild) {
      current.push(nextChild)
      //console.log(nextChild)
    //  if(nextChild.children.length>0){
        //for (var j = 0; j<nextChild.length;j++) {
          //console.log(nextChild.children)
          //nodeList.push(nextChild.children[j])
       // }
     // }
    } else {
      console.log('No children')
  }
}