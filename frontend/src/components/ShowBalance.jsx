import { useState, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { moneyTransferModal } from '../state/moneyTransfer'
const ShowBalance = () => {
    const [balance, setBalance] = useState()
    const isClicked = useRecoilValue(moneyTransferModal)
    useEffect(() => {
        const getBalance = async (url, token) => {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const data = await res.json()
            setBalance(Number(data.balance))
        }
        const apiUrl = `${import.meta.env.VITE_BASE_URL}/api/v1/account/balance`
        const token = localStorage.getItem('user-session-token')
        getBalance(apiUrl, token)
    }, [isClicked])
    return (
        <div className='my-5'>
            <h1 className='text-2xl font-mediup '>Your Balance
                <span className='font-bold ml-2'>{balance?.toFixed(2)}</span>
            </h1>
        </div>
    )
}

export default ShowBalance