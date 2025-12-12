import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
  const id = context?.params?.id ?? null;
  return NextResponse.json({ message: `GET product ${id}` });
}

export async function PUT(req: Request, context: any) {
  const id = context?.params?.id ?? null;
  // read body if needed: const data = await req.json();
  return NextResponse.json({ message: `PUT update product ${id}` });
}

export async function DELETE(req: Request, context: any) {
  const id = context?.params?.id ?? null;
  return NextResponse.json({ message: `DELETE product ${id}` });
}
