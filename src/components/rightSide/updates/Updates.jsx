import './updates.css'
import { updatesData } from '../../data/Data'
const Updates=()=>{
    return(
        <div className='updates'>
            {updatesData.map((item,id)=>{

                return <div className='updatesContainer'>
                            <img src={item.img} alt="avatar" className='updatesprofileimage'/>
                            <div>
                                <div className='order'>
                                    <span className='name'>{item.name}</span>
                                    <span>{item.order}</span>
                                </div>
                            </div>
                            <div className='time'>
                                <span >{item.time}</span>
                            </div>
                        </div>
            })
            }
        </div>
    )
}
export default Updates