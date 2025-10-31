import Header from '../components/header/header'
import Hero from '../components/about/about'
import Workflow from '../components/Flow/Workflow'
import WhyItMatters from '../components/WhyItMatters/WhyItMatters'
//import SupportedNetworks from './components/SupportedNetworks/SupportedNetworks'
import DemoProduct from '../components/demo/demo'
import CodePlayground from '../components/Code/Code'
import HighlightSection from '../components/Highlight/Highlight'
import Footer from '../components/Footer/Footer'


function App() {

  return (
    <div className="bg-black">
      <div className="bg-black text-gray-900 min-h-screen transition-colors duration-300">
        <Header />
        <Hero />
        <Workflow />
        <WhyItMatters />
        {/* <SupportedNetworks /> */}
        <DemoProduct />
        <CodePlayground />
        <HighlightSection />
        <Footer />
      </div>
    </div>
  )
}

export default App
