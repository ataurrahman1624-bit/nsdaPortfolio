function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById("time");
  if (timeElement) {
    timeElement.innerText = now.toLocaleString();
  }
}

// Update time immediately on load
updateTime();
// Update time every second
setInterval(updateTime, 1000);
function initMap() {
      const loc = { lat: 40.712776, lng: -74.005974 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: loc,
      });
      new google.maps.Marker({ position: loc, map: map });
    }