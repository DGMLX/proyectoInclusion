import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { AppRouter } from './router/AppRouter'

function App() {

  return (
      <>
        <Navbar/>
          <AppRouter/>
        <Footer/>
      </>
  )
}

export default App
