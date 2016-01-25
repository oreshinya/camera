//TODO 地味に役に立ちそうだったらちゃんとしたコードに変更しましょう

window.addEventListener("load", function(){
  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
  URL = URL || webkitURL;

  var videoEl = document.querySelector(".camera");

  navigator.getUserMedia(
    {video: true, audio: false},
    function(stream) {
      videoEl.src = URL.createObjectURL(stream);
    },
    function(err) {
      alert('error occurred: ' + err);
    }
  );

  var shutterEl = document.querySelector(".shutter");
  shutterEl.addEventListener("click", function(){
    var canvasEl = document.createElement("canvas");
    var cWidth = videoEl.videoWidth;
    var cHeight = videoEl.videoHeight;
    canvasEl.width = cWidth;
    canvasEl.height = cHeight;
    var context = canvasEl.getContext("2d");
    context.drawImage(videoEl, 0, 0, cWidth, cHeight);
    var imgURL = canvasEl.toDataURL("image/png");

    var linkEl = document.createElement("a");
    linkEl.download = (new Date()).getTime() + ".png";
    linkEl.href = imgURL;
    linkEl.click();
  });
});
