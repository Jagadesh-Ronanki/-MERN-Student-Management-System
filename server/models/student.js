import mongoose from "mongoose";
 
const studentSchema = mongoose.Schema({
    regNo: {
        type: String,
        unique: true,
        dropDups: true
    },
    studentName: String,
    year: String,
    department: String,    
    
}, {
    versionKey: false
});

const student = mongoose.model('student', studentSchema)

export default student;