import { useState } from "react"
import { moneyTransferModal } from "../state/moneyTransfer"
import { useSetRecoilState } from "recoil"
import toast from "react-hot-toast"
const MoneyTransferModal = ({ isClicked, setClicked, _id, name, to }) => {
    const setIsModalClicked = useSetRecoilState(moneyTransferModal)
    const [amount, setAmount] = useState()
    const [isPending, setIsPending] = useState(false)
    const handleMoneyTransfer = async (e) => {
        const token = localStorage.getItem('user-session-token')
        const reqBody = {
            amount: amount,
            to: to
        }
        console.log(reqBody);
        try {
            setIsPending(true)
            const apiUrl = `${import.meta.env.VITE_BASE_URL}/api/v1/account/transfer`
            const res = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(reqBody)
            });
            const data = await res.json()
            if (!res.ok) {
                toast.error(data.message)
            } else {
                toast.success(data.message)

            }
        } catch (err) {
            toast.error(err)
        } finally {
            setIsPending(false)
            setClicked(false)
            setIsModalClicked(pre => !pre)
        }

    }

    if (!isClicked) return null;

    return (
        <div className="fixed inset-0 bg-white z-20 flex justify-center items-center" >
            <div className="w-96 bg-white shadow-md rounded-lg border p-5 relative" >
                <h1 className="text-3xl font-medium mb-10 text-center"> Send Money</h1>

                <div className="flex  items-center">
                    <div className="w-16 h-16 flex justify-center items-center bg-green-500 rounded-full capitalize text-white text-2xl">
                        {name?.slice(0, 1)}
                    </div>
                    <div className="text-2xl font-medium ml-2">
                        {name}
                    </div>
                </div>
                <div className="mb-5 mt-2">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 ">Amount (in Rs)</label>
                    <input type="number" id="lastName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 outline-none focus-within:ring-1 " placeholder="amount" required
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button onClick={() => handleMoneyTransfer()} type="button" className={`w-full py-2 rounded-lg bg-green-500 text-white ${isPending ? 'animate-pulse' : null}`}>
                    Initiate Transfer
                </button>
                <div onClick={() => setClicked(false)} className="absolute -top-2 right-0 text-3xl p-2 cursor-pointer ">
                    x
                </div>
            </div>
        </div>
    )
}

export default MoneyTransferModal