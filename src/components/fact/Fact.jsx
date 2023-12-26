import './fact.css'
import {fact} from '../../data'
const Fact = () => {
  return (
    <div className="fact container">
        <div className="fact__container">
            {/* <div> */}
                {
                    fact.map(({id, img, name, info}) => {
                        return (
                            <div key={id} className='fact-card'>
                                <img src={img} alt="Image" />
                                <h4>{name}</h4>
                                <small>{info}</small>
                            </div>
                        )
                    })
                }
            {/* </div> */}
        </div>
    </div>
  )
}

export default Fact