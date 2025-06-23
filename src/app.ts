import { CORS_CONFIG } from '@configs/cors.config'
import { RATE_LIMITER_CONFIG } from '@configs/rateLimiter.config'
import { SWAGGER_OPTIONS } from '@configs/swagger.config'
import { globalErrorHandler } from '@middlewares/errorHandler.middleware'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import rateLimit from 'express-rate-limit'
import swaggerUi from 'swagger-ui-express'

const app = express()

app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: true, limit: '5mb' }))
app.use(cookieParser())
app.use(rateLimit(RATE_LIMITER_CONFIG))
app.use(cors(CORS_CONFIG))
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(SWAGGER_OPTIONS))

// Alway bottom
app.use(globalErrorHandler)

export default app
