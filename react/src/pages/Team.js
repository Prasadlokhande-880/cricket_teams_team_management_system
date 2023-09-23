import React from 'react'
import Navbar from '../component/Navbar'
import OperationTeam from '../component/operationTeam'
import Footer from '../component/footer'


const Team = (props) => {
    console.log("team",props.name);
  return (
    <div>
      <Navbar name={props.name}/>
      <OperationTeam/>
      <Footer/>
    </div>
  )
}

export default Team
