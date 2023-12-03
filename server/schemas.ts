import { z } from 'zod'

const ERROR_REQUIRED = 'Per favore compila questo campo'

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: ERROR_REQUIRED }),
  replyTo: z.string().min(1, { message: ERROR_REQUIRED }).email(),
  message: z.string().min(1, { message: ERROR_REQUIRED }),
  imageUrl: z.string().optional(),
  captchaToken: z.string().min(1, { message: ERROR_REQUIRED }),
})
