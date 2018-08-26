var my = $("#myPDF");

function draw(elementId, radiusVal) {
    var canvas = document.getElementById(elementId);
    var ctx = canvas.getContext("2d");
    
    var colors = ['#fddb77'];
    var angles = [1.5];
    var offset = 30;
    var beginAngle = 0;
    var endAngle = 29.85;
    var offsetX, offsetY, medianAngle;
    
    var i = 0;
      beginAngle = endAngle;
      endAngle = endAngle + angles[i];
      medianAngle = (endAngle + beginAngle) / 2;
      offsetX = Math.cos(medianAngle) * offset;
      offsetY = Math.sin(medianAngle) * offset;
      ctx.beginPath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.moveTo(250 + offsetX, 250 + offsetY);
      ctx.arc(250 + offsetX, 250 + offsetY, 150, beginAngle, endAngle);
      ctx.lineTo(250 + offsetX, 250 + offsetY);
     //  ctx.stroke();
      ctx.fill();
    
      var imgData = canvas.toDataURL("image/jpeg", 1.0);
  }

  function drawGreen(elementId, radiusVal) {
    var canvas = document.getElementById(elementId);
    var ctx = canvas.getContext("2d");
    
    var colors = ['#b6e480'];
    var angles = [2];
    var offset = 60;
    var beginAngle = 1;
    var endAngle = 30.5;
    var offsetX, offsetY, medianAngle;
    
    var i = 0;
      beginAngle = endAngle;
      endAngle = endAngle + angles[i];
      medianAngle = (endAngle + beginAngle) / 2;
      offsetX = Math.cos(medianAngle) * offset;
      offsetY = Math.sin(medianAngle) * offset;
      ctx.beginPath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.moveTo(250 + offsetX, 400 + offsetY);
      ctx.arc(250 + offsetX, 400 + offsetY, 150, beginAngle, endAngle);
      ctx.lineTo(250 + offsetX, 400 + offsetY);
      ctx.filter = 'blur(5px)';
     //  ctx.stroke();
      ctx.fill();
    
  }

  function blueSmall(elementId, radiusVal) {
    var canvas = document.getElementById(elementId);
    var ctx = canvas.getContext("2d");
    
    var colors = ['#5ebbf3'];
    var angles = [1];
    var offset = 80;
    var beginAngle = 1;
    var endAngle = 30.5;
    var offsetX, offsetY, medianAngle;
    
    var i = 0;
      beginAngle = endAngle;
      endAngle = endAngle + angles[i];
      medianAngle = (endAngle + beginAngle) / 2;
      offsetX = Math.cos(medianAngle) * offset;
      offsetY = Math.sin(medianAngle) * offset;
      ctx.beginPath();
      ctx.fillStyle = colors[i % colors.length];
      ctx.moveTo(100 + offsetX, 100 + offsetY);
      ctx.arc(100 + offsetX, 100 + offsetY, 50, beginAngle, endAngle);
      ctx.lineTo(100 + offsetX, 100 + offsetY);
      ctx.filter = 'blur(8px)';
     // canvas.style.left = 'px';
     //  ctx.stroke();
      ctx.fill();

 
  }

 


$(document).ready(function() {

    draw("pie1");
    // drawGreen("pie1");
    // blueSmall("pie1");
      drawGreen("pie2");
      blueSmall("pie3");

  // console.log($("#slide1").length);

   var tl = new TimelineMax();

  
  TweenMax.to($("#slide1"), 1, {y:-200, autoAlpha:0, ease:Power1.easeOut});
  TweenMax.to($("#pie1"), 1, {x:-200});
  TweenMax.to($("#slide2"), 2, {autoAlpha:1, ease:Power1.easeIn}, "+=0.15");

// var doc = new jsPDF();
// var specialElementHandlers = {
//     '#editor': function (element, renderer) {
//         return true;
//     }
// };

// $('#pdf').click(function () {
//     doc.fromHTML($('.presentation').html(), 15, 15, {
//         'width': 1200,
//             'elementHandlers': specialElementHandlers
//     });
//     doc.save('sample-file.pdf');
// });

});

$("#download").click (function() {
 // only jpeg is supported by jsPDF
//var imgData = my.toDataURL("image/jpeg", 1.0);
var pdf = new jsPDF();

pdf.addImage(imgData, 'JPEG', 0, 0);
pdf.save("download.pdf");
 });

