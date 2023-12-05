// var startTime;

// function animateBackgroundColor(timestamp) {
//   if (!startTime) {
//     startTime = timestamp;
//   }

//   // Calculate elapsed time
//   var elapsedTime = timestamp - startTime;

//   // Duration for the animation (in milliseconds)
//   var duration = 5000; // 5 seconds

//   // Calculate progress from 0 to 1
//   var progress = Math.min(elapsedTime / duration, 1);

//   // Interpolate between black and white
//   var red = Math.round(0 + progress * (255 - 0));
//   var green = Math.round(0 + progress * (255 - 0));
//   var blue = Math.round(0 + progress * (255 - 0));

//   // Apply the new background color
//   document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

//   if (progress < 1) {
//     // Continue the animation if not complete
//     requestAnimationFrame(animateBackgroundColor);
//   }
// }

// // Start the animation
// requestAnimationFrame(animateBackgroundColor);

let startTime;
let showYellowText = false;

function animateBackgroundColor(timestamp) {
  if (!startTime) {
    startTime = timestamp;
  }

  const elapsedTime = timestamp - startTime;
  const duration = 5000; // 5 seconds
  const progress = Math.min(elapsedTime / duration, 1);

  // Interpolate between black and white
  const red = Math.round(0 + progress * (255 - 0));
  const green = Math.round(0 + progress * (255 - 0));
  const blue = Math.round(0 + progress * (255 - 0));

  // Apply the new background color
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

  // Check if the background is white
  if (red === 255 && green === 255 && blue === 255) {
    showYellowText = true;
  }

  if (showYellowText) {
    // Display the yellow text by toggling its visibility
    document.querySelector('.yellow-text').style.display = 'block';
    return; // Stop the animation after showing the yellow text
  }

  if (progress < 1) {
    requestAnimationFrame(animateBackgroundColor);
  }
}

requestAnimationFrame(animateBackgroundColor);


