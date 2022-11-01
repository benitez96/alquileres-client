import Link from "next/link";
import { Scheme } from "../../interfaces/colorscheme";
import { colorSchemes } from "./colorSchemes";


export interface Props {
	colorScheme?: Scheme;
	children?: JSX.Element | JSX.Element[];
	id: string;
}

export const PropertyCard = ({ colorScheme = 'light', id, children }: Props) => {


	return (
		<Link href={`/?property=${id}`} as={`/property/${id}`} scroll={false} >
			<a>
				<article
					className={`border rounded-md w-[98%] md:w-10/12 min-h-[7rem] border-neutral-light mx-auto items-center p-4 gap-4 flex py-2
            ${colorSchemes[colorScheme].bgPrimary} ${colorSchemes[colorScheme].textPrimary}
            ${colorSchemes[colorScheme].bgSecondary} ${colorSchemes[colorScheme].textSecondary}
            `}
				>
					{children}
				</article>
			</a>
		</Link >

	)

}
