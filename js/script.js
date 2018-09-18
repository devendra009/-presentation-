function draw(elementId, radiusVal) {
		var canvas = document.getElementById("pie1");
		var ctx = canvas.getContext("2d");
		
		var colors = ['#fddb77'];
		var angles = [1.4];
		var offset = -50;
		var beginAngle = 1;
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
			ctx.arc(250 + offsetX, 250 + offsetY, 180, beginAngle, endAngle);
			ctx.lineTo(250 + offsetX, 250 + offsetY);
		 //  ctx.stroke();
			ctx.fill();
	}
	
	function draw1(elementId, radiusVal) {
		var canvas = document.getElementById(elementId);
		var ctx = canvas.getContext("2d");
		
		var colors = ['#fddb77'];
		var angles = [1.4];
		var offset = -50;
		var beginAngle = 1;
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
			ctx.arc(250 + offsetX, 250 + offsetY, 180, beginAngle, endAngle);
			ctx.lineTo(250 + offsetX, 250 + offsetY);
		 //  ctx.stroke();
			ctx.fill();
	}

	function drawGreen(elementId, radiusVal) {
		var canvas = document.getElementById(elementId);
		var ctx = canvas.getContext("2d");
		
		var colors = ['#b6e480'];
		var angles = [2];
		var offset = -230;
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
			ctx.moveTo(250 + offsetX, 250 + offsetY);
			ctx.arc(250 + offsetX, 250 + offsetY, 180, beginAngle, endAngle);
			ctx.lineTo(250 + offsetX, 250 + offsetY);
			//ctx.filter = 'blur(5px)';
		 //  ctx.stroke();
			ctx.fill();	
	}

	function blueSmall(elementId, radiusVal) {
		var canvas = document.getElementById(elementId);
		var ctx = canvas.getContext("2d");
		
		var colors = ['#5ebbf3'];    
		var angles = [0.9];
		var offset =-60;
		var beginAngle = 1;
		var endAngle = 30.3;
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
			ctx.arc(100 + offsetX, 100 + offsetY, 40, beginAngle, endAngle);
			ctx.lineTo(100 + offsetX, 100 + offsetY);
			ctx.filter = 'blur(5px)';
		 // canvas.style.left = 'px';
		 //  ctx.stroke();
			ctx.fill();
	}
	function greenSmall(elementId, radiusVal) {
		var canvas = document.getElementById(elementId);
		var ctx = canvas.getContext("2d");
		
		var colors = ['#b6e480'];    
		var angles = [1.8];
		var offset = -50;
		var beginAngle = 1;
		var endAngle = 180.2;
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
			//ctx.rotate((Math.PI / 180) * 25	);
			ctx.filter = 'blur(5px)';
		 // canvas.style.left = 'px';
		 //  ctx.stroke();
			ctx.fill();
	}
	function amberSmall(elementId, radiusVal) {
		var canvas = document.getElementById(elementId);
		var ctx = canvas.getContext("2d");
		
		var colors = ['#fddb77'];    
		var angles = [1.5];
		var offset = 50;
		var beginAngle = 1;
		var endAngle = 148; 
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
			//ctx.rotate((Math.PI / 180) * 25	);
			ctx.filter = 'blur(5px)';
		 // canvas.style.left = 'px';
		 //  ctx.stroke();
			ctx.fill();
	}
	function amberSmall1(elementId, radiusVal) {
		var canvas = document.getElementById(elementId);
		var ctx = canvas.getContext("2d");
		
		var colors = ['#fddb77'];    
		var angles = [1.5];
		var offset = 50;
		var beginAngle = 1;
		var endAngle = 148; 
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
			//ctx.rotate((Math.PI / 180) * 25	);
			ctx.filter = 'blur(5px)';
		 // canvas.style.left = 'px';
		 //  ctx.stroke();
			ctx.fill();
	}
	function blue(elementId, radiusVal) {
		var canvas = document.getElementById(elementId);
		var ctx = canvas.getContext("2d");
		
		var colors = ['#5ebbf3'];    
		var angles = [1];
		var offset = -110;
		var beginAngle = 1;
		var endAngle = 148; 
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
			ctx.arc(100 + offsetX, 100 + offsetY, 180, beginAngle, endAngle);
			ctx.lineTo(100 + offsetX, 100 + offsetY);
			//ctx.rotate((Math.PI / 180) * 25	);
		 // canvas.style.left = 'px';
		 //  ctx.stroke();
			ctx.fill();
	}
	function blue1(elementId, radiusVal) {
		var canvas = document.getElementById(elementId);
		var ctx = canvas.getContext("2d");
		
		var colors = ['#5ebbf3'];    
		var angles = [1];
		var offset = -110;
		var beginAngle = 1;
		var endAngle = 148; 
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
			ctx.arc(100 + offsetX, 100 + offsetY, 180, beginAngle, endAngle);
			ctx.lineTo(100 + offsetX, 100 + offsetY);
			//ctx.rotate((Math.PI / 180) * 25	);
		 // canvas.style.left = 'px';
		 //  ctx.stroke();
			ctx.fill();
	}


let slide = 1;
const SLIDE_COUNT = 3;

var slider = new SliderElement();

$( ".next" ).on("click", '', function () {
	console.log("reached", slide);
	slider.nextSlide();
});

$( ".prev" ).click(function() {
	slider.prevSlide();
});

$(document).ready(function() {
	// draw("pie1");
	//draw1("pie1_1");
	// drawGreen("pie2");
	// blueSmall("pie3");
	// greenSmall("pie4");
	// amberSmall("pie5");
	// amberSmall1("pie5_1");
	// blue("pie6");
	// blue1("pie6_1");	
});

$("#download").click (function() {
	$(".next").css('transition','none');
	html2canvas(document.querySelector(".presentation")).then(canvas => {
		//document.body.appendChild(canvas)

		var imgData = canvas.toDataURL("image/png", 1.0);
		//var pdf = new jsPDF("l", "px", "a4");;
		
		if(canvas.width > canvas.height){
			doc = new jsPDF('l', 'mm', [canvas.width, canvas.height]);
			}
			else{
			doc = new jsPDF('p', 'mm', [canvas.height, canvas.width]);
			}

		doc.addImage(imgData, 'png',1, 1, 1300, 600);
		doc.save("download.pdf");
		$(".next").css('transition','all 0.3s ease');
	}).catch((err) => {
		$(".next").css('transition','all 0.3s ease');
	  });
	




 });

