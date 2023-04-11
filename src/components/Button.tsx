import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  bg: 'primary' | 'secondary' | 'tertiary'
  hover?: 'hover:bg-violet-300' | 'hover:bg-gray-500' | 'false'
  focus?: 'focus:ring-2 focus:ring-violet-100' | 'false'
}

export function Button({
  children,
  asChild,
  className,
  bg = 'primary',
  hover = 'false',
  focus = 'false',
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        'py-3 px-4 rounded-full font-semibold text-black text-sm w-full transition-all',
        {
          'bg-violet-500': (bg = 'primary'),
          'bg-gray-700': (bg = 'secondary'),
          'bg-transparent': (bg = 'tertiary')
        },
        hover,
        focus,
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
