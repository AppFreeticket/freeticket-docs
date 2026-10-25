import { defineConfig } from "blume";
import { vercel } from "blume/deploy";
import { openapi } from "blume/reference";

// The specs are served live by free-admin, the single source of truth for the
// contracts. The superadmin spec (/api/admin) is internal and stays out.
export default defineConfig({
  title: "FreeTicket Docs",
  logo: {
    image: { light: "/logo-onLight.png", dark: "/logo-onDark.png", alt: "FreeTicket" },
    text: "Docs",
  },
  description:
    "Developer docs for FreeTicket, the ticketing platform for Colombia and Latin America: the B2B REST API, the public storefront API, the ft CLI and the MCP server.",
  theme: {
    mode: "dark",
    fonts: { display: "inter", body: "inter", mono: "geist-mono" },
  },
  github: { owner: "AppFreeticket", repo: "freeticket-docs" },
  // "Last updated" dates, also emitted as dateModified in the JSON-LD. Full
  // dates on Vercel need VERCEL_DEEP_CLONE=true (the build warns otherwise).
  lastModified: "git",
  navigation: {
    tabs: [
      { label: "Guides", path: "/guides", icon: "book" },
      { label: "CLI", path: "/cli", icon: "terminal" },
      { label: "MCP", path: "/mcp", icon: "sparkles" },
      { label: "B2B API", path: "/reference/v1", icon: "code" },
      { label: "Public API", path: "/reference/public", icon: "globe" },
    ],
  },
  seo: {
    og: {
      site: "docs.appfreeticket.com",
      palette: {
        accent: "#ffd102",
        background: "#0c0d0d",
        foreground: "#f3f4f6",
        muted: "#9ca3af",
        border: "#262727",
      },
    },
    organization: {
      name: "FreeTicket",
      url: "https://appfreeticket.com",
      logo: "/logo-onLight.png",
      sameAs: [
        "https://github.com/AppFreeticket",
        "https://appfreeticket.com/desarrolladores",
      ],
    },
    software: {
      name: "FreeTicket API",
      description:
        "REST API, CLI and MCP server for FreeTicket, the ticketing platform for live events in Colombia and Latin America.",
      sameAs: [
        "https://www.npmjs.com/package/@freeticket/cli",
        "https://github.com/AppFreeticket/freeticket-cli",
        "https://github.com/AppFreeticket/freeticket-mcp",
        "https://github.com/AppFreeticket/agent-skills",
      ],
    },
  },
  agents: {
    llmsTxt: {
      details: [
        "FreeTicket is a ticketing platform for live events in Colombia and Latin America: organizers publish events, sell tickets with QR codes, run memberships and check people in at the door.",
        "",
        "- To find or buy tickets for a buyer, use the anonymous public API at `https://appfreeticket.com/api/public` (no key). Payment is always completed by a person through the returned `checkoutUrl`.",
        "- To operate an organizer workspace, use the B2B API at `https://admin.appfreeticket.com/api/v1` with `Authorization: Bearer ft_live_…`, the `ft` CLI (`npm install -g @freeticket/cli`, then `ft login`), or the hosted MCP server at `https://mcp.appfreeticket.com/mcp` (OAuth 2.1, Streamable HTTP).",
        "- Agent skills: `npx skills add AppFreeticket/agent-skills`.",
        "- Contracts: `https://admin.appfreeticket.com/api/v1/openapi.json` and `https://appfreeticket.com/api/public/openapi.json`. Platform overview with live events: `https://appfreeticket.com/llms.txt`.",
      ].join("\n"),
    },
  },
  reference: [
    openapi({
      route: "/reference/v1",
      spec: "https://admin.appfreeticket.com/api/v1/openapi.json",
    }),
    openapi({
      route: "/reference/public",
      spec: "https://appfreeticket.com/api/public/openapi.json",
    }),
  ],
  deployment: vercel({ site: "https://docs.appfreeticket.com" }),
});
