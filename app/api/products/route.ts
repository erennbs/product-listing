import { NextResponse } from "next/server";
import products from "@/public/products.json";

export async function GET(req: Request) {
  const goldPrice = await getGoldPrice();

  const productList = products.map((p) => {
    const price = (p.popularityScore + 1) * p.weight * goldPrice;
    return { ...p, price };
  });

  return NextResponse.json(productList);
}

async function getGoldPrice() : Promise<number> {
    try {
      const header = new Headers();
      header.append("x-access-token", process.env.GOLD_API_KEY!);
      header.append("Content-Type", "application/json");

      const requestOptions = {
        method: 'GET',
        headers: header,
        };

      const res = await fetch(`https://www.goldapi.io/api/XAU/USD`, requestOptions);
      const data = await res.json();

      return data.price_gram_10k;

  } catch {
    return 60;
  }
}