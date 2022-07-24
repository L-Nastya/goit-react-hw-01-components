import PropTypes from 'prop-types';
import { Fragment } from 'react';
import styled from 'styled-components';


function Sections({ title, children }) {
  
    return (
      <Fragment>
      <TitleStyle>{title}</TitleStyle>
        {children}      
       </Fragment>
    )
 
}

Sections.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Sections;

const TitleStyle = styled.h2`
font-size: 30px;
margin-left: 50px;
`;
