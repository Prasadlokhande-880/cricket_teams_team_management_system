import React, { useEffect, useState } from 'react';
import './OperationTeam.css';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS
import axios from 'axios';
import DispayTeams from './dispayTeams';


const OperationTeam = () => {
  const [displayData, functionDisplay] = useState(false);
  const [display2, functionDispaly2] = useState(false);
  const [display3, functionDispaly3] = useState(false);
  const [display4,functionDispaly4]=useState(false);
  const [_id, functionid] = useState('');
  const [get_data,functionget]=useState([]);
  const [display5,functionDispaly5]=useState(false);
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get('/getTeamByName', {
        params: {
          teamName: selectedTeam,
        },
      });
      setTeamData(response.data);
      console.log("this is the data",selectedTeam);
    } catch (error) {
      console.error(error);
      setTeamData(null);
    }

  };

  // this is the function for the geting all the data

  const findvalue=()=>{
    functionDispaly5(()=>{
      return true;
    })
  }

  useEffect(() => {
    axios.get('/getallInfo')
      .then(response => {
        functionget(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
      console.log(get_data);
      functionDisplay(true);
  }, [display5]);

  const functionDispalyNEW = () => {
    functionDispaly2((prev) => {
      return !prev;
    });
  };

  const functiocloseddelet = () => {
    functionDispaly3((prev) => {
      return !prev;
    });
  };

  const functiocloseddelet4 = () => {
    functionDispaly4((prev) => {
      return !prev;
    });
  };



  const [teamData, setTeamData] = useState({
    _id: '',
    teamName: '',
    city: '',
    imgUrl: '',
    homeGround: '',
    owner: '',
    captain: '',
    coach: '',
    foundedYear: '',
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTeamData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/saveTeam', teamData);
      setMessage(response.data.message);
      setTimeout(() => {
        functionDispaly2((pre) => {
          if (pre === true) {
            return false;
          }
        });
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage('An error occurred');

      setTeamData(()=>{
        return {
          _id: '',
          teamName: '',
          city: '',
          imgUrl: '',
          homeGround: '',
          owner: '',
          captain: '',
          coach: '',
          foundedYear: '',
        }
      })
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete('/deleteData', {
        data: { _id: _id },
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleIdChange = (event) => {
    functionid(event.target.value);
    console.log(_id);
  };

  return (
    <div>

      <div className='mainsaving'>
        <div className='displaysave' style={{ display: display2 ? 'block' : 'none' }}>
          <h2>NEW TEAM</h2>
          <form onSubmit={handleSubmit}>
          <div>
              <label>_id: </label>
              <input type='text' name='_id' value={teamData._id} onChange={handleInputChange} />
            </div>
          <div>
              <label>Team Name: </label>
              <input type='text' name='teamName' value={teamData.teamName} onChange={handleInputChange} />
            </div>
            <div>
              <label>City: </label>
              <input type='text' name='city' value={teamData.city} onChange={handleInputChange} />
            </div>
            <div>
              <label>img Url: </label>
              <input type='text' name='imgUrl' value={teamData.imgUrl} onChange={handleInputChange} />
            </div>
            <div>
              <label>Home Ground: </label>
              <input type='text' name='homeGround' value={teamData.homeGround} onChange={handleInputChange} />
            </div>
            <div>
              <label>owner: </label>
              <input type='text' name='owner' value={teamData.owner} onChange={handleInputChange} />
            </div>
            <div>
              <label>captain: </label>
              <input type='text' name='captain' value={teamData.captain} onChange={handleInputChange} />
            </div>
            <div>
              <label>coach: </label>
              <input type='text' name='coach' value={teamData.coach} onChange={handleInputChange} />
            </div>
            <div>
              <label>foundedYear: </label>
              <input type='number' name='foundedYear' value={teamData.foundedYear} onChange={handleInputChange} />
            </div>
            <button type='submit' className='Save'>
              Save Team
            </button>
          </form>
          <button className='Save close' style={{ background: 'red' }} onClick={functionDispalyNEW}>
            close
          </button>
          <p>{message}</p>
        </div>
      </div>

      <div className='mainsaving' style={{ display: display3 ? 'block' : 'none' }}>
        <div className='displaysave'>
          <h2>Delete Data</h2>
          <form onSubmit={handleDelete}>
            <div>
              <label>_id: </label>
              <input type='text' name='_id' value={_id} onChange={handleIdChange} />
            </div>
            <button type='submit' className='Save'>
              Delete Data
            </button>
          </form>
          <button className='Save close' style={{ background: 'red' }} onClick={functiocloseddelet}>
            close
          </button>
          <p>{message}</p>
        </div>
      </div>

      <div className='app'>
  <input
    type='text'
    placeholder='Enter team name'
    value={selectedTeam}
    onChange={(e) => setSelectedTeam(e.target.value)}
  />
  <button onClick={handleSearch}>Search</button>
</div>

<div>
  {selectedTeam[0]}
</div>

      <div className='OperationTeam'>
        <p className='OperationTeam_header'>Click on any of the following operations to perform...</p>
        <button onClick={findvalue}>ALL Teams</button>
        <button>Find Using Name</button>
        <button onClick={functiocloseddelet4}>Update</button>
        <button onClick={functiocloseddelet}>Delete</button>
        <button onClick={functionDispalyNEW}>New Team</button>
      </div>

      <div className='blockDispaly'>
        {displayData ? <DispayTeams teamData={get_data}/> : <p style={{ color: 'black' }}><i className="fa-solid fa-triangle-exclamation" style={{ color: 'black' }}></i>display output block</p>}

      </div>
    </div>
  );
};

export default OperationTeam;
