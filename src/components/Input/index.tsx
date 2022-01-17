/* ----------- RESOURCES ----------- */
import { forwardRef, Ref, useContext} from 'react'
import { FormControlProps } from 'react-bootstrap'
import { useTheme } from 'Hooks/useTheme'

/* ----------- COMPONENTS ----------- */
import Form from 'react-bootstrap/Form' 

/* ----------- STYLES ----------- */
import styles from 'Components/Input/styles.module.scss'

const Input = forwardRef((props: FormControlProps, ref?: Ref<any>) => {
    const { theme } = useTheme()

    return (
        <Form.Control className={`${styles.inputCustomized} ${styles[theme]}`} ref={ref} {...props} />
    )
})

export default Input