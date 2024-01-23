import { useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
const Signin = () => {
    const navigate = useNavigate();
    const [isPending, setIsPending] = useState(false)
    const [form, setForm] = useState({
        username: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(preValue => ({ ...preValue, [name]: value }))
    }
    const handleSignup = async (e) => {
        e.preventDefault()
        try {
            setIsPending(true)
            const apiUrl = `${import.meta.env.VITE_BASE_URL}/api/v1/user/signin`
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
                localStorage.setItem('user-session-token', data.token)
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
                    <h1 className="text-2xl text-black font-semibold text-center" >Signin</h1>
                    <p className="text-sm text-gray-600 text-center leading-5">Enter Your credential to access yout account</p>
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
                        Sign In
                    </button>
                </form>
                <h3 className="text-sm text-center mt-2">Already have and account ? <span><Link to={'/signup'} > Signup </Link></span></h3>
            </div>
        </div>
    )
}

export default Signin