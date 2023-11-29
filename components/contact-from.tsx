'use client'

import { useState } from 'react'

const ContactFrom = () => {
  const [form, setForm] = useState({
    name: '',
    replyTo: '',
    message: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { name, replyTo, message } = form

    if (!name || !replyTo || !message) {
      setError('Compila tutti i campi')
      setLoading(false)
      return
    }

    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, replyTo, message }),
    })

    if (response.ok) {
      setSuccess(true)
      setForm({
        name: '',
        replyTo: '',
        message: '',
      })
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

  return (
    <div className="justify- flex min-h-screen flex-col items-center">
      <h1 className="mb-5 text-2xl font-bold">Contattaci</h1>
      {error && <p className="text-red-500">{error}</p>}
      {success && (
        <p className="text-green-500">
          Il tuo messaggio è stato inviato con successo!
        </p>
      )}
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Nome:
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-purple-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="replyTo"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            name="replyTo"
            value={form.replyTo}
            onChange={handleChange}
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-purple-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Messaggio:
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="focus:shadow-outline h-20 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-purple-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-purple-500 ${
            loading ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          {loading ? 'Invio...' : 'Invia'}
        </button>
      </form>
    </div>
  )
}

export default ContactFrom
