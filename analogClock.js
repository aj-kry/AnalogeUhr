function updateClock() {
    // Get the current time
    const currentTime = new Date();
    // Extract hours, minutes, and seconds
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    // Select the hour, minute, and second hands in the clock
    const hourHand = document.querySelector('.hour-hand');
    const minHand = document.querySelector('.min-hand');
    const secondHand = document.querySelector('.second-hand');
    // Calculate the rotation angles for each hand
    const hourAngle = (hours % 12) * 30 + minutes * 0.5;
    const minAngle = minutes * 6;
    const secondAngle = seconds * 6;
    //Set the rotation for each hand by utilizing CSS
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minHand.style.transform = `rotate(${minAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
  }
  // Update every second
  setInterval(updateClock, 1000); 
  // Initial update
  updateClock(); 


  