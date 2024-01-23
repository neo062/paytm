const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "my-name-navin-kumar-this-is-secret-key"

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})
const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

exports.signup = async (req, res) => {
    const { success } = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }
    try {
        const user = await User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
        })
        const userId = user._id;

        // creating account of user

        const account = await Account.create({
            userId: userId,
            balance: 1 + Math.random() * 10000
        })
        console.log('account', account);


        const token = jwt.sign({
            userId
        }, process.env.JWT_SECRET);

        res.json({
            message: "User created successfully",
            token: token
        })
    } catch (error) {
        console.error("Error creating user or account:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }

}



exports.signin = async (req, res) => {
    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }


    res.status(411).json({
        message: "Error while logging in"
    })
}
const updateBody = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional()
})

exports.updateMe = async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }
    const updatedUser = await User.updateOne({ _id: req.userId }, req.body)
    if (!updatedUser) {
        return (
            res.json({
                message: "Something went wrong"
            }))
    }
    res.json({
        message: "Updated successfully"
    })
}

exports.getUsers = async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [
            {
                firstName: {
                    "$regex": filter,
                    "$options": "i" // "i" stands for case-insensitive
                }
            },
            {
                lastName: {
                    "$regex": filter,
                    "$options": "i" // "i" stands for case-insensitive
                }
            }
        ]
    });

    res.json({
        users
    })
}