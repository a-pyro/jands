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
    <div>
      <h1>Contattaci</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="replyTo">Email:</label>
          <input
            type="email"
            name="replyTo"
            value={form.replyTo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Messaggio:</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Invia</button>
      </form>
    </div>
  )
}

export default ContactFrom
