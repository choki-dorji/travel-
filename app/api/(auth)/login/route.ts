// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../../lib/mongo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key"; // Ideally store this in environment variables

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

    // Check if the user exists in the database
    const user = await db.collection("users").findOne({ email });
    if (!user) {
        return NextResponse.json({ error: "User with this email does not exist" }, { status: 400 });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // If credentials are correct, generate a JWT token
    const token = jwt.sign(
        { email: user.email }, // You can include other user info as needed
        JWT_SECRET,
        { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Return the JWT token in the response
    return NextResponse.json({ message: "Login successful", token }, { status: 200 });
}
