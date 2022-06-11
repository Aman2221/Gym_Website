import { ErrorMessage } from "formik"

const ErrorMessages = ({name}) => {
  return (
     <div style={{color :'red', textTransform : 'capitalize'}}>
        <small><ErrorMessage name={name} /></small>
    </div>
  )
}

export default ErrorMessages