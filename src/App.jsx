import { RoutesPersonalizadas } from './routes'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import { CarsProvider } from './context/useCars'
import { GlobalTheme } from './theme/globalTheme'
import { CategoryProvider } from './context/useCategory'
import { CarUniqueProvider } from './context/useCarUnique'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalTheme>
          <CarsProvider>
            <CarUniqueProvider>
              <CategoryProvider >
                <RoutesPersonalizadas />
              </CategoryProvider>
            </CarUniqueProvider>
          </CarsProvider>
        </GlobalTheme>
      </ThemeProvider>
    </>
  )
}

export default App
