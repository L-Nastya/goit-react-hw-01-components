import PropTypes from 'prop-types';
import styled from 'styled-components';


const FriendListItem = ({avatar, name, isOnline})=>{
    return (
        <FriendListItemStyle >
            <FriendIcon isOnline={isOnline}>
            </FriendIcon>
        <img src={avatar} alt="User avatar" width="60" />
        <FriendName >{name}</FriendName>
        </FriendListItemStyle>
    )
}

FriendListItem.propTypes = {
  
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
          id: PropTypes.number.isRequired,
      }

export default FriendListItem;

const FriendListItemStyle = styled.li`
background-color: rgb(128, 128, 197);
width: 25%;
 display: flex;
padding: 15px 15px;
 margin-bottom: 15px;
box-sizing: border-box;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px;

`;
export const FriendIcon = styled.span`
::after{
    content: '';
   display: inline-block;
   width: 15px;
   height: 15px;
   -moz-border-radius: 7.5px;
   -webkit-border-radius: 7.5px;
   border-radius: 7.5px;
   margin-right: 12px;
   margin-top: 19px;
   background-color: ${({isOnline})=> (isOnline ? "green": "red")};
}
`;
const FriendName = styled.p`
margin-left: 8px;
font-size: 20px;
`;

