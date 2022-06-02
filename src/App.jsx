import Profile from "components/Profile/profile"
import user from './components/Profile/user.json'
import Statistic from "./components/Statistic/statistic"
import data from "./components/Statistic/data.json"
import FriendList from "./components/FriendList/friendlist"
import friends from './components/FriendList/friends.json'
import TransactionHistory from "./components/TransactionHistory/transactionhstory"
import items from "./components/TransactionHistory/transactions.json"


export default function App() {
  return <div>
      <>
        <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    </>
    <>
      <Statistic
        stats={data}
      title='Upload stats'/>
    </>
    <>
      <FriendList
        friends={friends} />
    </>
    <>
      <TransactionHistory
        items={items} />
      </>
  </div>
  
  
}