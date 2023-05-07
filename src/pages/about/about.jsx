import './aboutStyle.css'
import Header from '../../components/Header';
import HeaderImage from '../../Images/About_cover.png';
import StoryImage from '../../Images/Emo-cover.png'
import VisionImage from '../../Images/vision.jpg'
import MissionImage from '../../Images/Mission.png'
import Footer from '../../components/Footer';
const about = () => {
  return (
    <>
      <Header title="About us" image={HeaderImage}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sint esse aliquid vero consequuntur atque quos ratione reiciendis nesciunt, odio reprehenderit libero dignissimos adipisci laudantium, enim perspiciatis a inventore itaque.
      </Header>
      <section className='about__story'>
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="" className='section-image' />
          </div>
          <div className="about__section-content">
            <h1>Our story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam qui exercitationem, voluptatibus aliquam commodi pariatur nesciunt quae error eum, facere voluptates quos ullam temporibus aperiam dolor provident, placeat est?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt explicabo eaque, magni alias cupiditate adipisci quam a rerum in nisi, eos quaerat? Asperiores reiciendis illum ut quos magnam iusto nulla.
            </p>
            <p>
            Asperiores reiciendis illum ut quos magnam iusto nulla.
            </p>
          </div>
        </div>
      </section>
      <section className='about__vision'>
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam qui exercitationem, voluptatibus aliquam commodi pariatur nesciunt quae error eum, facere voluptates quos ullam temporibus aperiam dolor provident, placeat est?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt explicabo eaque, magni alias cupiditate adipisci quam a rerum in nisi, eos quaerat? Asperiores reiciendis illum ut quos magnam iusto nulla.
            </p>
           
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="" className='section-image' />
          </div>
        </div>
      </section>
      <section className='about__mission'>
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="" className='section-image' />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam qui exercitationem, voluptatibus aliquam commodi pariatur nesciunt quae error eum, facere voluptates quos ullam temporibus aperiam dolor provident, placeat est?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt explicabo eaque, magni alias cupiditate adipisci quam a rerum in nisi, eos quaerat? Asperiores reiciendis illum ut quos magnam iusto nulla.
            </p>
            
          </div>
        </div>
      </section>
      <Footer/>

    </>
  )
}

export default about;
