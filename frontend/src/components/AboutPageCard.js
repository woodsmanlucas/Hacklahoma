import * as React from 'react';
import PageCard from '../components/PageCard'
import Solar from "../Images/Solar.jpg"


export default function AboutPageCard(props) {
  const textcontent =`Lorem ipsum dolor sit amet, adhuc homero scribentur his id, ad sint animal vix. 
  Quas ridens eum eu, no vide legimus usu. Ea natum reque animal qui. His ex virtute appareat 
  pertinacia. Has facilisis dissentiunt id, id labores invenire iudicabit eum. 
  Pro id quando partiendo, simul temporibus vix ut, an erant nobis sed. Sale lorem ea cum. 
  Sed te doctus commune accumsan, euripidis constituam ne pro. Ludus mandamus eum no, soluta 
  mnesarchum an pro. Ad labore timeam principes vis, eos ad augue delicata signiferumque. 
  Ea eum luptatum adolescens. Eu eos duis tota volumus, no qui doming virtute ;`
  return (
    <PageCard
    heading= 'Aoout Us'
    text= {textcontent}
    image={Solar}
    button= 'Chat about this'
    left= '30%'
    width= '60%'
 
    
    />
  )
}

