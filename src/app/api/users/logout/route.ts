import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: "Logout successfully",
            success: true,
            status: 200,
        })
        const tokenFlush = response.cookies.set("token", "", {
            httpOnly: true, 
            
        })
        return response
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            status: 500
        })
    }    
}