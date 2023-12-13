import { type InputHTMLAttributes } from 'react';
import { type ClassNameValue, twMerge } from 'tailwind-merge';

type InputProps = {
  label?: string;
  className?: ClassNameValue;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'className'>;

export const Input = ({ label, name, className, ...props }: InputProps) => {
  return (
    <div>
      <label className="mb-2 block text-base text-gray-700" htmlFor={name}>
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
  );
};
