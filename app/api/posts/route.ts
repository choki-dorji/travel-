import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../lib/mongo";
import jwt from "jsonwebtoken";

// JWT secret key
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Function to verify JWT token
function verifyToken(request: NextRequest) {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return { error: "Unauthorized", status: 401 };
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return { decoded, status: 200 };
    } catch (error) {
        return { error: "Invalid or expired token", status: 401 };
    }
}

// POST request: Add new post (protected route)
export async function POST(request: NextRequest) {
    // Verify token
    const authResult = verifyToken(request);
    if (authResult.status !== 200) {
        return NextResponse.json({ error: authResult.error }, { status: authResult.status });
    }

    // Proceed with the request if the token is valid
    const client = await clientPromise;
    const db = client.db("posts");
    const { title, content } = await request.json();

    const post = await db.collection("posts").insertOne({
        title,
        content,
    });
    return NextResponse.json({ Healthdata: post }, { status: 200 });
}

// GET request: Retrieve posts (protected route)
export async function GET(request: NextRequest) {
    // Verify token
    const authResult = verifyToken(request);
    if (authResult.status !== 200) {
        return NextResponse.json({ error: authResult.error }, { status: authResult.status });
    }

    // Proceed with the request if the token is valid
    return NextResponse.json({ Healthdata: "The data" }, { status: 200 });
}