// src/controllers/ot.controller.js
import OtModel from '../models/ot.model.js'

export const getAllOt = async (req, res) => {
  try {
    const data = await OtModel.findAll()
    res.json({ success: true, data })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
}

export const getOtById = async (req, res) => {
  try {
    const { id } = req.params
    const item = await OtModel.findById(id)

    if (!item) {
      return res.status(404).json({ success: false, message: 'OT not found' })
    }

    res.json({ success: true, data: item })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
}

export const createOt = async (req, res) => {
  try {
    const body = req.body

    // เช็คค่าที่จำเป็น (เอาแบบเบา ๆ ก่อน)
    if (!body.start_time || !body.end_time) {
      return res.status(400).json({
        success: false,
        message: 'start_time และ end_time'
      })
    }

    const created = await OtModel.create(body)
    res.status(201).json({ success: true, data: created })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
}

export const updateOt = async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body

    const exists = await OtModel.findById(id)
    if (!exists) {
      return res.status(404).json({ success: false, message: 'OT not found' })
    }

    const ok = await OtModel.update(id, body)
    if (!ok) {
      return res.status(500).json({ success: false, message: 'Update failed' })
    }

    const updated = await OtModel.findById(id)
    res.json({ success: true, data: updated })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
}

export const deleteOt = async (req, res) => {
  try {
    const { id } = req.params

    const exists = await OtModel.findById(id)
    if (!exists) {
      return res.status(404).json({ success: false, message: 'OT not found' })
    }

    const ok = await OtModel.remove(id)
    if (!ok) {
      return res.status(500).json({ success: false, message: 'Delete failed' })
    }

    res.json({ success: true, message: 'Deleted' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ success: false, message: 'Internal server error' })
  }
}
