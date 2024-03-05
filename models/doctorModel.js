const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
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
    nDoctorContactNumber:{
        type:Number,
        required:[true,'Please provide your contact number with suitable country code'],
        maxlength: [15,'The contact number should be less than 15 digits including the country code'],
        match: [
            /^\+(?:[0-9] ?){6,14}[0-9]$/,
            "Please fill a valid mobile number with country code",
          ],
    },
    sDoctorSpecialization:{
        type:String,
        required:[true,'Doctor Specialization is required'],
        enum:["General Practitioner", "Cardiologist", "Dermatologist", "Endocrinologist", "Gastroenterologist", "Hematologist", "Neurologist", "Oncologist", "Pediatrician", "Psychiatrist", "Radiologist", "Surgeon", "Urologist", "Ophthalmologist", "Orthopedic Surgeon", "Gynecologist", "ENT Specialist (Otolaryngologist)", "Nephrologist", "Rheumatologist", "Allergist/Immunologist", "Pulmonologist", "Anesthesiologist", "Physical Therapist", "Occupational Therapist", "Radiation Oncologist", "Pathologist", "Infectious Disease Specialist", "Sports Medicine Specialist", "Geriatrician", "Emergency Medicine Physician", "Family Medicine Physician", "Internal Medicine Physician", "Plastic Surgeon", "Intensivist", "Pain Management Specialist", "Podiatrist", "Medical Geneticist", "Forensic Pathologist", "Clinical Pharmacologist", "Interventional Radiologist", "Hospitalist", "Sleep Medicine Specialist", "Reproductive Endocrinologist", "Transplant Surgeon", "Neonatologist", "Telemedicine Physician", "Teleradiologist", "Dentist", "Oral Surgeon", "Periodontist", "Orthodontist", "Pediatric Dentist", "Endodontist", "Prosthodontist", "Maxillofacial Surgeon", "Dental Hygienist"]
    }
},{
    timestamps:true
});


const Doctor = mongoose.model('Doctor',doctorSchema);

module.exports = Doctor;