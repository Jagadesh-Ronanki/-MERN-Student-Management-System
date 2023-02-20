import StudentData from '../models/student.js'

export const updateDetails = async (req, res) => {
    const {r, s, y, d} = req.body
    try {
        console.log(req.body)
        const updatedDetails = await StudentData.findByIdAndUpdate(req.params.id, req.body)
        res.status(202).json(updatedDetails)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}