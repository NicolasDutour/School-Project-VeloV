
class App {
  constructor(slides) {
    this.slider = new Slider("slider", slides, true, true, false);
    this.map = new MapStations('map', 13, 4.835658999999964, 45.764043);
    this.signature = new Signature('signature', 'canvas');
    this.reservation = new Reservation(62000);
    this.loadListenerValid();
    this.checkStorage();
  }

  checkStorage() {
    if (sessionStorage.getItem("station_name")) {
      // Restauration du contenu du champ
      this.reservation.restartReservation();
      bikesStation.style.display = "block";
    }
  }

  loadListenerValid() {
    btnValider.addEventListener('click', () => {
      time.style.display = "block";
      btnValider.style.display = "none";
      btnBooking.style.display = "none";
      signature.style.display = "none";
      bikesStation.style.display = "none";
      this.reservation.startReservation(this.map.currentStation);
    });
  }

} // END CLASS
