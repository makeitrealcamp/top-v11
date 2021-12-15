import React from 'react';

class ProfileCard extends React.Component {
  render() {
    return (
      <div className='profile-card'>
        <div className='image'>
          <img src='https://via.placeholder.com/480.png' alt='' />
        </div>
        <div className='name'>Name Surname</div>
        <p>Lorem ipsum dolor sitamet, stphen hawkin so adipisicing elit. Ratione disuja doloremque reiciendi nemo.</p>
        <div className='btn-row'>
          <button>Read More</button>
          <button>Contact</button>
        </div>
      </div>
    );
  }
}

export default ProfileCard;

