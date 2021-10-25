import { forwardRef, Ref} from 'react';
import { InputCustomized } from 'Components/Input/styles';
import { FormControlProps } from 'react-bootstrap';

const Input = forwardRef((props: FormControlProps, ref?: Ref<any>) => <InputCustomized ref={ref} {...props} />)

export default Input