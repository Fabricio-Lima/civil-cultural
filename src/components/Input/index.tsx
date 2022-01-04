/* Resources */
import { forwardRef, Ref, useContext} from 'react'
import { FormControlProps } from 'react-bootstrap'
import { useTheme } from 'Hooks/useTheme'

/* Components */
import Form from 'react-bootstrap/Form' 

/* Styles */
import styles from 'Components/Input/styles.module.scss'

const Input = forwardRef((props: FormControlProps, ref?: Ref<any>) => {
    const { theme } = useTheme()

    return (
        <Form.Control className={`${styles.inputCustomized} ${styles[theme]}`} ref={ref} {...props} />
    )
})

export default Input