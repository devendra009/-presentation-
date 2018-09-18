
class SliderElement {

    
    constructor() {
        this.sliderCount = 3;
        this.currentSlider = 1;
        
        this.pie1 = $("#pie1");
        this.pie1_1 = $("#pie1_1");
        this.pie2 = $("#pie2");
        this.pie3 = $("#pie3");
        this.pie4 = $("#pie4");
        this.pie5 = $("#pie5");
        this.pie5_1 = $("#pie5_1");
        this.pie6 = $("#pie6");
        this.pie6_1 = $("#pie6_1");
        this.pie7 = $("#pie7");
        this.pie8 = $("#pie8");
        this.slide1 = $("#slide1");
        this.slide2 = $("#slide2");
        this.slide3 = $("#slide3");
        this.text1 = $(".text1");
        this.text2 = $(".text2");
        this.text3 = $(".text3");
        
        this._drawElement();

        this._initSlide1Animations();
        this._initSlide2Animations();
    }

    nextSlide() {
        console.log("Current Slider: " + this.currentSlider);
        if (this.currentSlider == 1) {
            this.slide1Animations.play();
            this.currentSlider++;
        } else if (this.currentSlider == 2) {
            this.slide2Animations.play();
            this.currentSlider++;
        }
    }

    prevSlide() {
        console.log("Current Slider: " + this.currentSlider);
        if (this.currentSlider == 2) {
            this.slide1Animations.reverse();
            this.currentSlider--;
        } else if (this.currentSlider == 3) {
            this.slide2Animations.reverse();
            this.currentSlider--;
        }
    }

    drawPie(canvas, color, position, beginAngle, deltaAngle, offset, arcValue, blurValue=0) {
        let endAngle = beginAngle + deltaAngle;
        let medianAngle = (endAngle + beginAngle) / 2;
		let offsetX = (Math.cos(medianAngle) * position) + offset;
		let offsetY = (Math.sin(medianAngle) * position) + offset;
        
		let ctx = canvas.getContext("2d");
        ctx.fillStyle = color;
        
        ctx.beginPath();
		ctx.moveTo(offsetX, offsetY);
		ctx.arc(offsetX, offsetY, arcValue, beginAngle, endAngle);
        ctx.lineTo(offsetX, offsetY);
        
        if (blurValue > 0) {
            ctx.filter = 'blur(' + blurValue + 'px)';
        }
        
		ctx.fill();
    }

    screenshot() {
        $(".next").css('transition','none');
        html2canvas(document.querySelector(".presentation"))
        .then(canvas => {
            let doc = null;
            var imgData = canvas.toDataURL("image/png", 1.0);
            
            if (canvas.width > canvas.height) {
                doc = new jsPDF('l', 'mm', [canvas.width, canvas.height]);
            } else {
                doc = new jsPDF('p', 'mm', [canvas.height, canvas.width]);
            }

            doc.addImage(imgData, 'png',1, 1, 1300, 600);
            doc.save("download.pdf");
            
            $(".next").css('transition', 'all 0.3s ease');
        })
        .catch((err) => {
            console.error(err);
            $(".next").css('transition', 'all 0.3s ease');
        });
    }

    _drawElement() {
        this.drawPie(this.pie1[0], '#fddb77', -50, 29.85, 1.4, 250, 180);
        this.drawPie(this.pie1_1[0], '#fddb77', -50, 29.85, 1.4, 250, 180);
        this.drawPie(this.pie2[0], '#b6e480', -230, 30.5, 2, 250, 180);
        this.drawPie(this.pie3[0], '#5ebbf3', -60, 30.3, 0.9, 100, 40, 5);
        this.drawPie(this.pie4[0], '#b6e480', -50, 180.2, 1.8, 100, 50, 5);
        this.drawPie(this.pie5[0], '#fddb77', 50, 148, 1.5, 100, 50, 5);
        this.drawPie(this.pie5_1[0], '#fddb77', 50, 148, 1.5, 100, 50, 5);
        this.drawPie(this.pie6[0], '#5ebbf3', -110, 148, 1, 100, 180);
        this.drawPie(this.pie6_1[0], '#5ebbf3', -110, 148, 1, 100, 180);
    }

    _initSlide1Animations() {
        this.slide1Animations = new TimelineMax();
        this.slide1Animations
            .to(this.slide1, 1, {y:-200, autoAlpha:0})
            .to(this.text1, 1, { y:-200, autoAlpha:0,  ease:Power1.easeOut}, '-=1')
            .to(this.pie1, 1, {rotation:-20, y:-300, x:-300, filter: 'blur(4px)', ease:Power1.easeIn}, '-=1')
            //.to(this.pie2, 1, {rotation:-38, filter: 'blur(0px)', y:-180, x:-830, ease:Power1.easeInOut}, '-=1')
            .to(this.pie2, 1, {
                bezier: {
                    curviness: 8, 
                    values: [{x:-830, y:-180, rotation: -38, filter: 'blur(0px)'}], 
                    
                } /* bezier end */, 
                ease: Linear.easeInOut
            }, '-=1')
            .to(this.pie3, 1, {
                bezier: {
                    curviness: 3, 
                    values: [{x:-15, y:-120},{x:-10, y:-240}]
                } /* bezier end */, 
                ease: Linear.easeNone
            }, '-=1')
            .to(this.pie4, 1, { y:470, x:-1150, ease:Power1.easeIn}, '-=1')
            .to(this.pie5, 0.5, {
                bezier:{
                    curviness: 1.2,
                    values: [{x:-15, y:70}]},
                    autoAlpha: 0, 
                    ease: Linear.easeNone
            }, '-=1')
            .to(this.pie5_1, 0.5,  {y:-40, x:-60, autoAlpha:1, display:'block',  ease:Power1.easeIn}, '-=1')
            .to(this.pie6, 0.5, {y:-200, autoAlpha:0,  ease:Power1.easeOut}, '-=1')
            .to(this.pie6_1, 0.5,  {y:-160,  filter:'blur(4px)',  ease:Power1.easeIn}, '-=0.5')
            .to(this.text2, 1, { autoAlpha:1,  ease:Power1.easeIn}, '-=1')
            .to(this.slide2 , 1.5, {autoAlpha: 1, ease:Power1.easeIn}, '-=1')
            .pause();
    }
    
    _initSlide2Animations() {
        this.slide2Animations = new TimelineMax();
        this.slide2Animations
            .to(this.slide2, 1, {y:-200, autoAlpha:0,  ease:Power1.easeOut})
            .to(this.text2, 1, { y:-200, autoAlpha:0,  ease:Power1.easeOut}, '-=1')
            .to(this.pie1, 0.5, { y:-400, x:-400}, '-=1')
            .to(this.pie1_1, 0.5,  {rotation:-50, y:-80, x:-70, autoAlpha:1, display:'block', filter:'blur(4px)'}, '-=1')
            .to(this.pie2, 1, { rotation:-130, y:-490, x:-1090, filter: 'blur(4px)'}, '-=1')
            .to(this.pie3, 1, {x:-800, y:250}, '-=1')
            .to(this.pie4, 1, {x:-10, y:250}, '-=1')
            .to(this.pie5_1, 1, {x:-380, y:-210}, '-=1')        
            .to(this.pie6_1, 1, { rotation:70, y:-480, x:-833, filter: 'blur(0px)'}, '-=1')
            .to(this.text3, 1, { autoAlpha:1,  ease:Power1.easeIn}, '-=1')
            .to(this.slide3 , 1.5, {autoAlpha: 1, display:'block',  ease:Power1.easeIn}, '-=1')
            .pause();
    }

}