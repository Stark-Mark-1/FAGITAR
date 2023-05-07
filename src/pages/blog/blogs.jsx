import './blogStyle.css'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import HeaderImage from '../../Images/Blog_cover.png';
import {DiMongodb} from 'react-icons/di'
import BlogImage from '../../Images/Blog1.png'
const blogs = () => {
  return (
    <>
    <Header title="BLOG" image={HeaderImage}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint esse aliquid vero consequuntur atque quos ratione reiciendis nesciunt, odio reprehenderit libero dignissimos adipisci laudantium, enim perspiciatis a inventore itaque.
      </Header>
     <section className='about__vision'>
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h1>MongoDB<DiMongodb color='green'/></h1>
            
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam qui exercitationem, voluptatibus aliquam commodi pariatur nesciunt quae error eum, facere voluptates quos ullam temporibus aperiam dolor provident, placeat est?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt explicabo eaque, magni alias cupiditate adipisci quam a rerum in nisi, eos quaerat? Asperiores reiciendis illum ut quos magnam iusto nulla.
            </p>
           
          </div>
          <div className="about__section-image">
            <img src={BlogImage} alt="" className='section-image' />
          </div>
        </div>
      </section>
    <Footer/>

    </>
  )
}

export default blogs
