import * as React from 'react'
import { useFormikContext } from 'formik'
import { isEqual, debounce } from 'lodash'

export const SubmitListener: React.FC = () => {
  const formik = useFormikContext()
  const [lastValues, updateState] = React.useState(formik.values)

  const submitForm = React.useCallback(
    debounce(
      (): void => {
        formik.submitForm()
      },
      500,
      { maxWait: 1500 }
    ),
    []
  )

  React.useEffect(() => {
    const valuesEqualLastValues = isEqual(lastValues, formik.values)

    if (!valuesEqualLastValues) {
      updateState(formik.values)
    }

    if (!valuesEqualLastValues && formik.isValid) {
      submitForm()
    }
  }, [formik.values, formik.isValid])

  return null
}
