import StudentData from '../models/student.js'

export const setLogin = async (req, res) => {
    const {uname, psswd, isAdmin} = req.body
    if (!isAdmin) {
        try {
            const user = await StudentData.findOne({regNo: uname})
            res.status(200).json(user)
        } catch (error) {
            res.status(404).json({message: error.message})
        }
    } else {
        if (uname === 'admin' && psswd == 'admin') {
            res.status(200).send()
        } else {
            res.status(404).json({message: "incorrect credentials"})
        }
    }
}