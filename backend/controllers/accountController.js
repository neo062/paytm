const mongoose = require("mongoose")
const { User, Account } = require('../db')
exports.getBalance = async (req, res) => {
    try {
        const data = await Account.findOne({ userId: req.userId })
        return res.status(200).json({
            balance: data.balance
        })
    } catch (error) {
        console.error("Error", error);
    }

}

exports.moneyTransfer = async (req, res) => {
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        const { to, amount } = req.body
        // Fetch the accounts within the transaction
        const account = await Account.findOne({ userId: req.userId }).session(session);
        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Inficient Balance"
            })
        }
        if (to === req.userId) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid Account"
            })
        }
        const toAccount = await Account.findOne({ userId: to }).session(session)
        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid Account"
            })
        }

        // Perform the transaction
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session)
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session)

        // Commit the transaction
        await session.commitTransaction();
        res.json({
            message: "Transfer successful"
        });
    } catch (error) {
        console.error("Error", error);
    }
}