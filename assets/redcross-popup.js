function closePopup() {
  document.getElementById("wildfire-popup").style.display = "none";
}

const isBeslogicPage = location.hostname.includes("beslogic")
const isReload = performance?.navigation?.type === 1;
const visitedBefore = localStorage.getItem("visited") === "yes";
console.info({ isReload, visitedBefore });

if (isBeslogicPage && (!visitedBefore || isReload)) {
  document.getElementById("wildfire-popup").style.display = "block";
  localStorage.setItem("visited", "yes");
} else {
  document.getElementById("wildfire-popup").style.display = "none";
}
