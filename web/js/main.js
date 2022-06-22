const notification = document.querySelector(".homepage__notification");
const notificationCheck = JSON.parse(sessionStorage.getItem("notification"));

notificationCheck && (notification.style.display = "none");

document.getElementById("closeMarker").addEventListener("click", () => {
  notification.style.display = "none";
  sessionStorage.setItem("notification", true);
});
