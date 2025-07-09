
import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'

const Wrapper = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Wrapper
