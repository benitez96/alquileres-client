
interface Props {
	children?: JSX.Element | JSX.Element[];
}

export const ModalBody = ({ children }: Props) => {

	return (

		<div className="relative p-6 flex-auto overflow-y-auto flex flex-col max-h-[29rem]">
			{
				children
			}
		</div>
	)
}
