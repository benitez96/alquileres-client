
interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const ModalFooter = ({ children }: Props) => {

  return (

    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
      {
        children
      }
    </div>
  )
}
