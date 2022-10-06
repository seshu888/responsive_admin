import './compactedCard.css'
import { motion } from 'framer-motion';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar } from 'react-circular-progressbar'

const CompactedCard=({data,setExpanded})=>{

    return(    <motion.div className='CompactCard' 
    
    style={
        {   background: data.color.backGround,
            boxShadow:data.color.boxShadow
        }
        
         }
         id="expandableCard"
         onClick={setExpanded}>
        <div className='radialBar'>
            <CircularProgressbar value={data.barValue} text={`${data.barValue}%`} className="CircularProgressbar"/>
        </div>
        <div className='detail'>
            <span>{data.png}</span>
            <span>${data.value}</span>
            <span>Last 24 hours</span>
        </div>
    </motion.div>)
}
export default CompactedCard