import { forwardRef, Ref } from 'react';
import { ButtonCustomized } from 'Components/Button/styles';
import { ButtonProps } from 'react-bootstrap';



const Button = forwardRef(({ children, ...props }: ButtonProps, ref?: Ref<any>) => (
    <ButtonCustomized ref={ref} {...props}>
        {children}
    </ButtonCustomized>
))

export default Button