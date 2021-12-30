/* Resources */
import { useTheme } from 'Hooks/useTheme'

/* Components */
import Alert from 'react-bootstrap/Alert'

/* Styles */
import styles from 'Components/AlertError/styles.module.scss'

export default function AlertError({ text, ...props }: { text: string }) {

    const { theme } = useTheme()

    return (
        <Alert  className={`${styles.alertCustom} ${styles[theme]} p-1 text-error float-end border-0`} {...props}> { text } </Alert>
    )
}