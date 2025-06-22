import { globalErrorHandler } from '@middlewares/errorHandler.middleware'
import express from 'express'

const app = express()

app.use(express.json())

// Alway bottom
app.use(globalErrorHandler)

export default app
