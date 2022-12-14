import React from 'react'
import './Statistics.css'
const Statistics = () => {
  return (
    <div className='statisticmain'>
     <h1 style={{textAlign:'center',fontSize:'40px',fontWeight:'500',marginLeft:'7%',marginBottom:'40px',paddingTop:"30px"}}> Statistics </h1>
    <div className="stat">
            <div className="individualStat">
                       <div>1200+</div>
                        <div><br/><h3>Hours</h3>of Coding</div>
            </div>
           <div className="individualStat">
                      <div >600+</div>
                     <div><br/><h3>DSA</h3>Problems</div>
           </div>
            <div className="individualStat">
                    <div >10+</div>
                       <div><br/><h3>Projects</h3>Done</div>
            </div>
            <div className="individualStat" id="hours">
                         <div>100+</div>
                          <div><br/><h3>Hours</h3> of Soft Skills Sessions</div>
            </div>
       </div>
    </div>
  )
}
export default Statistics