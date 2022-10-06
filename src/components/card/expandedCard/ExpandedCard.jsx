import'./expandedCard.css'
import Chart from 'react-apexcharts'
import { motion } from 'framer-motion';
import {UilTimes} from '@iconscout/react-unicons'
const ExpandedCard=({data,setExpanded})=>{


    console.log("expanded cart data",data)
    const dataChart={
        options:{
            chart:{
                type:"area",
                height:"auto"
            },
            dropShadow:{
                enabled:false,
                enabledOnSeries:undefined,
                top:0,
                left:0,
                blur:3,
                color:"#000",
                opacity:0.35,
            },
            fill:{
                colors:["#fff"],
                type:"gradient"
            },
            dataLabels:{
                enabled:false,
            },
            stroke:{
                curve:"smooth",
                colors:["white"]
            },
            tooltip:{
                x:{
                    format:"dd/MM/yy HH:mm"
                },
            },
            grid:{
                    show:"true"
            },
            xaxis:{
                type:"datetime",
                categories:[
                    "2018-09-19T00:00:00:000Z",
                    "2018-09-19T01:30:00:000Z",
                    "2018-09-19T02:30:00:000Z",
                    "2018-09-19T03:30:00:000Z",
                    "2018-09-19T04:30:00:000Z",
                    "2018-09-19T05:30:00:000Z",
                    "2018-09-19T06:30:00:000Z",
                ]
            }

        }
    }
    return(
        <motion.div className='expandedcard'
        style={{
            background:data.color.backGround,
            boxShadow:data.color.boxShadow
        }}
        id="expandableCard" >
            <div style={{alignSelf:'flex-end',cursor:'pointer',color:'white'}}>
                <UilTimes onClick={setExpanded}/>
            </div>
            <span>{data.title}</span>
            <div className='chartContainer'>
                <Chart series={data.series} type='area' options={dataChart.options}/>
            </div>
            <span>Last 24 hours</span>
        </motion.div>
    )
}
export default ExpandedCard