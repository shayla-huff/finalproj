// GET all products / POST new product (placeholder)
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "GET all products (placeholder)" });
}

export async function POST() {
  return NextResponse.json({ message: "POST create product (placeholder)" });
}
