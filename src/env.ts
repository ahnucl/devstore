import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  server: {
    APP_URL: z.string().url(),
  },
  clientPrefix: 'PUBLIC_',
  client: {
    PUBLIC_API_BASE_URL: z.string().url(),
  },
  runtimeEnv: process.env,
})
