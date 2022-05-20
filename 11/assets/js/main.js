function checkPutNotEmpty(...puts) {
  for (let put of puts) {
    if (put.value.length == 0) return false;
  }
  return true;
}

(function () {
  let result = document.getElementById("result");
  let put1 = document.getElementById("put1");
  let put2 = document.getElementById("put2");

  document.getElementById("plus").addEventListener("click", function () {
    if (checkPutNotEmpty(put1, put2))
      result.innerHTML = +put1.value + +put2.value;
  });

  document.getElementById("min").addEventListener("click", function () {
    if (checkPutNotEmpty(put1, put2))
      result.innerHTML = +put1.value - +put2.value;
  });

  document.getElementById("zarb").addEventListener("click", function () {
    if (checkPutNotEmpty(put1, put2))
      result.innerHTML = +put1.value * +put2.value;
  });

  document.getElementById("division").addEventListener("click", function () {
    if (checkPutNotEmpty(put1, put2))
      result.innerHTML = +put1.value / +put2.value;
  });
})();
