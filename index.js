const mongoose = require("mongoose")
const dataSchema = require("./data.schema")

mongoose.connect('mongodb://localhost:27017/viettel_purifier', {useNewUrlParser: true, useUnifiedTopology: true})

const DataModel = mongoose.model('datas', dataSchema)
const now = new Date('2021-01-19T09:00:00')

const generateData = async () => {
    for (var i = 0; i < 1000; i++) {
        var data = new DataModel()
        data.device = mongoose.Types.ObjectId("5fe56b9fd14c290cc4a05f9e")
        data.device_id = "hungtest"
        data.pm25 = Math.random() * 100
        data.pm1 = Math.random() * 100
        data.pm10 = Math.random() * 100
        data.tvoc = Math.random() * 5
        data.temp = Math.random() * 15 + 20
        data.rh = Math.random() * 100
        data.co2 = Math.random() * 4000
        data.aq = Math.random() * 100
        data.createdAt = new Date(now.getTime() - i * 300000)
        console.log(data.createdAt.toISOString())
        data.updatedAt = new Date(now.getTime() - i * 300000)
        
        await data.save()
    }
}


generateData()