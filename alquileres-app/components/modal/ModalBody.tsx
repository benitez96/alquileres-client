
interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const ModalBody = ({ children }: Props) => {

  return (

    <div className="relative p-6 flex-auto">
      {
        children
      }
    </div>
  )
}
