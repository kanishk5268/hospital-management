const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    pId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Patient",
        required:true
    },
    dId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:true
    },
    sId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Staff",
        required:true
    },
    appointmentCreatedAt:{
        type:Date
    }
},{
    timestamps:true
})

const Appointment = mongoose.model('Appointment',appointmentSchema);
module.exports = Appointment