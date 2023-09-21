import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {

    const task = await prisma.task.findMany();
    return NextResponse.json(task);
};

export async function POST(request) {
    try {
        const data = await request.json();
        const newTask = await prisma.task.create({
            data:{
                title: data.title,
                description: data.description,
            }
        });
        console.log(newTask)
        return NextResponse.json(newTask);
    } catch (error) {
        console.log(error)
        return NextResponse.json(error);
    
    }
};



