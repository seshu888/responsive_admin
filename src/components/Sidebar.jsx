import './sidebar.css'
import logo from '../components/imgs/logo.png'
import { sidebarData } from './data/Data'
import {UilSignOutAlt} from '@iconscout/react-unicons'
import { useState } from 'react'
const Sidebar=()=>{
    const[selected,setSelected]=useState(0)
    return(
        <div className='sidebar'>
            <div className='logo'>
                <img src={logo} alt="avatar" className='logoImg'/>
                <span className='logoTitle'>Sh<span>o</span>p</span>
            </div>
            <div className='menu'>
                {
                    sidebarData.map((item,index)=>{
                        return <div className={selected === index?'menuItem active':"menuItem"} 
                        onClick={()=>setSelected(index)}
                        key={index}>
                                    <div>{item.icon}</div>
                                    <span>{item.heading}</span>
                                </div>
                    })
                }
            </div>
            <div className='singOut'>
                <div><UilSignOutAlt/></div>
            </div>
        </div>
    )
}
export default Sidebar