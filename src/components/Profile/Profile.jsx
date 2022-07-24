import PropTypes from 'prop-types';
import styled from 'styled-components';

const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
  return (
      <ProfileStyle>
      <DescriptionStyle>
    <img src={avatar} alt="User avatar" width="90px"/>
    <NameStyle >{username}</NameStyle >
    <TageStyle>{tag}</TageStyle>
    <LocationStyle>{location}</LocationStyle>
    </DescriptionStyle>     
    <StatStyle>
    <StatItemStyle >
      <StatTextStyle >Followers</StatTextStyle>
      <span >{followers}</span>
    </StatItemStyle >
    <StatItemStyle >
      <StatTextStyle >Views</StatTextStyle>
      <span >{views}</span>
    </StatItemStyle >
    <StatItemStyle >
      <StatTextStyle>Likes</StatTextStyle>
      <span >{likes}</span>
    </StatItemStyle >
  </StatStyle>
    </ProfileStyle>
    )
    
}
  
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
   likes: PropTypes.number.isRequired,
}

export default Profile;

const ProfileStyle = styled.div`
background-color: grey;
width: 25%;
margin-left: 50px;
box-sizing: border-box;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;
`;

const DescriptionStyle = styled.div`
text-align: center;
padding: 15px 15px 0px 15px;
`;

const NameStyle = styled.p`
font-weight: bold;
font-size: 21px;
margin: 10px 0px 0px 0px;
`;
const TageStyle = styled.p`
font-size: 15px;
margin: 10px 0px 0px 0px;
color: rgb(167, 165, 165);
`;
const LocationStyle = styled.p`
font-size: 17px;
margin: 10px 0px 0px 0px;
color: rgb(167, 165, 165);
`;

const StatStyle = styled.ul`
margin: 10px 0px 0px 0px;
padding: 15px 15px;
background-color: rgba(250, 109, 109, 0.849);
list-style: none;
display: flex;
justify-content: center
`;
const StatItemStyle = styled.li`
display: flex;
flex-direction: column;
margin-right: 30px;
text-align: center;
font-size: 17px;
`;
const StatTextStyle = styled.span`
margin-bottom:8px;
`;