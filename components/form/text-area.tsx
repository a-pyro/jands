import { type InputHTMLAttributes } from 'react'
import { type ClassNameValue, twMerge } from 'tailwind-merge'

interface TextAreaProps
  extends Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  label?: string
  className?: ClassNameValue
}
export const TextArea = ({
  label,
  name,
  className,
  ...props
}: TextAreaProps) => {
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
