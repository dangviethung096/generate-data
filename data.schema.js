const mongoose = require("mongoose");

const Schema = mongoose.Schema;
//Create Schema
const DataSchema = new Schema(
    {
        device: {
            type: Schema.ObjectId,
            ref: "device",
            index: true,
        },
        status: {
            speed: Number,
            mode: Number,
            io: Number,
        },
        device_id: {
            type: String,
            ref: "device",
            index: true,
        },
        pm25: Number,
        pm1: Number,
        pm10: Number,
        tvoc: Number,
        temp: Number,
        rh: Number,
        co2: Number,
        aq: String,
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

DataSchema.index({
    device: 1,
});

module.exports = DataSchema;
