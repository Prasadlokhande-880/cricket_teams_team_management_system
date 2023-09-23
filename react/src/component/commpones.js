import React from 'react';
import './brand.css';


const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={process.env.PUBLIC_URL + '/img/google.png'} />
    </div>
    <div>
      <img src={process.env.PUBLIC_URL + '/img/atlassian.png'} />
    </div>
    <div>
      <img src={process.env.PUBLIC_URL + '/img/shopify.png'} />
    </div>
    <div>
      <img src={process.env.PUBLIC_URL + '/img/slack.png'} />
    </div>
    <div>
      <img src={process.env.PUBLIC_URL + '/img/dropbox.png'} />
    </div>
  </div>
);

export default Brand;
