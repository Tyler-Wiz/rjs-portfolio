import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { GlobalStyles} from './components/styled/Global';
import { lightTheme } from './components/ThemeSwitcher/LightTheme';
import { darkTheme } from './components/ThemeSwitcher/DarkTheme';
import { ThemeProvider } from 'styled-components'
import {ThemeSwitch} from '../src/components/ThemeSwitcher/ThemeSwitch.jsx'
import { ToggleTheme } from './components/ThemeSwitcher/ToggleTheme';
import { Portfolio } from './components/portfolio/Portfolio';
import { Contact } from './components/Contact';
import { Blog } from './components/blog/Blog';

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
          <Blog/>
          <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
