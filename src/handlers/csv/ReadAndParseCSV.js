const csv = require("../../services/CU/csv");



    const readParse = (router) => {
        router.get("/files/csv", handle);
      };


      
const handle =(req,res) => {

    const { fileName } = req.body

    try {
        csv.readAndSaveCSV(fileName);
    } catch (error) {
        console.log(error)
    }

    res.status(200).json({
        ok: true
      });
      
}


  
  module.exports = {
    readParse
  }