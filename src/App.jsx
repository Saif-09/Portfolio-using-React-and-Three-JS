import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas, Navbar, FloatingSocialIcons} from './components';


const App = () => {
  const isNotMobile = window.innerWidth > 500;

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <FloatingSocialIcons />
        <About />
        <Experience />
        <Tech />
        {isNotMobile ? <Works /> : ( <div></div>)}
        {/* <Feedbacks /> */}
        {/* <MemoryGame /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
