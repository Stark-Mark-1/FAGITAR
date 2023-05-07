import './contactStyle.css'
import React from 'react'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderImage from '../../Images/About_cover.png';
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
const contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, illo, suscipit architecto veniam odit!
      </Header>
      <section className='contact'>
      <div className="contact__container container">
        <div className="contact__wrapper">
          <a href="mailto:201b049@juetguna.in" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="http://m.me/ernest_acheiver" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://wa.me/917355446956" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp  /></a>
        </div>
      </div>

      </section>




      <Footer/>

    </>
  )
}

export default contact