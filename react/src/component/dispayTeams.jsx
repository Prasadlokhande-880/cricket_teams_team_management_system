import React from 'react';
import './DispayTeams.css';


const DispayTeams = (props) => {
  const A = props.teamData;

  const data = A.map((item, index) => (
    <div className='subdivteam' key={index}>
        <div className='imgdiv_team'>
        <img src={item?.imgUrl}></img>
        </div>

        <section className='info_tema'>
        <p style={{ fontSize: '30px' }} className='team_name'>{item?.teamName}</p>
            <p>id:-{item?._id}</p>
            <p>city:-{item?.city}</p>
            <p>homeGround:-{item?.homeGround}</p>
            <p>owner:-{item?.owner}</p>
            <p>captain:-{item?.captain}</p>
            <p>coach:-{item?.coach}</p>
            <p>foundedYear:-{item?.foundedYear}</p>
        </section>
        </div>
  ));

  return (
    <div className='main_team'>
      {data}
    </div>
  );
}

export default DispayTeams;
