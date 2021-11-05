import 'styled-components'

declare module  'styled-components' {
  export interface DefaultTheme {
    type: string;
    title: string;
    text: string;
    link: string;
    background: string;
    backgroundInput: string;
    colors: {
      primary: string;
      secondary: string;
      third: string;
      gray: string;
      grayDark: string;
      grayLight: string;
      success: string;
      warn: string;
      error: string;
      purple: string;
    },
    tons: {
      primary: string;
    }
    popup: {
      background: string;
      color: string;
      borderBottom: string;
    }
  }
}