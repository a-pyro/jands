'use server'
import { contactFormSchema } from '@/server/schemas'
import { varifyCaptcha } from '@/services/recaptcha'
import sgMail from '@sendgrid/mail'
import { NextResponse } from 'next/server'

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY ?? ''
const to = process.env.SENDGRID_TO_EMAIL ?? ''
const from = process.env.SENDGRID_FROM_EMAIL ?? ''

sgMail.setApiKey(SENDGRID_API_KEY)

export async function POST(request: Request) {
  try {
    const data = contactFormSchema.parse(await request.json())
    const { name, replyTo, message, captchaToken, imageUrl } = data

    const text = `${message}` + imageUrl ? `\nImmagine: ${imageUrl}` : ''

    await varifyCaptcha(captchaToken)

    const msg = {
      to,
      from,
      replyTo,
      subject: `Nuovo messaggio da ${name}`,
      text,
      //  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    await sgMail.send(msg)
    return NextResponse.json({
      data,
      status: 200,
      message: `Email sent to ${to}, from ${replyTo}`,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error, status: 400 })
  }
}
