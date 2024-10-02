// pages/api/health/[id].js
import { NextRequest, NextResponse } from "next/server";
export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id;
  
    return NextResponse.json({id});
  }



  // ////edit
  export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id;
      return NextResponse.json({id})
    
  }

  // Delete
  export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id;
  
    return NextResponse.json({id});
  }
  