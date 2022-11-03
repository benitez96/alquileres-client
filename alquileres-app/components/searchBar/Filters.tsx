
interface Filter {
	value: string;
	label: string;
	icon?: string;
}

interface Props {
	filters: Filter[];
	removeFilter: (index: number) => void;
}

export const Filters = ({ filters, removeFilter }: Props) => {

	return (
		<div className="flex flex-row gap-3 w-full sm:w-11/12 md:w-10/12 min-w-[670px] mx-auto text-neutral-lightest">
			{
				filters.map(
					(filter, i) => (
						<div className="rounded-full bg-venus-base p-2 px-3" key={filter.value}>
							<span className="font-bold text-neutral-lightest">{ filter.icon  || '□'} { filter.label }</span>
							<button className="ml-2 font-bold" onClick={() => removeFilter(i)}>&times;</button>
						</div>
					)
				)
			}
		</div>
	)

}
