import { NextResponse } from "next/server";
import products from "@/public/products.json";

export async function GET(req: Request) {
  const goldPrice = await getGoldPrice();

  const enriched = products.map((p) => {
    const price = (p.popularityScore + 1) * p.weight * goldPrice;
    return { ...p, price };
  });

  return NextResponse.json(enriched);
}

async function getGoldPrice() : Promise<number> {
    return 1
}