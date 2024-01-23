import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

const Signup = () => {
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(false)
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log('name :', name, 'value :', value);
        setForm(preValue => ({ ...preValue, [name]: value }))
    }
    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            setIsPending(true)
            const apiUrl = `${import.meta.env.VITE_BASE_URL}/api/v1/user/signup`
            const res = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            const data = await res.json()
            if (!res.ok) {
                toast.error(data.message)
            } else {
                setForm({})
                toast.success(data.message)
                navigate('/dashboard')
            }
        } catch (err) {
            toast.error(err)
        } finally {
            setIsPending(false)
        }

    }
    return (
        <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-20">
            <div className="w-96 bg-white rounded-lg shadow-md p-5">
                <form onSubmit={(e) => handleSignup(e)}>
                    <h1 className="text-2xl text-black font-semibold text-center" >Signup</h1>
                    <p className="text-sm text-gray-600 text-center leading-5">Enter Your Information to create an account</p>
                    <div className="mb-5">
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 ">Your firstName</label>
                        <input type="text" id="firstName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none focus-within:ring-1 " placeholder="Navin" required
                            name="firstName"
                            value={form?.firstName}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">Your lastName</label>
                        <input type="text" id="lastName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none focus-within:ring-1 " placeholder="Kumar" required
                            name="lastName"
                            value={form?.lastName}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none focus-within:ring-1 " placeholder="name@flowbite.com" required
                            name="username"
                            value={form?.username}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                        <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none focus-within:ring-1 " placeholder="*********" required
                            name="password"
                            value={form?.password}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <button type='submit' className={`w-full py-2 rounded-lg bg-black text-white ${isPending ? 'animate-pulse' : null}`}>
                        Sign Up
                    </button>
                </form>
                <h3 className="text-sm text-center mt-2">Already have and account ? <span><Link to={'/signin'} > Login</Link></span></h3>
            </div>
        </div>
    )
}

export default Signup