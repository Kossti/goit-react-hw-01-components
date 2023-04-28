import transactions from "./TransactionHistory/transactions.json"
import friends from "./FriendList/friends.json"
import data from "./Statistics/data.json"
import user from "./Profile/user.json"

import TransactionHistory from './TransactionHistory/TransactionHistory'
import FriendList from './FriendList/FriendsList'
import Statistics from "./Statistics/Statistics"
import Profile from "./Profile/Profile";



export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        margin: 'auto',
        padding: 20
      }}
    >
      <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
      />

      <Statistics
        title="Upload stats"
        stats={data} />
      
      <FriendList
        friends={friends} />
      
      <TransactionHistory
        items={transactions} />

    </div>
  );
};
