import { type InputHTMLAttributes } from 'react';
import { type ClassNameValue, twMerge } from 'tailwind-merge';

type TextAreaProps = {
  label?: string;
  className?: ClassNameValue;
} & Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'className'>;
export const TextArea = ({
  label,
  name,
  className,
  ...props
}: TextAreaProps) => {
  return (
    <div>
      <label className="mb-2 block text-base text-gray-700" htmlFor={name}>
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
  );
};
