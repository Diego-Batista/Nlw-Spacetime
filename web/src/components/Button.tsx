interface ButtonProps {
  title: string
}

export function Button({ title }: ButtonProps) {
  return (
    <button className="bg-slate-500 p-4 rounded-md text-white">{title}</button>
  )
}
