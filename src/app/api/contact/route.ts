import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, service, budget, timeline, message } = body;

    if (!name || !contact) {
      return NextResponse.json(
        { error: "Name and contact information are required." },
        { status: 400 }
      );
    }

    const leadData = {
      name: String(name).trim(),
      contact: String(contact).trim(),
      service: service || "General Inquiry",
      budget: budget || "Not specified",
      timeline: timeline || "Not specified",
      message: message ? String(message).trim() : "None provided",
      receivedAt: new Date().toISOString(),
    };

    // Log the lead for operational tracking
    console.log("[AgniGrow Lead Capture]", JSON.stringify(leadData, null, 2));

    // Optional webhook integration: if process.env.LEAD_WEBHOOK_URL is configured
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: `**New AgniGrow Lead Received!**\n• **Name:** ${leadData.name}\n• **Contact:** ${leadData.contact}\n• **Service:** ${leadData.service}\n• **Budget:** ${leadData.budget}\n• **Timeline:** ${leadData.timeline}\n• **Notes:** ${leadData.message}`,
          }),
        });
      } catch (webhookErr) {
        console.error("Webhook notification error:", webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry received successfully. Our team will contact you within 4 hours.",
      leadId: `LEAD-${Date.now()}`,
    });
  } catch (error) {
    console.error("Contact API handler error:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please chat with us directly on WhatsApp." },
      { status: 500 }
    );
  }
}

