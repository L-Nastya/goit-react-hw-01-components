import Sections from "./Sections";
import user from 'data/user.json'
import data from 'data/data.json'
import friends from 'data/friends.json'
import transactions from 'data/transactions.json'
import Profile from "../components/Profile/Profile";
import Statistics from "../components/Statistics/Statistics";
import FriendList from "../components/FriendList/FriendList"
import TransactionHistory from "../components/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Sections title="Профиль социальной сети">
       <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
/>
      </Sections>
      <Sections title="Секция статистики">
        <Statistics stats={data} title ="Upload stats"/>
      </Sections>
      <Sections title="Список друзей">
        <FriendList friends={friends} />
      </Sections>
      <Sections title="История транзакций">
        <TransactionHistory items={transactions} />
        </Sections>
    </div>
  );
};
