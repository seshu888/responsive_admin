import CustomerReview from './customerReview/CustomerReview'
import './rightside.css'
import Updates from './updates/Updates'
const RightSide=()=>{
    return(
        <div className='rightSide'>
          <div className='updatesPage'>
            <h3>Updates</h3>
            <Updates/>
          </div> 
          <div className='customerReview'>
            <h3>Customer Review</h3>
            <div>
                <CustomerReview/>
            </div>
          </div>
        </div>
    )
}
export default RightSide