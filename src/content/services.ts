/**
 * The four service areas defined in CLAUDE.md, shared by the home list and the
 * Services page. Descriptions state what each area covers, not claims about
 * past results. `id` is the anchor on the Services page.
 *
 * CONFIRM BEFORE LAUNCH: `includes` and `fit` are drafts. The team must agree
 * it can deliver everything listed.
 */
export const services = [
  {
    id: "business-software",
    title: "Business Software",
    body: "ERP, CRM, workflow, operations, and procurement systems shaped around how your team already works, replacing the spreadsheets and workarounds holding things together.",
    includes: [
      "ERP and CRM systems built around your process",
      "Workflow and approval tools",
      "Operations and procurement systems",
      "Moving your spreadsheets into one shared system",
    ],
    fit: "Your team runs on spreadsheets, shared inboxes, and workarounds that only one person fully understands.",
  },
  {
    id: "web-saas",
    title: "Web & SaaS",
    body: "Web applications and SaaS products, from a focused first version to a platform your customers rely on every day.",
    includes: [
      "Web applications for your customers or team",
      "SaaS products, from first version onward",
      "Customer portals and account areas",
      "Improving a web app that has outgrown its first version",
    ],
    fit: "You have a product idea to get in front of real users, or a web app that can no longer keep up.",
  },
  {
    id: "ai-ml",
    title: "AI/ML",
    body: "Machine learning and AI features aimed at one specific problem in your product or operations, such as detecting, predicting, or classifying.",
    includes: [
      "Detection and classification models",
      "Predictions built on your own data",
      "AI features added to an existing product",
      "An honest view on whether a simple rule would do the job",
    ],
    fit: "You have one clear problem and the data to work on it, or you want a straight answer on whether AI would help at all.",
  },
  {
    id: "automation",
    title: "Automation",
    body: "Automations that take repetitive, manual work off your team’s plate and connect the tools you already use, so data moves without copy-paste.",
    includes: [
      "Connecting the tools you already use",
      "Taking over repetitive data entry",
      "Scheduled reports and notifications",
      "Moving data between systems automatically",
    ],
    fit: "Someone on your team repeats the same manual steps every day or every week.",
  },
];
