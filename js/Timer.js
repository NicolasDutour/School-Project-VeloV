let btnValider = document.getElementById("btnValider");
let timeLeft = document.getElementById("timeLeft");

class Timer {

  stopTimer() {
    clearInterval(this.timer);
  }


  startTimer(timeStamp, stationName) {
    let second = Math.floor(timeStamp / 1000);
    let minute = Math.floor(second / 60);
    second = second % 60;
    this.timer = setInterval(() => {
      if (second === 0 && minute !== 0) {
        minute--;
        second = 59;
        timeLeft.innerHTML = `1 vélo réservé à la station ${stationName} pendant ${minute} min ${second} sec`;
      } else if (second <= 0 && minute <= 0) {
        timeLeft.innerHTML = "Location vélo expirée";
        this.stopTimer();
      } else {
        second--;
        timeLeft.innerHTML = `1 vélo réservé à la station ${stationName} pendant ${minute} min ${second} sec`;
      }

    }, 1000);
  }

}
