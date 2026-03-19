import Airtable from "airtable";
import { NextResponse } from "next/server";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID!);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    console.log("Incoming:", data);

    await base(process.env.AIRTABLE_TABLE_NAME!).create([
  {
    fields: {
      "Full Name": data.fullName,
      "Email": data.email,
      "Phone": data.phone,
      "Province": data.province,
      "City": data.city,
      "Ward": data.ward,
      "Detailed Address": data.detailedAddress,
      "Service Type": data.serviceType,
      "Notes": data.notes,
      "Terms Accepted": data.termsAccepted ? true : false
    },
  },
]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Airtable error:", error);
    return NextResponse.json(
      { error: "Failed to submit" },
      { status: 500 }
    );
  }
}