const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    sFirstName:{
        type: String,
        required: [true,'Please provide your first name'],
        trim:true,
        minlength: [2,'The length of the first name should be greater than 2 characters'],
        maxlength:[50,'The length of the first name should be less than 50 characters']
    },
    sLastName:{
        type: String,
        required: [true,'Please provide your last name'],
        trim:true,
        minlength: [2,'The length of the last name should be greater than 2 characters'],
        maxlength: [50,'The length of the last name should be less than 50 characters']
    },
    sGender:{
        type: String,
        required: [true,'Please provide your gender'],
        trim:true,
        enum:['male','female','other']
    },
    nAge:{
        type: Number,
        required: [true,'Please provide your age and it should not be greater than 110 years'],
        max: [110,'Age of the patient should be less than 110']
    },
    sAddress:{
        type:String,
        required:[true,'Please provide your residential address'],
        trim:true,
        maxlength: [200,'Address should be less than 200 characters']
    },
    nPatientContactNumber:{
        type:Number,
        required:[true,'Please provide your contact number with suitable country code'],
        maxlength: [15,'The contact number should be less than 15 digits including the country code'],
        match: [
            /^\+(?:[0-9] ?){6,14}[0-9]$/,
            "Please fill a valid mobile number with country code",
          ],
    },
    sSufferingFrom:{
        type:String,
        required:[true,'Please provide the disease or the injury you are suffering from'],
        trim:true,
        maxlength:[200,'The disease/injury that you are suffering from should be less than 200 characters'],
    },
    sBloodGroup:{
        type:String,
        required:[true,'Please provide your blood group'],
        enum:['A+','A-','B+','B-','AB+','AB-','O+','O-']
    },
    sMedicalHistory:{
        type:String,
        trim: true,
        minlength:[10,'Medical history should be greater than 10 characters'],
        maxlength: [500,'Medical history should be less than 500 characters']
    },
    dId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Doctor",
        required:[true,'Doctor Id is required']
    }
},
{
    timestamps:true
});

const Patient =  mongoose.model('Patient',patientSchema);

module.exports = Patient;