import './card.css'
import CompactedCard from './compactedCard/CompactedCard'
import { useState } from 'react'
import ExpandedCard from './expandedCard/ExpandedCard'
import { AnimateSharedLayout } from 'framer-motion'
const Card=(props)=>{
    const[expanded,setExpanded]=useState(false)
    console.log(props)
    return(
        <AnimateSharedLayout>
        { expanded ? <ExpandedCard data={props} setExpanded={()=>setExpanded(false)}/> : 
        <CompactedCard data={props} setExpanded={()=>setExpanded(true)}/> }
        </AnimateSharedLayout>
    )
}

export default Card