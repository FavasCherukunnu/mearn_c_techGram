import React from 'react';

const ProfileComponent = ({ pictureUrl, name }) => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={'https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg'} alt="Profile Picture" style={{ maxWidth: '200px' }} />
      <h2>{'Mohammed Favas'}</h2>
    </div>
  );
};

export default ProfileComponent;

