import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function HeaderLink (props){
  return(
    <React.Fragment>
      <Link to={props.link}>{props.name}</Link>
    </React.Fragment>
  );
}

HeaderLink.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string
}
export default HeaderLink;
