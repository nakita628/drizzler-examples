// Parses every apps/*/docs/schema.dbml with @dbml/core, the parser dbdiagram.io uses.
import fs from "node:fs";
import path from "node:path";
import { Parser } from "@dbml/core";

const root = path.join(import.meta.dirname, "..", "apps");
let failed = 0;
for (const app of fs.readdirSync(root).sort()) {
  const file = path.join(root, app, "docs", "schema.dbml");
  if (!fs.existsSync(file)) continue;
  try {
    new Parser().parse(fs.readFileSync(file, "utf8"), "dbmlv2");
    console.log(`ok    ${app}`);
  } catch (error) {
    failed++;
    const messages = (error.diags ?? [error]).map((d) => d.message);
    console.log(`fail  ${app}`);
    for (const message of new Set(messages)) console.log(`      ${message}`);
  }
}
process.exitCode = failed === 0 ? 0 : 1;
