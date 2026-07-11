const CRM_SALES_API_URL =
  "https://superadmin-demo-analytics.thefashionos.com/api/crm/sales";

export interface ContactLead {
  name: string;
  email: string;
  portfolio?: string;
  message?: string;
}

function buildNotes(lead: ContactLead): string {
  const parts: string[] = [];
  if (lead.message?.trim()) {
    parts.push(lead.message.trim());
  }
  if (lead.portfolio?.trim()) {
    parts.push(`Portfolio / Instagram: ${lead.portfolio.trim()}`);
  }
  return parts.join("\n\n");
}

function resolveWebsite(portfolio?: string): string {
  const value = portfolio?.trim() ?? "";
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }
  return "";
}

function resolveLinkedIn(portfolio?: string): string {
  const value = portfolio?.trim() ?? "";
  if (value.includes("linkedin.com")) {
    return value.startsWith("http") ? value : `https://${value}`;
  }
  return "";
}

export async function submitContactLead(lead: ContactLead): Promise<void> {
  const payload = {
    name: lead.name.trim(),
    email: lead.email.trim(),
    secondary_email: "",
    phone: "",
    alternate_phone: "",
    company: "",
    designation: "",
    industry: "Fashion",
    website: resolveWebsite(lead.portfolio),
    linkedin_url: resolveLinkedIn(lead.portfolio),
    status: "new",
    owner: "",
    source: "website",
    brought_by: "",
    campaign: "contact",
    priority: "medium",
    preferred_contact_method: "",
    estimated_value: "",
    budget_range: "",
    expected_close_date: "",
    last_contacted_at: "",
    next_follow_up_at: "",
    city: "",
    state: "",
    country: "",
    address: "",
    tags: "contact",
    notes: buildNotes(lead),
    investment_interest: "",
    investment_stage: "",
    check_size_min: "",
    check_size_max: "",
    fund_name: "",
    fund_size: "",
    aum: "",
    geography_focus: "",
    sector_focus: "",
    thesis_summary: "",
  };

  const response = await fetch(CRM_SALES_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new Error(message || `Request failed (${response.status})`);
  }
}
