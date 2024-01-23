import React from 'react'

const UserCard = () => {
    return (
        <div className='flex justify-between'>
            <div className='text-xl text-gray-700 w-10 h-10 flex justify-center items-center rounded-full bg-gray-200'>
                U {1}
            </div>
            <button type='button' className='py-2 px-4 rounded-lg bg-black text-white'>
                Send Money
            </button>
        </div>
    )
}

export default UserCard