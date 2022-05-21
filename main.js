let canvas = document.createElement('canvas');
document.body.appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const W = canvas.width;
const H = canvas.height;
let ctx = canvas.getContext('2d');

ctx.translate(W / 2, H / 2);

function chiziqlarChizish() {
    ctx.lineWidth="5";
    //sin aylana
    ctx.strokeStyle="navy";
    ctx.beginPath();
    ctx.arc(0.2*W+0.25*H,0.25*H,100,0,2*Math.PI);
    ctx.arc(0.2*W+0.25*H,0.25*H,2,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath;
     ctx.strokeStyle="black";

    //cos aylana
    ctx.beginPath();
    ctx.arc(0.2*W,0,0.25*H-100,3*Math.PI/2,2*Math.PI);
    ctx.stroke();
    ctx.closePath;
     ctx.beginPath();
    ctx.arc(0.2*W,0,0.25*H,3*Math.PI/2,2*Math.PI);
    ctx.stroke();
    ctx.closePath;
     ctx.beginPath();
    ctx.arc(0.2*W,0,0.25*H+100,3*Math.PI/2,2*Math.PI);
    ctx.stroke();
    ctx.closePath;

    // Ox o'qi
    ctx.beginPath();
    ctx.moveTo(-W / 2, 0);
    ctx.lineTo(W / 2, 0);
    ctx.stroke();
    ctx.closePath();

    // Oy o'qi
    ctx.beginPath();
    ctx.moveTo(0.2*W, H / 2);
    ctx.lineTo(0.2*W, -H / 2)
    ctx.stroke();
    ctx.closePath();
    ctx.strokeStyle="blue";ctx.lineWidth="3";
    ctx.font="30px Times New Roman";
    ctx.strokeText("Cosα", -0.15*W-30, -H/2+30);
    ctx.strokeStyle="red";
    ctx.strokeText("Sinα", -0.15*W-30, 30);
}

let t = 0;
function graphicss() {
    ctx.beginPath();
    ctx.moveTo(-10*100, -fs(-10)*100+H/4);
    for (let i = -10; i <= 10; i+=0.01) {
        let k=i*100;
        if((k>0.2*W)&&(k<0.2*W+1)) {
            ctx.beginPath;
            ctx.arc(k,-fs(i + t)*100+H/4,4,0,2*Math.PI);
            ctx.moveTo(0.2*W,-fs(i + t)*100+H/4);
            let dx=Math.sqrt(100*100-Math.pow(Math.abs(0.25*H-(-fs(i + t)*100+H/4)),2))
            let dfx=-fs(i + t)*100+H/4;
        ctx.lineTo(0.2*W+0.25*H+dx,dfx);
            ctx.stroke();
            ctx.closePath();
        ctx.beginPath;
        ctx.moveTo(0.2*W+0.25*H+dx,dfx);
        ctx.lineTo(0.2*W+0.25*H,0.25*H);
        ctx.lineTo(0.2*W+0.25*H-dx,dfx);
         ctx.stroke();
            ctx.closePath();}
        if(k<0.2*W-1) ctx.lineTo(k, -fs(i + t)*100+H/4);
    }
    ctx.stroke();
    ctx.closePath();
}

function graphicsc() {
    ctx.beginPath();
    ctx.moveTo(-10*100, -fc(-10)*100-H/4);
    for (let i = -10; i <= 10; i+=0.01) {
        let k=i*100;
        if((k>0.2*W)&&(k<0.2*W+1)) {
             ctx.beginPath;
            ctx.arc(0.2*W,-fc(i + t)*100-H/4,4,0,2*Math.PI);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.moveTo(0.2*W,0);
        ctx.arc(0.2*W,0,fc(i + t)*100+H/4,3*Math.PI/2,2*Math.PI);
        ctx.stroke();
            ctx.closePath();}
            if(k<0.2*W-1) ctx.lineTo(k, -fc(i + t)*100-H/4);
    }
    ctx.stroke();
    ctx.closePath();
}

setInterval(function () {
    ctx.lineCap="round";
    ctx.clearRect(-W / 2, -H / 2, W, H);
    chiziqlarChizish();
    ctx.strokeStyle="blue";
    ctx.lineWidth="3";
    graphicsc();
    ctx.strokeStyle="red";
    graphicss();
    t+=0.02;}
    , 100/5);


function fs(x) {
    return Math.sin(x);
}
function fc(x) {
    return Math.cos(x);
}