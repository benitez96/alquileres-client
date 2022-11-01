import { removeListener } from "process";
import { EventHandler, FocusEventHandler, useEffect, useRef, useState } from "react";

interface Option {
	value: string;
	label: string;
	icon?: string;
}

interface Props {
	options: Option[];
	onSelect: (val: Option) => void;

}

export const SelectFilter = ({ options, onSelect }: Props) => {

	const [show, setShow] = useState(false);
	const [cords, setCords] = useState({ x: 0, y: 0 });
	const [filter, setFilter] = useState('');

	const ref = useRef<HTMLInputElement>(null);

	const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		setShow(true);
	}
	const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault();
		setTimeout(() => {
			setShow(false);
		}, 100)
	}

	useEffect(() => {

		if (!ref.current) return;
		const { x, y } = ref.current.getBoundingClientRect();
		setCords({ x, y });

		addEventListener('scroll', () => {
			if (!ref.current) return;
			const { x, y } = ref.current.getBoundingClientRect();
			setCords({ x, y });
		})

		addEventListener('resize', () => {
			if (!ref.current) return;
			const { x, y } = ref.current.getBoundingClientRect();
			setCords({ x, y });
		})

	}, [])

	return (
		<div className="relative max-h-12">
			<input
				className={`p-2 h-12 border-4 border-neutral-darkest rounded-2xl ${show ? 'border-b-0' : ''}`}
				type="text"
				placeholder="Buscar..."
				onChange={e => setFilter(e.target.value)}
				onFocus={handleFocus}
				onBlur={handleBlur}
				ref={ref}
			/>
			<ul
				className={`${show ? 'block' : 'hidden'} w-full fixed bg-white border-4 border-neutral-darkest max-w-xs p-2 gap-2`}
				style={{ top: cords.y + 50, left: cords.x }}
			>
				{
					options
						.filter(opt => opt.label.toLowerCase().includes(filter.toLowerCase()))
						.map(
							option =>
								<li onClick={() => onSelect(option)} key={option.value}>{option.icon ? option.icon : '□'} {option.label}</li>
						)
				}
			</ul>

		</div>
	)
}
