'use client'
import ReCAPTCHA from 'react-google-recaptcha'
import {
  type RefObject,
  useRef,
  useState,
  type InputHTMLAttributes,
} from 'react'
import Button from './buttons/button'
import { twMerge, type ClassNameValue } from 'tailwind-merge'
import { type ZodSchema } from 'zod'

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  label?: string
  className?: ClassNameValue
}

const Input = ({ label, name, className, ...props }: InputProps) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-base text-gray-700">
        {label}:
      </label>
      <input
        id={name}
        name={name}
        {...props}
        className={twMerge(
          'focus:shadow-outline w-full appearance-none border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-secondary',
          className,
        )}
      />
    </div>
  )
}

interface TextAreaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  label?: string
  className?: ClassNameValue
}
const TextArea = ({ label, name, className, ...props }: TextAreaProps) => {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-base text-gray-700">
        {label}:
      </label>
      <textarea
        id={name}
        name={name}
        {...props}
        className={twMerge(
          'focus:shadow-outline w-full appearance-none border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-secondary',
          className,
        )}
      />
    </div>
  )
}

export type ContactForm = {
  name: string
  replyTo: string
  message: string
  imageUrl?: string
  captchaToken: string
}

const initForm: ContactForm = {
  name: '',
  replyTo: '',
  message: '',
  captchaToken: '',
}

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type allKeys<T> = T extends any ? keyof T : never

type FormState<T> = {
  data: T
  errors?: { [P in allKeys<T>]?: string[] | undefined }
  loading: boolean
}

export const useForm = <T,>(init: T, schema: ZodSchema<T>) => {
  const [form, setForm] = useState<FormState<T>>({
    data: init,
    errors: undefined,
    loading: false,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prevForm) => ({
      ...prevForm,
      data: {
        ...prevForm.data,
        [e.target.name]: e.target.value,
      },
    }))
  }

  const handleSubmit = async (submitFunction: (data: T) => Promise<void>) => {
    setForm((prevForm) => ({ ...prevForm, loading: true }))
    try {
      const validatedData = schema.safeParse(form.data)
      if (validatedData.success) {
        await submitFunction(validatedData.data)

        setForm((prevForm) => ({
          ...prevForm,
          errors: undefined,
          loading: false,
        }))
      } else {
        const errors = validatedData.error.formErrors.fieldErrors
        setForm((prevForm) => ({ ...prevForm, errors, loading: false }))
      }
    } catch (error) {
      console.error(error)
      setForm((prevForm) => ({ ...prevForm, loading: false }))
    }
  }

  return { form, handleChange, handleSubmit }
}

const ContactForm = ({
  className = '',
  imageUrl,
}: {
  className?: ClassNameValue
  imageUrl?: string
}) => {
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

    const body = JSON.stringify({
      ...form,
      imageUrl,
    })

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
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
          <Input
            label="Nome"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <Input
            label="Email"
            name="replyTo"
            value={form.replyTo}
            onChange={handleChange}
          />
          <TextArea
            label="Messaggio"
            name="message"
            value={form.message}
            onChange={handleChange}
          />
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
