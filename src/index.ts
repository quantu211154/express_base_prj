import { connectDatabase } from '@configs/db.config'
import config from '@configs/env.config'
import app from './app'

async function startServer() {
  await connectDatabase()

  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`)
  })
}

startServer()
