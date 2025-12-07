// app/api/products/[id]/route.ts
import { NextResponse } from "next/server";

/**
 * Placeholder GET / PUT / DELETE for a single product.
 * Use `context.params.id` to access the dynamic route param.
 * Using `any` for the context avoids a brittle type mismatch during build.
 */

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
