
interface Props {
  children: string;
}

export const Badge = ({ children }: Props) => {

  return (
    <div className='border p-1 px-2 rounded-full text-xs bg-neutral-light text-dark-primary'>{children}</div>
  )
}

