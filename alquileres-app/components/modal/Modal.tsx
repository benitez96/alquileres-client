import { useEffect } from "react";

export interface Props {
	children?: JSX.Element | JSX.Element[];
	isOpen: boolean;
	onClose: () => void;
	className?: string;

}

export const Modal = ({ children, isOpen, onClose, className = '' }: Props) => {

	useEffect(() => {
		if (isOpen) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = 'unset';
	}, [isOpen])

	return (
		<>
			{
				isOpen &&
				(
					<>
						<div
							className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
							onClick={onClose}
						>
							<div className={"relative flex items-stretch mx-auto " + className} onClick={e => e.stopPropagation()}>
								<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
									{
										children
									}
								</div>
							</div>
						</div>
						<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
					</>
				)
			}
		</>
	)

}
