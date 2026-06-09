const camera = document.getElementById("camera");
const result = document.getElementById("result");

async function startCamera(){
  try{
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio:false });
    camera.srcObject = stream;
  }catch(error){
    alert("Camera permission blocked or not supported.");
  }
}

function scanObject(){
  const demoObjects = ["Chair", "Bottle", "Box", "Laptop", "Bag", "Book"];
  const objectName = demoObjects[Math.floor(Math.random() * demoObjects.length)];
  result.innerHTML = `Detected Object: <b>${objectName}</b><br>Status: 3D reconstruction demo ready`;
}

function saveScan(){
  const scans = JSON.parse(localStorage.getItem("scans") || "[]");
  scans.push({ name: "Demo 3D Scan", date: new Date().toLocaleString() });
  localStorage.setItem("scans", JSON.stringify(scans));
  alert("Scan saved in demo storage!");
}
