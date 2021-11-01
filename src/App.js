import './App.css';
import Profile from './components/Profile/Profile';
import user from './db/user.json';
import StatisticsList from './components/Statistics/Statistics'
import statisticsData from './db/statisticsData.json'
import FriendList from './components/FriendList/FriendList'
import friends from './db/friends.json'
import HistoryOfTransactions from './components/HistoryOfTransactions/HistoryOfTransactions'
import transactions from './db/transactions.json'

export default function App() {
  return (
    <>
      <Profile 
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList
        title="Upload stats"
        stats={statisticsData}
      />
      <StatisticsList
        stats={statisticsData}
      />
      <FriendList
        friends={friends}
      />
      <HistoryOfTransactions
         items={transactions}
      />
      </>
  );
}
