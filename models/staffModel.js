const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    sFirstName:{
        type:String,
        trim:true,
        required:[true,'Please provide your first name'],
        minlength:[2,'The length of the first name should be greater than 2 characters'],
        maxlength:[50,'The lenght of the first name should be less than 50 characters']
    },
    sLastName:{
        type:String,
        trim:true,
        required:[true,'Please provide your last name'],
        minlength:[2,'The length of the last name should be greater than 2 characters'],
        maxlength:[50,'The length of the last name should be less than 50 characters']
    },
    sGender:{
        type:String,
        required:[true,'Please provide your gender'],
        enum:['male','female','others']
    },
    nAge:{
        type:Number,
        required:[true,'Please provide your age'],
        min:[23,'Age should be greater than 23 years'],
        max:[110,'Age should be less than 110 years ']
    },
    nStaffContactNumber:{
        type:Number,
        required:[true,'Please provide your contact number with suitable country code'],
        maxlength: [15,'The contact number should be less than 15 digits including the country code'],
        match: [
            /^\+(?:[0-9] ?){6,14}[0-9]$/,
            "Please fill a valid mobile number with country code",
          ],
    },
    sStaffSpecialization:{
        type:String,
        required:[true,'Specialization of the Staff is required'],
        enum:['Medical Staff','Nursing Staff','Support Staff','Clinical Support Staff','Diagnostic and Laboratory Staff','Technical and Engineering Staff','Support Services','Management and Administrative Staff','Specialized Staff']
    }
},{
    timestamps:true
})

const Staff = mongoose.model('Staff',staffSchema);

module.exports = Staff;