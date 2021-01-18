var fimage = null;
var bimage = null;
var canvas1 = document.getElementById("canvas1");
  var canvas2 = document.getElementById("canvas2");

function upload1(){
  var fi = document.getElementById("fi1");
  fimage = new SimpleImage(fi);
  fimage.drawTo(canvas1);
}
function upload2(){
  var fi = document.getElementById("fi2");
  bimage = new SimpleImage(fi);
  bimage.drawTo(canvas2);
}

function clear(){
  var ctx1 = canvas1.getContext("2d");
  var ctx2 = canvas2.getContext("2d");
  ctx1.clearRect(0,0, canvas1.width, canvas1.height);
  ctx2.clearRect(0,0, canvas2.width, canvas2.height);
}

function composite(){
  if(fimage == null || !fimage.complete() || bimage == null || !bimage.complete()){
    alert ("Images not loaded");
    return;
  }
  clear();
  var newImg = new SimpleImage(fimage.getWidth(), fimage.getHeight());
  for (var px of fimage.values()){
    var x = px.getX();
    var y = px.getY();
    if (px.getGreen() > 230){
      var bpx = bimage.getPixel(x,y);
      newImg.setPixel(x,y,bpx);
    }else {
      newImg.setPixel(x,y,px);
    }
  }
  newImg.drawTo(canvas1);
}