import { NextResponse, type NextRequest } from 'next/server';

type Data = {
  message: string;
};

export async function GET(req: NextRequest) {
  return NextResponse.json<Data>({ message: 'Hello from Pages API route' }, { status: 200 });
}
