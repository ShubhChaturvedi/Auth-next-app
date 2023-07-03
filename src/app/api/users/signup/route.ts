import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {username, email, password} = reqBody
        const user = await User.findOne({email})
        if(user){
            NextResponse.json({
                error: "Account already exixts",
                status: 400
            })
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        const saveUser = await newUser.save();
        await sendEmail({email, emailType: "VERIFY", userId: saveUser._id})
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            saveUser
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            status: 500
        })
    }
}