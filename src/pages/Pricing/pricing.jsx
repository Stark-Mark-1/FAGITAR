import './pricingStyle.css'
import Footer from '../../components/Footer';
import Header from '../../components/Header'
import HeaderImage from '../../Images/About_cover.png'
import Card from '../../UI/card'
import {plans} from '../../Data'
const pricing = () => {
  return (
    <>
      <Header title="Membership plans" imgae={HeaderImage}>
           sint deserunt eveniet exercitationem tempora blanditiis suscipit sed rerum veritatis ad accusamus neque cum animi.
      </Header>
      <section className='plans'>
        <div className="container plans__container">
          {
            plans.map(({id,name,desc,price,features})=>{
              return <Card key={id} className='plan'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>&#8377;{`${price}`}</h1><h2>/month</h2>
              <h4>Features</h4>
              {
                features.map(({feature,available},index)=>{
                  return <p key={index} className={!available ? 'disabled':''}>
                  {feature}

                  </p>
                })
              }
              <button className='btn lg'>Choose plan</button>

              </Card>
            })
          }
        </div>
      </section>
    <Footer/>

    </>
  )
}

export default pricing
