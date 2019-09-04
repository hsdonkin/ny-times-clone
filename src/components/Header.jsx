import React from 'react';
import { Link } from 'react-router-dom';
import BriefBar from './BriefBar';
import HeaderLink from './HeaderLink'

const linkTextArray = ["World", "USA", "Local", "Weather", "Sports", "Arts", "Entertainment", "Opinion"]

function Header (){
  return(
    <div className="header">
      <h1>NY Times</h1>
      <ul>
        {linkTextArray.map( (linkText, index) =>
          <HeaderLink
            name = {linkText}
            link = {linkText.toLowerCase()}
            key = {index}
          />
        )}
      </ul>
    </div>
  );
}

export default Header;
