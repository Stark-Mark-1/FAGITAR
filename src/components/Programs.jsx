import React from 'react'
import SectionHead from './SectionHead'
import {programs} from '../Data.js'
import {FaCrown} from 'react-icons/fa'
import Card from '../UI/card'
import {Link} from 'react-router-dom'
import {MdOutlineExpandMore} from 'react-icons/md'
const Programs = () => {
  return (
    <section className='programs'>
      <div className="container programs__container">
        <SectionHead icon={<FaCrown/>} title="Programs"/>
      </div>
      <div className="programs__wrapper">
        {
          programs.map(({id,icon,title,info,path})=>{
            return(
            <Card className="programs__program" key={id}>
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{info}</small>
                <Link to={path} className='btn sm'>Learn more <MdOutlineExpandMore />  </Link>

            </Card>)
          })
        }
      </div>

    </section>
  )
}

export default Programs;