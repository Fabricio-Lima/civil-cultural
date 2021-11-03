

import {
    AlertCustom
} from 'Components/AlertError/styles'

export default function AlertError({ text, ...props }: { text: string }) {

    return (
        <AlertCustom  className='p-1 text-error float-end border-0' {...props}> { text } </AlertCustom>
    )
}