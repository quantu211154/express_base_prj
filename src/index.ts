import { DB_CONFIG } from '@configs/db.config'
import env from '@configs/env.config'
import { logger } from '@utils/logger.util'
import { connect } from 'mongoose'
import app from './app'

async function connectDatabase() {
  try {
    const dbUrl = env.DB_URL

    if (!dbUrl) {
      logger.error('No setting for DB url')
      process.exit(1)
    }

    await connect(dbUrl, DB_CONFIG)
    logger.info(`MongoDB connected on url: ${dbUrl}`)
  } catch (error) {
    logger.error('MongoDB connection error:', error)
    process.exit(1)
  }
}

async function startServer() {
  await connectDatabase()

  app.listen(env.PORT, () => {
    logger.info(`Server running on port ${env.PORT}`)
  })
}

startServer()
