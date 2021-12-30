// serve como referência as cores light e dark
export const ThemeStyle = {
  light: {
    type: 'light',
    title: 'var(--gray-700)',
    text: 'var(--gray-500)',
    link: 'var(--gray-400)',
    background: 'var(--light)',
    backgroundInput: 'var(--gray-200)',
    colors: {
      primary: 'var(--gray-500)',
      secondary: 'var(--blue-500)',
      third: 'var(--purple-800)',
      purple: 'var(--purple-500)',
      gray: 'var(--gray-300)',
      grayDark: 'var(--gray-300)',
      grayLight: 'var(--gray-200)',
      success: 'var(--green-500)',
      warn: 'var(--yellow-400)',
      error: 'var(--red-400)',
    },
    tons: {
      primary: 'rgba(50,50,50,.3)'
    },
    popup: {
      background: 'linear-gradient(5deg, rgb(253, 253, 253, .8), rgb(245, 245, 245, .8))',
      color: '5F5F5F',
      borderBottom: '2px solid rgb(169, 169, 169, .9)'
    }
  },
  
  dark: {
    type: 'dark',
    title: 'var(--gray-100)',
    text: 'var(--gray-50)',
    link: 'var(--gray-100)',
    background: 'var(--dark)',
    backgroundInput: 'var(--gray-400)',
    colors: {
      primary: 'var(--white)',
      secondary: 'var(--blue-500)',
      third: 'var(--purple-800)',
      purple: 'var(--purple-400)',
      gray: 'var(--gray-700)',
      grayDark: 'var(--gray-500)',
      grayLight: 'var(--gray-400)',
      success: 'var(--green-500)',
      warn: 'var(--yellow-400)',
      error: 'var(--red-400)',
    },
    tons: {
      primary: 'rgba(0, 0, 0, .3)'
    },
    popup: {
      background: 'linear-gradient(5deg, rgba(79, 82, 101, .8), rgba(95, 99, 114, .8))',
      color: '#FFFFFF',
      borderBottom: '2px solid rgba(105, 107, 120, .9)'
    }
  }
}