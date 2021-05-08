            // Gym Video Handler
            
            AFRAME.registerComponent('video-vidhandler1', {
              init: function() {
      console.log('video init entered');
                  this.toggle = false;
                  this.vid = document.querySelector("#gym1");
                  this.vid.pause();
              },
              tick: function() {
                  if (this.el.object3D.visible == true) {
                      if (!this.toggle) {
                          this.toggle = true;
                          this.vid.play();
                      }
                  } else {
                      this.toggle = false;
                      this.vid.pause();
                  }
              }
          });

          //Pec Fly Video Component

          AFRAME.registerComponent('video-vidhandler2', {
            init: function() {
          console.log('video init entered');
                this.toggle = false;
                this.vid = document.querySelector("#gym2");
                this.vid.pause();
            },
            tick: function() {
                if (this.el.object3D.visible == true) {
                    if (!this.toggle) {
                        this.toggle = true;
                        this.vid.play();
                    }
                } else {
                    this.toggle = false;
                    this.vid.pause();
                }
            }
        });
          
          //Tricep Press Video Component

          AFRAME.registerComponent('video-vidhandler3', {
                init: function() {
		          console.log('video init entered');
                    this.toggle = false;
                    this.vid = document.querySelector("#gym3");
                    this.vid.pause();
                },
                tick: function() {
                    if (this.el.object3D.visible == true) {
                        if (!this.toggle) {
                            this.toggle = true;
                            this.vid.play();
                        }
                    } else {
                        this.toggle = false;
                        this.vid.pause();
                    }
                }
            });



          // Gym Timer for Covid Protocols

          AFRAME.registerComponent('clock-text', {
              init: function() {
      console.log('Timer init entered');
                  var el = this.el;
                  this.ready = false;
      el.addEventListener('textfontset', function() {
                  this.ready = true;
      }.bind(this));
              },
              tick: function() {
            var el = this.el;
                  if (!this.ready) {
                    return;
                  }

                  var endTime = new Date("May 9, 2021 18:00:00").getTime();
                  var timer = setInterval(function() {
                      var currTime = new Date().getTime();

                      var diff = endTime - currTime;

                      if(diff > 0) {
                          var days = Math.floor(diff / (1000 * 60 * 60 * 24));
                          var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                          var mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                          var secs = Math.floor((diff % (1000 * 60)) / 1000);
                          //console.log(days, hours, mins, secs);
                          var timeRem = days + " days " + hours + " hrs " + mins + " mins " + secs + " secs ";
                          //console.log(timeRem);
                      } else {
                          var timeRem = "The Day has come for sanitization!";
                      }
                      el.setAttribute('value', timeRem);
                  }, 1000);
                  
              }
          });
  
  
    // Map Component for Sports Shop
  
    