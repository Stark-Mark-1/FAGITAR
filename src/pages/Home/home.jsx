import './homeStyle.css'
import Header from '../../components/MainHeader';
import Program from '../../components/Programs';
import Faq from '../../components/FAQs';
import Testimonial from '../../components/Testimonial';
import Footer from '../../components/Footer';
const home = () => {
  return (
    <>
    <Header/>
    <Program/>
    <Faq/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default home;
