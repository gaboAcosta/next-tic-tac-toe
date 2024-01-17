import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    return NextResponse.json({ message: 'List all' }, { status: 200 })
}

export async function POST(request: Request) {
    return NextResponse.json({ message: 'Create new' }, { status: 200 })
}