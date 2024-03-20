import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { DefaultRouter } from './DefaultRouter'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <DefaultRouter />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
