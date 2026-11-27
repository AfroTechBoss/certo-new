import { llmsFullTxt } from "@/data/llms";

// Generated at build time from the product data. See src/data/llms.ts.
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
