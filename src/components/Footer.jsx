import {Link} from 'react-router-dom';
import LOGO from '../Images/LOGO.png';
import {FaLinkedin} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'



const Footer = () => {
  return (
    <footer>
        <div className="conatiner footer__container">
            <article className='footer__logo__social'>
                <Link to='/' >
                <img src={LOGO} alt="footer logo" className='LoGo'/>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus dolorum possimus tempora quo numquam, 
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com" target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://facebook.com" target='_blank' rel='noreferrer noopener'><FaFacebook/></a>
                    <a href="https://twitter.com" target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com" target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/planning">Plan</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/fagitAR">FagitAR</Link>
                <Link to="/blog">Blog</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/about">community</Link>
                <Link to="/planning">FAQS</Link>
                <Link to="/contact">Events</Link>
                <Link to="/fagitAR">Case studies</Link>
                <Link to="/blog">Blog</Link>
            </article>
            <article>
                <h4>Get In touch</h4>
                
                <Link to="/contact">Contact us</Link>
                <Link to="https://github.com/Stark-Mark-1/FAGITAR">support</Link>
                
            </article>
            
        </div>
        <div className="footer__copyright">
                <small>2023 EMO &copy; ALL rights are Reserved</small>
            </div>
    </footer>
  )
}

export default Footer