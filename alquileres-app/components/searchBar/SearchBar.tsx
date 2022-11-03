import {
	Field,
	FieldArray,
	FieldArrayRenderProps,
	Form,
	Formik
} from "formik"
import { useCallback, useRef, useState } from "react"
import Select from 'react-select'
import { Filters } from "./Filters"
import { SelectFilter } from "./SelectFilter"
import { SubmitListener } from "./SubmitListener"

interface Filter {
	value: string;
	label: string;
	icon?: string;
}

export const SearchBar = () => {

	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	]

	const filterHelpersRef = useRef<FieldArrayRenderProps>();

	const initialValues = {
		search: '',
		filters: [],
		price_from: 0,
		price_to: 500_000,
		sort_by: 'most_relevant',

	}

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values) => console.log(values)}
		>
		{
			props => (
				<div className="bg-neutral-lightest z-10 sticky top-0 h-40 max-h-40 w-screen overflow-x-auto flex flex-col">
					<Form className="flex p-3 items-center w-full sm:w-11/12 md:w-10/12 justify-between min-w-[670px] mx-auto max-h-28">
						<section className="flex gap-3 shrink-0">
							<div className="flex flex-col shrink-0">
								<label htmlFor="search" className="px-2">Filtros</label>
								<FieldArray 
									name="filters"
									render={ 
									arrayHelpers => { 
										filterHelpersRef.current = arrayHelpers
										return(
											<SelectFilter
												selected={props.values.filters}
												onSelect={arrayHelpers.push}
												options={options}
											/>
										) 
									}
									}
								/>

							</div>
							<div className="flex flex-col shrink-0">
								<label htmlFor="price_range" className="px-2">Precio</label>
								<span id='price_range'>
									<Field className="p-2 mx-1 h-12 w-24 border-4 border-neutral-darkest rounded-2xl" name="price_from" placeholder="Desde" />
									-
									<Field className="p-2 mx-1 h-12 w-24 border-4 border-neutral-darkest rounded-2xl" name="price_to" placeholder="Hasta" />
								</span>
							</div>
						</section>
						<section className="shrink-0">
							<div className="flex flex-col shrink-0">
								<label htmlFor="sort_by" className="px-2">Ordenar Por</label>
								<Field className="p-2 px-4 h-12 border-4 border-neutral-darkest rounded-2xl" name="sort_by" as="select">
									<option value="most_relevant">Mas relevante</option>
									<option value="lowest_price">Menor precio</option>
									<option value="highest_price">Mayor precio</option>
								</Field>
							</div>
						</section>
					</Form>
					{
					filterHelpersRef.current &&
						<Filters filters={props.values.filters} removeFilter={filterHelpersRef.current.remove} />
					}
					{
						<SubmitListener/>
					}
				</div>
			)
		}
		</Formik>

	)
}
