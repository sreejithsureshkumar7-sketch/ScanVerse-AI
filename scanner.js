const camera = document.getElementById("camera");
const result = document.getElementById("result");
const overlay = document.getElementById("overlay");
const ctx = overlay.getContext("2d");

async function startCamera(){
  try{
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio:false });
    camera.srcObject = stream;
  }catch(error){
    alert("Camera permission blocked or not supported.");
  }
}

let model;

async function loadModel() {
  model = await cocoSsd.load();
  console.log("AI Model Loaded");
}

loadModel();

async function scanObject() {
  if (!model) {
    alert("AI model loading... wait 5 seconds");
    return;
  }

  const predictions = await model.detect(camera);

  overlay.width = camera.videoWidth;
overlay.height = camera.videoHeight;

ctx.clearRect(0, 0, overlay.width, overlay.height);
  if (predictions.length > 0) {
    result.innerHTML =predictions.forEach(pred => {
  const [x, y, width, height] = pred.bbox;

  ctx.strokeStyle = "lime";
  ctx.lineWidth = 3;
  ctx.strokeRect(x, y, width, height);

  ctx.fillStyle = "lime";
  ctx.font = "18px Arial";
  ctx.fillText(pred.class, x, y - 10);
});
      "Detected Object: <b>" +
      predictions[0].class +
      "</b><br>Confidence: " +
      Math.round(predictions[0].score * 100) +
      "%";
  } else {
    result.innerHTML = "No object detected";
  }
}

function saveScan(){
  const scans = JSON.parse(localStorage.getItem("scans") || "[]");
  scans.push({ name: "Demo 3D Scan", date: new Date().toLocaleString() });
  localStorage.setItem("scans", JSON.stringify(scans));
  alert("Scan saved in demo storage!");
}
