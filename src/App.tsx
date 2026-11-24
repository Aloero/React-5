import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/useTheme'
import { light, dark } from './theme/theme'
import { GlobalStyle } from './theme/GlobalStyle';
import { Button } from './components/ui/Button';
import { Catalog } from './components/Catalog';
import { Header } from './components/Header';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

function App() {
  const { theme, toggle } = useTheme();

  return (  
    <>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <GlobalStyle />
        <Header theme={theme} toggle={toggle} />
        <Button variant='primary' size='sm' onClick={toggle}>Сменить тему</Button>
        <Button variant='outline' size='md' onClick={toggle}>Сменить тему</Button>
        <Button variant='danger' size='lg' onClick={toggle}>Сменить тему</Button>
        <Button variant='ghost' size='lg' onClick={toggle}>Сменить тему</Button>
        <Button variant='ghost' size='lg' loading={true} onClick={toggle}>Сменить тему</Button>
        <Main>
          <Catalog/>
        </Main>
      </ThemeProvider>
    </>
  )
}

export default App
