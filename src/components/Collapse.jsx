import { useState } from 'react'
import '../styles/collapse.scss'
import arrow from '../assets/collapseArrow.png'

function Collapse( {title, content, collapseClass, collapseType}) {
    const [active, setActive] = useState('closed')
    const Collapsed = e => {
        active === 'closed' ? setActive('open') : setActive('closed')
    }
    // const equipmentArray = content.split(',')
    // let equipmentString = content.toString()
    // console.log("Dimension de content : " + equipmentString)

        
    // if (collapseType === "list") {
    //     return (
    //         <section className={`${collapseClass}collapse`}>
    //             <div className="collapse__title">
    //                 <h2>{title}</h2>
    //                 <img src={arrow} alt="" className = {`collapse__icon collapse__icon--${active}`} onClick={Collapsed} />
    //             </div>
    //             <div className={`collapse__content--${active}`}>                   
    //                 <ul>
    //                     {content.map((item) =>
    //                         <li key={item} className = "collapse__item">{item}</li>
    //                     )}
    //                 </ul>                   
    //             </div>
    //         </section>
    //     )
    //   } else {
    //     return (
    //         <section className={`${collapseClass}collapse`}>
    //             <div className="collapse__title">
    //                 <h2>{title}</h2>
    //                 <img src={arrow} alt="" className = {`collapse__icon collapse__icon--${active}`} onClick={Collapsed} />
    //             </div>
    //             <div className={`collapse__content--${active}`}>                   
    //                 <p>{content}</p>                   
    //             </div>
    //         </section>
    //     );
    // }
    // }
       
    return (
        <section className={`${collapseClass}collapse`}>
            <div className="collapse__title">
                <h2>{title}</h2>
                <img src={arrow} alt="" className = {`collapse__icon collapse__icon--${active}`} onClick={Collapsed} />
            </div>
            <div className={`collapse__content--${active}`}>
                {collapseType === "list" ? (
                <ul>
                    {content.map((item) =>
                        <li key={item} className = "collapse__item">{item}</li>
                    )}
                </ul>
                ):(
                <p>{content}</p>
                )}
            </div>
        </section>
      );
}

export default Collapse
