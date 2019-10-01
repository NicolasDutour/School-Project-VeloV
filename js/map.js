let BikesStation = document.getElementById('bikesStation');
let btnBooking = document.getElementById('btnBooking');
let signature = document.getElementById('signature');
let time = document.getElementById("time");
let noBike = document.querySelector(".noBike");

class MapStations {
  constructor(map, zoom, lng, lat) {
    this.map = map;
    this.zoom = zoom;
    this.center = {
      lng: lng,
      lat: lat
    };
    this.initMap();
  }

  initMap() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoibmljb2xhc2R1dG91ciIsImEiOiJjazE2aWR0Z2swbWVqM2huMXAwcXh3dDY0In0.n2xZXeZV_3gie1U7nooaWQ';
    let map = new mapboxgl.Map({
      container: this.map, // container id
      style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
      center: [this.center.lng, this.center.lat], // starting position [lng, lat]
      zoom: this.zoom // starting zoom
    });

    ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=a01bfdb5fbe01d1416417f6509033ca85739897e", (reponse) => {
      let stations = JSON.parse(reponse);

      stations.forEach((station) => {


        let el = document.createElement('div');
        el.innerHTML = '<i class="fas fa-map-pin"></i>'
        el.className = 'marker';

        let marker = new mapboxgl.Marker(el)
          .setLngLat([station.position.lng, station.position.lat])
          .addTo(map);

        el.addEventListener('click', () => {
          this.currentStation = new Station(station.status, station.contract_name, station.name, station.address, station.bike_stands, station.available_bike_stands, station.available_bikes);

          this.currentStation.displayStation();

          if (station.available_bikes === 0) {
            btnBooking.style.display = "none";
            noBike.style.display = "block";
            noBike.innerHTML = "Aucun Vélo disponible à cette station";
          } else {
            btnBooking.style.display = "block";
            noBike.style.display = "none";
          }

          bikesStation.style.display = "block";
          signature.style.display = "none";
        })


      });

    });
  }
}