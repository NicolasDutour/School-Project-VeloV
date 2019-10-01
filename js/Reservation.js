class Reservation {
  constructor(duration) {
    this.duration = duration;
    this.station = new Station();
    this.timer = new Timer();
  }

  restartReservation() {
    let endReservationTime = sessionStorage.getItem('endReservationTime');
    let remainingTime = endReservationTime - Date.now();

    this.station.getStation();
    this.station.displayStation();

    this.timer.startTimer(remainingTime, this.station.name);
  }

  startReservation(station) {
    sessionStorage.clear();
    this.timer.stopTimer();
    // récup instant résa
    let reservationTime = Date.now(); // en millisecondes
    // ajouter 20 min à la résa
    let endReservationTime = reservationTime + this.duration;
    // save station et fin de résa
    sessionStorage.setItem('endReservationTime', endReservationTime);
    this.station = station;
    this.station.saveStation();
    // lancer timer (visuel)
    this.timer.startTimer(this.duration, this.station.name); // 20 minutes en millisecondes
  }

}
