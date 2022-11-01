import {
	Field,
	Form,
	Formik
} from "formik"
import Select from 'react-select'
import { SelectFilter } from "./SelectFilter"


export const SearchBar = () => {

	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' }
	]


	const initialValues = {
		search: '',
		price: [5000, 100_000]
	}

	return (
		<>
			<div className="bg-neutral-lightest z-10 sticky top-0 h-28 max-h-28 w-screen overflow-x-auto">
				<Formik
					initialValues={initialValues}
					onSubmit={(values) => console.log(values)}
				>
					{
						props => (
							<Form className="flex p-3 items-center w-full sm:w-11/12 md:w-10/12 justify-between min-w-[670px] mx-auto max-h-28">
								<section className="flex gap-3 shrink-0">
									<div className="flex flex-col shrink-0">
										<label htmlFor="search" className="px-2">Filtros</label>
									{/*
									<Field className="p-2 h-12 border-4 border-neutral-darkest rounded-2xl" id="search" name="search" placeholder="Buscar..." />
									*/}
										<SelectFilter
											onSelect={opt => console.log(opt.value)}
											options={options} 
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
											<option value="lowest_price">Menor precio</option>
											<option value="highest_price">Mayor precio</option>
											<option value="most_relevant">Mas relevante</option>
										</Field>
									</div>
								</section>
							</Form>
						)
					}
				</Formik>
			</div>
		</>

	)
}
