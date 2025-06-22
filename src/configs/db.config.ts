import mongoose from 'mongoose'
import config from './env.config'

export async function connectDatabase() {
  const dbUrl = config.DB_URL

  if (!dbUrl) {
    console.log('No setting for DB url')
    process.exit(1)
    return
  }

  try {
    await mongoose.connect(dbUrl, {
      maxPoolSize: 20,
    })
    console.log('✅ MongoDB connected')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    process.exit(1)
  }
}
