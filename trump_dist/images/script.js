document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("background-audio");

  // Attempt to play the audio on page load
  var playPromise = audio.play();

  if (playPromise !== undefined) {
    playPromise.catch(function (error) {
      // Autoplay was prevented. Add a user interaction event to play the audio
      var playButton = document.createElement("button");
      playButton.innerText = "get the tremp experience";
      playButton.style.position = "fixed";
      playButton.style.bottom = "10px";
      playButton.style.right = "10px";
      playButton.style.zIndex = 1000;
      playButton.style.color = "#fff";
      playButton.style.background = "#ff0000";
      playButton.style.borderRadius = "5px";

      playButton.addEventListener("click", function () {
        audio.play();
        playButton.remove();
      });

      document.body.appendChild(playButton);
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var triggerbutton = document.getElementById("background-audio-button");
  var backgroundaudio = document.getElementById("background-audio");

  triggerbutton.addEventListener("click", function (event) {
    event.preventDefault();
    // Additional code to execute when the link is clicked
    backgroundaudio.play();
  });
});
