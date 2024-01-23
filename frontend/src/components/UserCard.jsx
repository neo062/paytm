import { useRecoilState } from 'recoil'
import { moneyTransferModal } from '../state/moneyTransfer'
import MoneyTransferModal from './MoneyTransferModal'
const UserCard = ({ data, index }) => {
    const [isClicked, setClicked] = useRecoilState(moneyTransferModal)
    const { _id, firstName, lastName } = data
    const fullName = firstName + " " + lastName;
    return (
        <>
            <div className='flex justify-between'>
                <div className='flex justify-center items-center'>
                    <div className='text-xl text-gray-700 w-12 h-12 flex justify-center items-center rounded-full bg-gray-200'>
                        U {index + 1}

                    </div>
                    <span className='ml-2'>{fullName}</span>
                </div>

                <button onClick={() => setClicked(true)} type='button' className='py-2 px-4 rounded-lg bg-black text-white'>
                    Send Money
                </button>
            </div>
            <MoneyTransferModal isClicked={isClicked} setClicked={setClicked} name={fullName} to={_id} />
        </>
    )
}

export default UserCard