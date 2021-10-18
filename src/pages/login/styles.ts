import styled from 'styled-components'

export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const BoxImgIllustration = styled.section`
    width: 50%;
    height: 100%;
`

export const BoxLogin = styled.section`
    width: 50%;
`

export const ImgIllustration = styled.div`
    width: 100%;
    height: 100%;
   /*  background: url('./astronaut-illustration.svg') no-repeat left top;
    background-size: contain; */
`

export const Box = styled.div`
    flex: 0 0 auto; 
`

export const BoxInput = styled.div`
    flex: 0 0 auto;
`

export const Input = styled.input.attrs(props => ({
    type: props.type
})) `
    

`