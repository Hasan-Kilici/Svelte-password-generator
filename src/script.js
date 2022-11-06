document.addEventListener("click", (e)=>{
  let element = e.srcElement;
  let func = element.getAttribute("hasankilici");
  eval(func);
});

function generate_password(length) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890_-/&$%!".split("");
  var b = [];
  for (var i = 0; i < length; i++) {
    var j = (Math.random() * (a.length - 1)).toFixed(0);
    b[i] = a[j];
  }
  return b.join("");
}

let count = 0;

function generatePass(){
  let input = document.getElementById("password");
  let newPass = generate_password(32);
  let passwordContainer = document.getElementById("passwords");
  count++
  
  input.value = newPass;
  passwordContainer.innerHTML += `
  <div class="password">
  #${count} | ${newPass}
  </div>
  `;
}