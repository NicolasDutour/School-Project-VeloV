function initApp() {
  let slides = [
    {
      text: "Vélo'v",
      image: "images/slider0.jpg"
    },
    {
      text: "Choisissez une station",
      image: "images/slider1.png"
    },
    {
      text: "Réservez votre vélo",
      image: "images/slider2.png"
    },
    {
      text: "Signez puis valider",
      image: "images/slider3.png"
    }
  ];


  let app = new App(slides);

  let d = new Date();
  let year = d.getFullYear();

  document.getElementById("auteur").innerHTML = "Vélo'V - © - Nicolas Dutour - " + year;
}


initApp()