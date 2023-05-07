import './Fagit-ArStyle.css'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderImage from '../../Images/FagitAR.png';
import WebAr from '../../Images/webAR.png';
import {AiOutlineGithub} from 'react-icons/ai'
import {RxNotionLogo} from 'react-icons/rx'
const FagitarAR = () => {
  return (
    <>
     <Header title="" image={HeaderImage}/>
     <section className='about__story'>
        <div className="container about__story-container">
        <div className="about__section-image">
            <img src={WebAr} alt="" className='section-image' />
          </div>
          <div className="about__section-content">
            <h1>FagitAR</h1>
           <p>
           Say goodbye to the disappointment of blindly ordering food online and hello to a new era of food ordering with Fagit-ar.
           </p>
           <ul>
            <li>
            Fagit-ar allows customers to see and experience every dish before placing an order.
            </li>
            <li>
            Its Augmented Reality feature enables users to explore every meal in stunning detail and take a virtual bite.
            </li>
            <li>
            Fagit-ar empowers customers to order smarter, faster, and tastier.
            </li>
           </ul>
          </div>
        </div>
      </section>
      <section className='contact'>
      <div className="contact__container container">
        <div className="contact__wrapper">
          <a href="https://github.com/Stark-Mark-1/FAGITAR" target='_blank' rel='noreferrer noopener'><AiOutlineGithub/></a>
          <a href="https://classy-comte-ee1.notion.site/Fagit-AR-df4fe086001c41569813e342e6b3c752" target='_blank' rel='noreferrer noopener'><RxNotionLogo/></a>
          
        </div>
      </div>

      </section>

      
    <Footer/>
    </>

  )
}

export default FagitarAR
