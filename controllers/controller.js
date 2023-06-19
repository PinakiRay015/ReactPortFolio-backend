const {formDB , partnerDB} = require("../schema/data");

const createData = async (req , res) =>
{
    try {
        const data = await formDB.create(req.body)
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

const createPartner = async (req , res) =>
{
    try {
        const partnerData = await partnerDB.create(req.body)
        res.status(200).json(partnerData)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

module.exports = {
    createData,
    createPartner
};