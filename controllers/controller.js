const formDB = require("../schema/data")

const createData = async (req , res) =>
{
    try {
        const data = await formDB.create(req.body)
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = createData;