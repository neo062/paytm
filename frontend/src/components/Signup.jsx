import { useState } from "react"
import { Link } from "react-router-dom"

const Signup = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    })

    return (
        <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-20">
            <div className="w-96 bg-white rounded-lg shadow-md p-5">
                <form>
                    <h1 className="text-2xl text-black font-semibold text-center" >Signup</h1>
                    <p className="text-muted text-center">Enter Your Information to create an account</p>
                    <div className="mb-5">
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 ">Your firstName</label>
                        <input type="text" id="firstName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none focus-within:ring-1 " placeholder="Navin" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">Your lastName</label>
                        <input type="text" id="lastName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none focus-within:ring-1 " placeholder="Kumar" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none focus-within:ring-1 " placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none focus-within:ring-1 " placeholder="*********" required />
                    </div>
                    <button type='submit' className="w-full py-2 rounded-lg bg-black text-white">
                        Sign Up
                    </button>
                </form>
                <h3 className="text-sm text-center">Already have and account ? <span><Link to={'/signin'} > Login</Link></span></h3>
            </div>
        </div>
    )
}

export default Signup