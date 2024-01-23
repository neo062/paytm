import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav className='flex flex-row justify-between py-5 px-10 border-b'>
                <div>
                    <Link to={'/'} className='text-3xl text-black font-semibold'>Payment App</Link>
                </div>
                <div className='flex space-x-5'>
                    <div className=' flex flex-row justify-center items-center space-x-5'>
                        <div className='text-base text-gray-700 hover:text-gray-900 p-2'>
                            <Link to='/signin'>Signin</Link>
                        </div>
                        <div className='text-base text-gray-700 hover:text-gray-900 p-2'>
                            <Link to='/signup'>Signup</Link>
                        </div>
                        <div className='text-base text-gray-700 hover:text-gray-900 p-2'>
                            <Link to='/dashboard'>Dashboard</Link>
                        </div>
                    </div>
                    <div className='flex justify-center items-center space-x-2'>

                        <div>
                            Hello User
                        </div>
                        <div className='text-2xl text-gray-700 w-10 h-10 flex justify-center items-center rounded-full bg-gray-200'>
                            U
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar