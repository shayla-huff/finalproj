import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "GET all orders placeholder" });
}

export async function POST() {
  return NextResponse.json({ message: "POST create order placeholder" });
}
