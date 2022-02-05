/* ----------- RESOURCES ----------- */
import { forwardRef, Ref } from 'react'

/* ----------- COMPONENTS ----------- */
import { ButtonProps } from 'react-bootstrap'
import ButtonBST from 'react-bootstrap/Button'

/* ----------- STYLES ----------- */
import styles from 'Components/Button/styles.module.scss'


const Button = forwardRef((
    { children, className, ...props }: ButtonProps,
    ref?: Ref<any>
) => (
    <ButtonBST ref={ref} className={`${styles.button} ${className}`} {...props} >
        {children}
    </ButtonBST>
))

export default Button