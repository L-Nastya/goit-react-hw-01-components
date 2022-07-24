import PropTypes from 'prop-types';
import styled from 'styled-components';

const Statistics = ({title, stats})=>{
    return (
        <SectionStyle>
      { title && <SectionTitle>{title}</SectionTitle>}

  <StatList>
    {stats.map(({id, label, percentage})=>(
      <StatItem key={id} style={{backgroundColor:generateRandomColor()}}>
      <StatItemText>{label}</StatItemText>
      <span>{percentage}%</span>
    </StatItem>))}
  </StatList>
        </SectionStyle>)
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
        })).isRequired,
    title: PropTypes.string,
      }

export default Statistics;

const SectionStyle = styled.section`
background-color: whitesmoke;
width: 50%;
margin-left: 50px;
padding-top: 15px;
box-sizing: border-box;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
`;

const SectionTitle = styled.h2`
font-size: 28px;
text-align: center;
text-transform: uppercase;
margin: 0px 0px 10px 0px;
`;
const StatList = styled.ul`
list-style: none;
display: flex;
    padding-inline-start: 0px;
`;
const StatItem = styled.li`
display: flex;
flex-direction: column;
text-align: center;
font-size: 17px;
width: 100%;
padding: 15px 0px 15px 0px;
`;
const StatItemText = styled.span`
font-size: 24px;
margin-bottom: 8px;
`;

 function generateRandomColor() {
    let r = Math.round((Math.random() * 255)); //red 0 to 255
    let g = Math.round((Math.random() * 255)); //green 0 to 255
    let b = Math.round((Math.random() * 255)); //blue 0 to 255
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  };