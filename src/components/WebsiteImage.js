import React from 'react';

function WebsiteImage() {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + './WebsiteScreenshot.png'} alt="WebsiteImage" />
    </div>
  );
}

export default WebsiteImage;
