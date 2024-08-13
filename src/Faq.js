import React from 'react'
import { Questions } from './data/data'
import { useState } from 'react';

export default function Faq() {
  
  let [currentID,setCurrentID] = useState(0)
  let items = Questions.map((val,i)=>{
  let itemData = {val,currentID,setCurrentID}

    return(
      <FaqItem itemData = {itemData} key={i}/>
    )
  })
  
  return (
    <div>
      <h1 className='text-4xl font-bold m-5'>Frequently Asked Questions (FAQs)</h1>
        <div className='outerDiv'>
          {items}
        </div>
    </div>
  )
}

function FaqItem({itemData}){

  let {val,currentID,setCurrentID} = itemData;
  let decideVal = () =>{
    if (currentID===(val.ID)){
      setCurrentID(0)
    }
    else{
      setCurrentID(val.ID)
    }
  }
  console.log(currentID)
    return(
      <div className='faqItem'>
        <h2 onClick={decideVal} className='text-xl font-medium '>
          {val.Question}
        </h2>
        <p className = {currentID===val.ID ? "showAns" : "" }>
          {val.Answer}
        </p>
    </div>
  )
}
