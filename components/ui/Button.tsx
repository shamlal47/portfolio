import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
}

function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button 
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-yellow-400 "
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EAB308_0%,#FDE047_50%,#EAB308_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-yellow-500 backdrop-blur-3xl">
        <a href='https://linkedin.com/in/mohammed-shamlal-kp'>
        {children || 'Get In Touch'}
        </a>
      </span>
    </button>
  )
}
export default Button