let scans = [];

function getScans(req, res){
  res.json(scans);
}

function createScan(req, res){
  const scan = {
    id: Date.now(),
    objectName: req.body.objectName || "Unknown Object",
    status: "Saved",
    createdAt: new Date()
  };
  scans.push(scan);
  res.status(201).json(scan);
}

module.exports = { getScans, createScan };
