const pp = document.getElementById("ppCount");
const sr = document.getElementById("recStars");
pp.addEventListener("input", function () {
  sr.textContent = `Recommended SR: ${(this.value ** 0.4 * 0.195).toFixed(2)}*`;
});
