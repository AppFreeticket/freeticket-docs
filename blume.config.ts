import { defineConfig } from "blume";
import { vercel } from "blume/deploy";
import { openapi } from "blume/reference";

// The specs are served live by free-admin, the single source of truth for the
// contracts. The superadmin spec (/api/admin) is internal and stays out.
export default defineConfig({
  title: "FreeTicket Docs",
  description:
    "Build on FreeTicket: the B2B REST API, the public storefront API, the ft CLI and the MCP server for AI agents.",
  theme: { mode: "system" },
  navigation: {
    tabs: [
      { label: "Guides", path: "/guides", icon: "book" },
      { label: "CLI", path: "/cli", icon: "terminal" },
      { label: "MCP", path: "/mcp", icon: "sparkles" },
      { label: "B2B API", path: "/reference/v1", icon: "code" },
      { label: "Public API", path: "/reference/public", icon: "globe" },
    ],
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
