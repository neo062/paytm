import { atom, selector } from 'recoil';

export const moneyTransferModal = atom({
    key: 'moneyTransferModal', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});