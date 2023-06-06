/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  } 
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 27) {
        document.getElementById("myNav").style.width = "0%";
    }
});

function detectspecialkeys(e) {
  var evtobj = window.event ? event : e
  if (evtobj.ctrlKey)
  document.getElementById("myNav").style.width = "100%";
}
document.onkeydown = detectspecialkeys

function cbgamoungus() {
  document.body.style.backgroundImage = "url('https://cdn1.epicgames.com/salesEvent/salesEvent/amoguslandscape_2560x1440-3fac17e8bb45d81ec9b2c24655758075')"; 
}
function cbgmountion() {
  document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/55/da/40/55da4005ed6ea88cbbb2689d3db8c44d.jpg')";
}
function cbgmontary() {
  document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/af/0e/21/af0e2147c3e7a1cbf8578397d19c1bd4.jpg')";
}
function cbggalaxy() {
  document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/a2/c7/7b/a2c77b6566c45d9404e17ab0beaafdfb.jpg')";
}
