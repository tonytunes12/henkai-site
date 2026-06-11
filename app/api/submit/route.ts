import { NextRequest, NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────
//  GOOGLE SHEETS INTEGRATION
//  When you're ready to connect:
//  1. Create a Google Apps Script Web App (see README.md)
//  2. Paste the deployment URL into GOOGLE_SHEET_URL in .env.local
// ─────────────────────────────────────────────────────────────
const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_URL ?? "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { xUsername, discordUsername, walletAddress, timestamp } = body;

    if (!xUsername || !discordUsername || !walletAddress) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Validate ETH address
    const ethRegex = /^0x[0-9a-fA-F]{40}$/;
    if (!ethRegex.test(walletAddress)) {
      return NextResponse.json({ error: "Invalid Ethereum address" }, { status: 400 });
    }

    // If Google Sheet URL is configured, forward the data
    if (GOOGLE_SHEET_URL) {
      const sheetRes = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ xUsername, discordUsername, walletAddress, timestamp }),
      });
      if (!sheetRes.ok) {
        console.error("Google Sheet error:", await sheetRes.text());
        return NextResponse.json({ error: "Failed to write to sheet" }, { status: 500 });
      }
    } else {
      // Log locally until sheet is connected
      console.log("📝 New Henkai Entry:", { xUsername, discordUsername, walletAddress, timestamp });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Submit error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
