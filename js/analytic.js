const scl = (x, y) => {
    const me = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      screenX: x,
      screenY: y
    })
  
    console.log("lick" + x +  " " + y);
    const el = document.elementFromPoint(x,y)
    console.log(el)
    el.dispatchEvent(me)
  }

  console.log("here");
setTimeout(function() {
    var pos = document.getElementById("dontfoid").getBoundingClientRect();
    scl((pos.left + pos.right)/2, (pos.top + pos.bottom)/2);
}, 4500);
