import React from 'react'

const UserCard = ({ data, index }) => {
    const { _id, firstName, lastName } = data
    return (
        <div className='flex justify-between'>
            <div className='flex justify-center items-center'>
                <div className='text-xl text-gray-700 w-12 h-12 flex justify-center items-center rounded-full bg-gray-200'>
                    U {index + 1}

                </div>
                <span className='ml-2'>{firstName + ' ' + lastName}</span>
            </div>

            <button type='button' className='py-2 px-4 rounded-lg bg-black text-white'>
                Send Money
            </button>
        </div>
    )
}

export default UserCard