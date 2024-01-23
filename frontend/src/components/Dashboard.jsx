import ShowBalance from "./ShowBalance"
import UserList from "./UserList"
const Dashboard = () => {
    return (
        <div className="p-5">
            <ShowBalance />
            <UserList />
        </div>
    )
}

export default Dashboard