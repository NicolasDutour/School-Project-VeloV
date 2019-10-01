let legendStation = document.querySelector('.legendStation');
let cityStation = document.querySelector('.cityStation');
let nameStation = document.getElementById('nameStation');
let adressStreet = document.querySelector('.adressStreet');
let totalPlaces = document.querySelector('.totalPlaces');
let availableStands = document.querySelector('.availableStands');
let bikesAvailable = document.querySelector('.bikesAvailable');

class Station {
  constructor(status, contract_name, name, address, bike_stands, available_bike_stands, available_bikes) {
    this.status = status;
    this.contract_name = contract_name;
    this.name = name;
    this.address = address;
    this.bike_stands = bike_stands;
    this.available_bike_stands = available_bike_stands;
    this.available_bikes = available_bikes;
  }

  getStation() {
    this.status = sessionStorage.getItem('station_status');
    this.contract_name = sessionStorage.getItem('station_contract_name');
    this.name = sessionStorage.getItem('station_name');
    this.address = sessionStorage.getItem('station_address');
    this.bike_stands = sessionStorage.getItem('station_bike_stands');
    this.available_bike_stands = sessionStorage.getItem('station_available_bike_stands');
    this.available_bikes = sessionStorage.getItem('station_available_bikes');
  }


  renameStatus() {
    if (this.status === 'OPEN') {
      return 'Ouverte'
    } else {
      return 'Fermée'
    }
  }

  saveStation() {
    sessionStorage.setItem('station_status', this.status);
    sessionStorage.setItem('station_contract_name', this.contract_name);
    sessionStorage.setItem('station_name', this.name);
    sessionStorage.setItem('station_address', this.address);
    sessionStorage.setItem('station_bike_stands', this.bike_stands);
    sessionStorage.setItem('station_available_bike_stands', this.available_bike_stands);
    sessionStorage.setItem('station_available_bikes', this.available_bikes);
  }

  displayStation() {
    legendStation.innerHTML = this.renameStatus();
    cityStation.innerHTML = this.contract_name;
    nameStation.innerHTML = this.name;
    adressStreet.innerHTML = this.address;
    totalPlaces.innerHTML = this.bike_stands;
    availableStands.innerHTML = this.available_bike_stands;
    bikesAvailable.innerHTML = this.available_bikes;
  }
}
