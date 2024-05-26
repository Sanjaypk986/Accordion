import React, { useState } from 'react'

const Accoridons = ({AccordionData}) => {

  // componet states
  const [accordionIds , setaccordionIds] = useState([])

  // Acordion function
  const handleAccordion = (newId)=>{
    setaccordionIds((prevId)=>{

      return accordionIds.includes(newId) ? accordionIds.filter((acc_id)=> acc_id !== newId)
      :[...prevId,newId]
    })
  }
  console.log(accordionIds);
  return (

    <div className='accordions'>
    
    {
      AccordionData && AccordionData.map(({id,title,desc}) =>(
        <div className='accordion'key={id}>
          <div className="accordian-title" onClick={()=>handleAccordion(id)}>
            <h3>{title}</h3>
          </div>
          {
            accordionIds?.map((accId ,index)=>(
              accId === id && (
                <div className="accordion-des" key={index}>
                <p>{desc}</p>
              </div> 
              )
            ))             

          }   
        </div>
      ))
    }
    
    </div>
    
  )
}

export default Accoridons

