'use client'
import ReCAPTCHA from 'react-google-recaptcha'
import { type RefObject, useRef, useState } from 'react'
import Button from './buttons/button'
import { twMerge, type ClassNameValue } from 'tailwind-merge'

export type ContactForm = {
  name: string
  replyTo: string
  message: string
  captchaToken: string
}

const initForm: ContactForm = {
  name: '',
  replyTo: '',
  message: '',
  captchaToken: '',
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''

const ContactForm = ({ className = '' }: { className?: ClassNameValue }) => {
  const [form, setForm] = useState<ContactForm>({ ...initForm })
  const recaptcha: RefObject<ReCAPTCHA> = useRef(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (Object.values(form).some((v) => v === '')) {
      setError('Compila tutti i campi')
      setLoading(false)
      return
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    if (response.ok) {
      setSuccess(true)
      setForm({
        ...initForm,
      })
      recaptcha?.current?.reset()
    } else {
      setError('Qualcosa è andato storto')
    }

    setLoading(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setError('')
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onCaptchaChange = (token: string | null) => {
    // Set the captcha token when the user completes the reCAPTCHA
    if (token) {
      form.captchaToken = token
    }
  }

  return (
    <div className={twMerge('flex w-full flex-col md:max-w-lg', className)}>
      <h1 className="mb-5 text-3xl font-medium">Contattaci</h1>

      {error && <p className="text-danger">{error}</p>}
      {success ? (
        <div className="flex flex-col gap-6">
          <p className="text-success">
            Il tuo messaggio è stato inviato con successo!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block text-base  text-gray-700"
            >
              Nome:
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none  border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-secondary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="replyTo"
              className="mb-2 block text-base  text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              name="replyTo"
              value={form.replyTo}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none  border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-secondary"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-base  text-gray-700"
            >
              Messaggio:
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="focus:shadow-outline h-20 w-full appearance-none  border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-secondary"
            ></textarea>
          </div>
          <Button type="submit" loading={loading}>
            Invia
          </Button>

          <ReCAPTCHA
            size="normal"
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={onCaptchaChange}
            className="mt-6"
            ref={recaptcha}
          />
        </form>
      )}
    </div>
  )
}

export default ContactForm
