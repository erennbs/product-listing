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
    try {
    const res = await fetch(`https://www.goldapi.io/api/XAU/USD`);
    const data = await res.json();
    return data[0].price_gram_10k;
  } catch {
    return 60;
  }
}