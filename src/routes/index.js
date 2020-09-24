import express from 'express'

import { characters } from './characters'

const routers = express.Router()

routers.use('/characters', characters)

export { routers }
