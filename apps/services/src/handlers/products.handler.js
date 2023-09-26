async function upload(req, res) {
  return res.status(200).json({ message: "upload ok" })
}

module.exports = { upload }
