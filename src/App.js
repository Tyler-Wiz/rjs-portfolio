import { Hero } from './components/hero/Hero';
import './assets/css/main/styles.css'
import { About } from './components/about/About';
import { GlobalStyles, lightTheme, darkTheme } from './components/styled/Global';
import { ThemeProvider } from 'styled-components'
import {ThemeSwitch} from '../src/components/ThemeSwitcher/ThemeSwitch.jsx'
import { ToggleTheme } from './components/ThemeSwitcher/ToggleTheme';
import { Portfolio } from './components/portfolio/Portfolio';
import { Contact } from './components/Contact';

function App() {
  const [theme, toggleTheme ] = ThemeSwitch()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles/>
         <ToggleTheme theme={theme}  toggleTheme={toggleTheme}/>
          <Hero />
          <About/>
          <Portfolio/>
          <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
