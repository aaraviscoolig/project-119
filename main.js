
function preload(){
classifier = ml5.imageClassifier('DoodleNet');
}

function setup(){
    canvas=createCanvas(640,480)
    canvas.position(400,280);
    canvas.mouseReleased(classifycanvas)
    synth= window.speechSynthesis;

}

function draw(){
    strokeWeight(13);

    stroke('red');

    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }

           


}

function classifycanvas(){
classifier.classify(canvas, gotResult);
}

function gotResult(error,result){
    if (error)
    console.log(error);

console.log(result)
document.getElementById('span1').innerHTML=result[0].label;
document.getElementById('span2').innerHTML=Math.round(result[0].confidence * 100) + '%';
utterThis = new SpeechSynthesisUtterance(result[0].label);
synth.speak(utterThis);
}
function clearcanvas(){
    background('white')
}