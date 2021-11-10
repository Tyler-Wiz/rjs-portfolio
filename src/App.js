import { Hero } from './components/hero/Hero';
import './assets/css/main/styles.css'
import { About } from './components/about/About';
import { GlobalStyles } from './components/styled/Global';

function App() {
  return (
    <div>
      <GlobalStyles/>
        <Hero />
        <About/>
    </div>
  );
}

export default App;
