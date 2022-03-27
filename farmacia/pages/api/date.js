import dbConnect from '../../lib/dbConnect'
import Date from '../../models/Date'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const dates = await Date.find({})
                res.status(200).json({ success: true, data: dates })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const date = await Date.create(req.body)
                res.status(201).json({ success: true, data: date })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}