import 'server-only'

export const varifyCaptcha = async (token: string) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY ?? ''
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
  const res = await fetch(url, { method: 'POST' })
  if (res.ok) {
    console.log('Captcha verification success')
    return 'success'
  }
  throw new Error('Captcha verification failed')
}

export function asd() {
  return 'recaptcha'
}
