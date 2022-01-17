/* ----------- RESOURCES ----------- */
import { forwardRef, Ref } from 'react'

/* ----------- COMPONENTS ----------- */
import { ButtonProps } from 'react-bootstrap'
import ButtonBST from 'react-bootstrap/Button'

/* ----------- STYLES ----------- */
import styles from 'Components/Button/styles.module.scss'


const Button = forwardRef(({ children, ...props }: ButtonProps, ref?: Ref<any>) => (
    <ButtonBST ref={ref} {...props} className={styles.button}>
        {children}
    </ButtonBST>
))

export default Button