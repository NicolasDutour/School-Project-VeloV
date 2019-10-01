class Signature {
  constructor(signature, canvas) {
    this.signature = document.getElementById(signature);
    this.canvas = document.getElementById(canvas);
    this.context = this.canvas.getContext('2d');
    this.isDrawing = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.signed = false;
    this.lastPosition = {
      x: 0,
      y: 0
    };

    if (!this.canvas) {
      alert("Impossible de récupérer le canvas");
      return;
    }

    if (!this.context) {
      alert("Impossible de récupérer le context du canvas");
      return;
    }

    this.context.lineWidth = 2;
    this.context.strokeStyle = '#E65100';

    this.drawCanvas();
    this.touchCanvas();
    this.displayCanvas();
    this.clearCanvas();
    this.checkScrolling();

  }


  drawCanvas() {
    this.canvas.addEventListener("mousedown", (e) => {
      this.isDrawing = true;
      this.mouseX = e.clientX - this.canvas.getBoundingClientRect().left;
      this.mouseY = e.clientY - this.canvas.getBoundingClientRect().top;
      this.lastPosition = {
        x: this.mouseX,
        y: this.mouseY
      };
    });

    this.canvas.addEventListener("mouseup", () => {
      if (this.signed) {
        let btnValider = document.getElementById("btnValider");
        let btnEffacer = document.getElementById("btnEffacer");
        btnValider.style.display = "block";
        btnEffacer.style.display = "block";
      }
      this.isDrawing = false;
    });


    this.canvas.addEventListener("mousemove", (e) => {
      if (this.isDrawing) {
        this.signed = true;
        this.mouseX = e.clientX - this.canvas.getBoundingClientRect().left;
        this.mouseY = e.clientY - this.canvas.getBoundingClientRect().top;
        this.context.moveTo(this.lastPosition.x, this.lastPosition.y);
        this.context.lineTo(this.mouseX, this.mouseY);
        this.context.stroke();
        this.lastPosition = {
          x: this.mouseX,
          y: this.mouseY
        };
      }
    });
  }





  touchCanvas() {
    this.canvas.addEventListener("touchstart", (e) => {
      this.isDrawing = true;
      this.mouseX = e.touches[0].clientX - this.canvas.getBoundingClientRect().left;
      this.mouseY = e.touches[0].clientY - this.canvas.getBoundingClientRect().top;
      this.lastPosition = {
        x: this.mouseX,
        y: this.mouseY
      };
    });

    this.canvas.addEventListener("touchend", () => {
      if (this.signed) {
        let btnValider = document.getElementById("btnValider");
        let btnEffacer = document.getElementById("btnEffacer");
        btnValider.style.display = "block";
        btnEffacer.style.display = "block";
      }
      this.isDrawing = false;
    });


    this.canvas.addEventListener("touchmove", (e) => {
      if (this.isDrawing) {
        this.signed = true;
        this.mouseX = e.touches[0].clientX - this.canvas.getBoundingClientRect().left;
        this.mouseY = e.touches[0].clientY - this.canvas.getBoundingClientRect().top;
        this.context.moveTo(this.lastPosition.x, this.lastPosition.y);
        this.context.lineTo(this.mouseX, this.mouseY);
        this.context.stroke();
        this.lastPosition = {
          x: this.mouseX,
          y: this.mouseY
        };
      }
    });


  }




  displayCanvas() {
    let btnBooking = document.getElementById("btnBooking");
    btnBooking.addEventListener('click', () => {
      this.signature.style.display = "block";
      this.canvas.width = this.canvas.width;
    });
  }

  clearCanvas() {
    let btnEffacer = document.getElementById("btnEffacer");
    btnEffacer.addEventListener('click', () => {
      this.canvas.width = this.canvas.width;
      this.signed = false;
      btnValider.style.display = 'none';
    });
  }


  checkScrolling() {
    // Prevent scrolling when touching the canvas
    document.body.addEventListener("touchstart", (e) => {
      if (e.target == this.canvas) {
        e.preventDefault();
      }
    }, { passive: false });
    document.body.addEventListener("touchend", (e) => {
      if (e.target == this.canvas) {
        e.preventDefault();
      }
    }, { passive: false });
    document.body.addEventListener("touchmove", (e) => {
      if (e.target == this.canvas) {
        e.preventDefault();
      }
    }, { passive: false });
  }

}
