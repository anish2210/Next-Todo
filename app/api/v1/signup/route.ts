import prisma from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";

const prismaClient = prisma

export async function POST(req:NextRequest){

    const data = await req.json();
    
    await prismaClient.user.create({
        data:{
            username:data.username,
            password:data.password
        }
    })
    
    return NextResponse.json({
        message:"You have been signed up successfully."
    })
}