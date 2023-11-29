let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 41.14961, lng: -8.61099 },
    zoom: 6
  });
  const marker1 = new google.maps.Marker({
    position: { lat: 41.14961, lng: -8.61099 },
    map: map,
    label: "A",
    title: "Rua das Flores",
    animation: google.maps.Animation.DROP
  });

  const marker2 = new google.maps.Marker({
    position: { lat: 38.736946, lng: -9.142685 },
    map: map,
    label: "B",
    title: "Rua das Curvas",
    animation: google.maps.Animation.DROP
  });

  const infoWindow1 = new google.maps.InfoWindow({
    content: "<p>Rua das Flores</p>"
  });

  const infoWindow2 = new google.maps.InfoWindow({
    content: "<p>Rua das Curvas</p>"
  });

  infoWindow1.open(map, marker1);
  infoWindow2.open(map, marker2);
}

initMap();
