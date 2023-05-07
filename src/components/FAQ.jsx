import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
import {useState} from 'react'
const FAQ = ({question,answer}) => {
  const [isAnswer,setAnswer]=useState(false);
  return (
    <article className="faq" onClick={()=>setAnswer(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            
        </div>
        <button className="faq__icon">
                {
                  isAnswer ? <AiOutlineMinus/>:<AiOutlinePlus/>
                }
        </button>
            {
              isAnswer &&<p>{answer}</p>
               
            }
    </article>
  )
}

export default FAQ