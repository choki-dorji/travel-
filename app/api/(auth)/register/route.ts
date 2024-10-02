// Import Firebase Authentication SDK
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongo";
import bcrypt from "bcryptjs";

// Function to handle user login
export async function POST(request: NextRequest) {
    const client = await clientPromise;
    const db = client.db("users");
    const { email, password } = await request.json();
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Password strength validation
    if (!isStrongPassword(password)) {
        return NextResponse.json({ error: "Password is too weak" }, { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
        return NextResponse.json({ error: "User with this email already exists" }, { status: 400 });
    }

    // Hash the password before storing
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Store the email and hashed password in the database
    const loginDetail = await db.collection("users").insertOne({
        email,
        password: hashedPassword,
    });
    
    return NextResponse.json({ message: "User registered successfully", email }, { status: 200 });
}

// Helper function to check password strength
function isStrongPassword(password: string) {
    // Check for a minimum of 8 characters, at least one uppercase, one lowercase, one number, and one special character
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
}
