const {publicdata}=require("../../db/models")

const getData = async () => {
    const data=await publicdata.findAll()
    return data
}
const saveData = async (data) => {
    await publicdata.create({"value":data})
    return {success:true}
}

module.exports = { getData, saveData }