'use server'
import { contactFormSchema } from '@/app/server/schemas'
import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY ?? ''
const to = process.env.SENDGRID_TO_EMAIL ?? ''
const from = process.env.SENDGRID_FROM_EMAIL ?? ''

sgMail.setApiKey(SENDGRID_API_KEY)

export async function POST(request: Request) {
  const data = contactFormSchema.parse(await request.json())
  const { name, replyTo, message } = data
  const msg = {
    to,
    from,
    replyTo,
    subject: `Nuovo messaggio da ${name}`,
    text: message,
    //  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log(`Email sent to ${to}, from ${replyTo}`)
    })
    .catch((error) => {
      console.error(error)
    })

  return NextResponse.json({ response: data })
}
