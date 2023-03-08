const services=require("../services/publicData.service.js")

const giveMeData = async (req, res) => {
    try{
        const result = await services.getData()
        res.status(201).send(result)
    }catch(e){
        res.status(404).send(e.message)
    }
}
const saveData = async (req, res) => {
    try{
        const { data } = req.body
        const result = await services.saveData(data)
        res.status(201).send(result)
    }catch(e){
        res.status(404).send(e.message)
    }
}


module.exports = { giveMeData, saveData }