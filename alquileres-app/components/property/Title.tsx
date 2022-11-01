
interface Props {
	company?: string;
	property: string;
}

export const Title = ({ company, property }: Props) => {



	return (

		<div className="flex justify-end flex-col min-h-[3rem]">
			{!!company && <h3 className=''>{company}</h3>}
			<h2 className='text-lg font-bold'>{property}</h2>
		</div>
	)
}

