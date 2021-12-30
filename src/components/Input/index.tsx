/* Resources */
import { forwardRef, Ref, useContext} from 'react'
import { FormControlProps } from 'react-bootstrap'

/* Components */
import Form from 'react-bootstrap/Form' 

/* Styles */
import styles from 'Components/Input/styles.module.scss'

const Input = forwardRef((props: FormControlProps, ref?: Ref<any>) => {
    return (
        <Form.Control className={styles.inputCustomized} ref={ref} {...props} />
    )
})

export default Input