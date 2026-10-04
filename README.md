# FreeTicket Docs

Source for the FreeTicket developer documentation at
[docs.appfreeticket.com](https://docs.appfreeticket.com): the B2B REST API, the
public storefront API, the `ft` CLI and the MCP server for AI agents.

Built with [Blume](https://www.npmjs.com/package/blume), a Markdown-first docs
framework on Astro.

## Develop

Requires Node.js 22.12 or newer and pnpm.

```bash
pnpm install
pnpm dev      # local server with hot reload
pnpm build    # static site in dist/
```

Check links before opening a pull request:

```bash
npx blume validate
```

## Layout

```
docs/
├── index.mdx     # landing page (/)
├── guides/       # API guides (/guides)
├── cli/          # ft CLI (/cli)
└── mcp/          # MCP server and agent skills (/mcp)
blume.config.ts   # site config, tabs and the OpenAPI references
```

The API reference pages (`/reference/v1` and `/reference/public`) are generated
at build time from the live OpenAPI contracts. Don't write endpoint pages by
hand. Fix the description in the contract instead.

Each folder's `meta.ts` sets the sidebar order. Pages are MDX, and Blume's
components (`<Steps>`, `<Tabs>`, `<CardGroup>`, `:::note` callouts…) need no
imports.

## Contributing

Fixes and improvements are welcome. Open an issue or a pull request.

- Write in English, with concise, task-oriented, copy-pasteable examples.
- Check every command, flag, header and URL against the CLI, the MCP server or
  the OpenAPI contract. Don't document behavior you haven't verified.
- Never include real API keys, customer data or internal hostnames. Use
  placeholders such as `ft_live_xxx`.
- Run `pnpm build` and `npx blume validate` before you submit.

## License

[MIT](./LICENSE) © FreeTicket
