const heart = document.getElementById("heart");

for(let t=0;t<360;t+=6){

    let rad=t*Math.PI/180;

    let x=16*Math.pow(Math.sin(rad),3);

    let y=13*Math.cos(rad)
          -5*Math.cos(2*rad)
          -2*Math.cos(3*rad)
          -Math.cos(4*rad);

    let span=document.createElement("span");

    span.className="word";
    span.innerText="I Love You";

    span.style.left=(250+x*14)+"px";
    span.style.top=(250-y*14)+"px";

    span.style.animationDelay=(t/60)+"s";

    heart.appendChild(span);
}