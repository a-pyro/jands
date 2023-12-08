'use client'
import Link from 'next/link'
import { useState, useMemo } from 'react'
import { type ClassNameValue, twMerge } from 'tailwind-merge'
import Button from '../buttons/button'
import { Input, TextArea } from '.'

// export type ContactForm = {
//   name?: string
//   replyTo?: string
//   message?: string
//   imageUrl?: string
//   captchaToken: string
// }

// const initForm: ContactForm = {
//   name: undefined,
//   replyTo: undefined,
//   message: undefined,
//   captchaToken: '',
// }

// const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''

// export const ContactForm = ({
//   className = '',
//   imageUrl,
// }: {
//   className?: ClassNameValue
//   imageUrl?: string
// }) => {
//   const [form, setForm] = useState<ContactForm>({ ...initForm })
//   const recaptcha: RefObject<ReCAPTCHA> = useRef(null)
//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
//   const [success, setSuccess] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setLoading(true)

//     if (Object.values(form).some((v) => v === '')) {
//       setError('Compila tutti i campi')
//       setLoading(false)
//       return
//     }

//     const body = JSON.stringify({
//       ...form,
//       imageUrl,
//     })

//     const response = await fetch('/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body,
//     })

//     if (response.ok) {
//       setSuccess(true)
//       setForm({
//         ...initForm,
//       })
//       recaptcha?.current?.reset()
//     } else {
//       setError('Qualcosa è andato storto')
//     }

//     setLoading(false)
//   }

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setError('')
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const onCaptchaChange = (token: string | null) => {
//     // Set the captcha token when the user completes the reCAPTCHA
//     if (token) {
//       form.captchaToken = token
//     }
//   }

//   return (
//     <div className={twMerge('flex w-full flex-col md:max-w-lg', className)}>
//       <h1 className="mb-5 text-3xl font-medium">Contattaci</h1>

//       {error && <p className="text-danger">{error}</p>}
//       {success ? (
//         <div className="flex flex-col gap-6">
//           <p className="text-success">
//             Il tuo messaggio è stato inviato con successo!
//           </p>
//         </div>
//       ) : (
//         <form onSubmit={handleSubmit} className="w-full">
//           <Input
//             label="Nome"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//           />
//           <Input
//             label="Email"
//             name="replyTo"
//             value={form.replyTo}
//             onChange={handleChange}
//           />
//           <TextArea
//             label="Messaggio"
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//           />
//           <Button type="submit" loading={loading}>
//             Invia
//           </Button>

//           <ReCAPTCHA
//             size="normal"
//             sitekey={RECAPTCHA_SITE_KEY}
//             onChange={onCaptchaChange}
//             className="mt-6"
//             ref={recaptcha}
//           />
//         </form>
//       )}
//     </div>
//   )
// }

export type ContactForm = {
  name?: string
  // replyTo?: string
  message?: string
  imageUrl?: string
}

const initForm: ContactForm = {
  name: '',
  // replyTo: '',
  message: '',
}
export const ContactForm = ({
  className = '',
  imageUrl,
}: {
  className?: ClassNameValue
  imageUrl?: string
}) => {
  console.log('🚀 ~ imageUrl:', imageUrl)
  const [form, setForm] = useState<ContactForm>({ ...initForm })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const mailtoLink = useMemo(
    () =>
      `mailto:ardi.germenji@gmail.com?subject=Richiesta Info&body=Nome: ${form.name}%0D%0AMessaggio: ${form.message}` as const,
    [form],
  )

  return (
    <div className={twMerge('flex w-full flex-col md:max-w-lg', className)}>
      <h1 className="mb-5 text-3xl font-medium">Contattaci</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-full flex-col gap-2"
      >
        <Input
          label="Nome"
          name="name"
          value={form.name ?? ''}
          onChange={handleChange}
        />
        <TextArea
          label="Messaggio"
          name="message"
          value={form.message ?? ''}
          onChange={handleChange}
        />

        <Link href={mailtoLink}>
          <Button>Invia</Button>
        </Link>
      </form>
    </div>
  )
}
