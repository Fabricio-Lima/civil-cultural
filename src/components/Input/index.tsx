/* Resources */
import { forwardRef, Ref, useContext} from 'react'
import { FormControlProps } from 'react-bootstrap'

/* Components */
import { InputCustomized } from 'Components/Input/styles'

const Input = forwardRef((props: FormControlProps, ref?: Ref<any>) => {
    return (
        <InputCustomized ref={ref} {...props} />
    )
})

export default Input