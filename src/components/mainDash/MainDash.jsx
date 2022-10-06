import Cards from '../cards/Cards'
import './mainDash.css'
import {UilBars} from '@iconscout/react-unicons'
import BasicTable from '../table/Table'
const MainDash=()=>{
    return(
        <div className='mainDash'>
            <UilBars className="menuIcon"/>
            <h1 className='dashBoardHeading'>Dashboard</h1> 
            <Cards/> 
            <h1>Recent Orders</h1>
            <BasicTable />
        </div>
    )
}
export default MainDash