import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    return NextResponse.json({ message: 'Get One' }, { status: 200 })
}

export async function PUT(request: Request) {
    return NextResponse.json({ message: 'Update One' }, { status: 200 })
}

export async function DELETE(request: Request) {
    return NextResponse.json({ message: 'Delete One' }, { status: 200 })
}