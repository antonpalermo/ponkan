async function upload(req, res) {
  console.log("handler: ", req.files)
  return res.status(200).json({ message: "upload ok" })
}

module.exports = { upload }
