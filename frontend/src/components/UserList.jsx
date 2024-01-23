import { useEffect, useState } from "react"
import UserCard from "./UserCard"

const UserList = () => {
    const [search, setSearch] = useState('')
    const [userList, setUserList] = useState([])
    useEffect(() => {
        const getBalance = async (url) => {
            const res = await fetch(url)
            const data = await res.json()
            setUserList(data.users)
        }
        const apiUrl = `${import.meta.env.VITE_BASE_URL}/api/v1/user/bulk?filter=${search}`
        getBalance(apiUrl)
    }, [search])
    return (
        <div>
            <h1 className='text-2xl font-medium'>Users</h1>
            <input type="search" name="search" onChange={(e) => setSearch(e.target.value)} className="w-full py-2 px-4 outline-none focus-within:ring-1 rounded-lg my-5 border" placeholder="Search Users" />
            <div className="flex flex-col space-y-2">
                {
                    userList?.map((user, index) => (
                        <UserCard key={user?._id} data={user} index={index} />
                    ))
                }
            </div>

        </div>
    )
}

export default UserList