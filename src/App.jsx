import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Programs from './components/Programs'
import Impact from './components/Impact'
import Events from './components/Events'
import Founder from './components/Founder'
import Gallery from './components/Gallery'
import Partner from './components/Partner'
import Footer from './components/Footer'

// Future imports: Gallery, Footer...

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-liora-burgundy selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Programs />
        <Impact />
        <Events />
        <Founder />
        <Gallery/>
        <Partner/>
      </main>
      <Footer/>
    </div>
  )
}

export default App