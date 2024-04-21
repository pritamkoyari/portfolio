
import styles from "./App.module.css";
import { Hero } from "./componentes/Hero/Hero";
import { Navbar } from './componentes/navbar/Navbar';

function App() {


  return (
    <>
    <div className={styles.App} >
      <Navbar/>
      <Hero/>
    </div>
    
    </>
  )
}

export default App
