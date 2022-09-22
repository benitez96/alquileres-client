
interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const ModalHeader = ({ children }: Props) => {

  return (

    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
      {
        children
      }
    </div>
  )
}

