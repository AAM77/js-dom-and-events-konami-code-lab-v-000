const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let newCode = code.map(e => e);

  window.addEventListener('keydown', function(e) {
    let key = parseInt(e.detail || e.which);

    if (key === newCode[0]) {
      newCode.shift()
      //console.log(key)

      if (newCode.length === 0) {
        alert("Hurray!")
        //console.log("Hurray! You did it!")
      }
    } else {
      newCode = code.map(e => e);
      //console.log(key)
    }
  });
}
