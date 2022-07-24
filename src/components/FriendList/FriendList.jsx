import FriendListItem from "../FriendList/FriendListItem";
import styled from 'styled-components';
export {FriendIcon} from "../FriendList/FriendListItem"
const FriendList = ({friends})=>{
    return (<FriendListStyle>
      {friends.map(({avatar, name, isOnline, id})=>(
        <FriendListItem key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
        id={id}
        />
      ))
   
   }
    </FriendListStyle>)
}
export default FriendList;
  
const FriendListStyle = styled.ul`
margin-left: 50px;
list-style: none;

`;