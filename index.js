
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
  var current = [document.querySelector('#grand-node')];
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
}