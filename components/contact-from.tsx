'use client'

import { useState } from 'react'

const ContactFrom = () => {
  const [form, setForm] = useState({
    name: '',
    replyTo: '',
    message: '',
  })
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { name, replyTo, message } = form

    if (!name || !replyTo || !message) {
      setError('Compila tutti i campi')
      return
    }

    await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, replyTo, message }),
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="justify- flex min-h-screen flex-col items-center">
      <h1 className="mb-5 text-2xl font-bold">Contattaci</h1>
      {error && <p className="text-red-500">{error}</p>}
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
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
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
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
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
            className="focus:shadow-outline h-20 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Invia
        </button>
      </form>
    </div>
  )
}

export default ContactFrom
