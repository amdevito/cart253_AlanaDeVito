class VideoPlayback {
  //creating class for the videoPlayback control useing the mouse position
  constructor(vidRate, direction) {
    this.vidRate = vidRate;
    this.vidDirection = direction;
    this.videoActive = false;
    this.video = createVideo(["assets/images/kelidoscape1.mov"]);
  }
  mousePressed() {
    if (videoActive === false) {
      videoActive = true;
      video.play();
      video.loop();
    }
  }
  mousePosition() {
    this.vidRate = mouseX;
    this.vidDirection = mouseY;
  }
}
