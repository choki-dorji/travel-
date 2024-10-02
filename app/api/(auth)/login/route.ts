// Import Firebase Authentication SDK
import { NextRequest, NextResponse } from "next/server";

// Function to handle user login
export async function POST(request: NextRequest) {
    const {email, password} = await request.json()
    console.log("email", email, "password", password)
    return NextResponse.json({loggedin: {email: email, password: password}}, {status: 200})
}