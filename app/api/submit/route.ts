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

    // Log the entry
    console.log("📝 New Henkai Entry:", { xUsername, discordUsername, walletAddress, timestamp });

    // If Google Sheet URL is configured, forward the data
    if (GOOGLE_SHEET_URL) {
      console.log("🔗 Sending to Google Sheets:", GOOGLE_SHEET_URL);
      try {
        const payload = { xUsername, discordUsername, walletAddress, timestamp };
        console.log("📤 Payload:", JSON.stringify(payload));
        
        const sheetRes = await Promise.race([
          fetch(GOOGLE_SHEET_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          }),
          new Promise<Response>((_, reject) => setTimeout(() => reject(new Error("Timeout")), 5000))
        ]) as Response;

        console.log("📊 Sheet Response Status:", sheetRes.status);
        const responseText = await sheetRes.text();
        console.log("📋 Sheet Response:", responseText);

        if (!sheetRes.ok) {
          console.error("❌ Google Sheet error:", responseText);
          return NextResponse.json({ error: "Failed to write to sheet", details: responseText }, { status: 500 });
        }
        console.log("✅ Data sent to Google Sheets successfully");
      } catch (fetchErr) {
        console.error("❌ Fetch error:", String(fetchErr));
        console.error("Full error:", fetchErr);
        // Still return success locally since we logged it
        return NextResponse.json({ success: true, note: "Logged locally, sheet sync failed" });
      }
    } else {
      console.log("⚠️ GOOGLE_SHEET_URL not configured - logging locally only");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Submit error:", err);
    return NextResponse.json({ error: "Server error", details: String(err) }, { status: 500 });
  }
}
