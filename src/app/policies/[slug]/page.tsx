import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPolicy, policies, policiesUpdated } from "@/data/policies";
import { site, whatsappLink } from "@/data/site";
import { WhatsAppIcon } from "@/components/icons";

// Policy pages are fully static (generateStaticParams), so blocking on params is fine.
export const instant = false;

export function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/policies/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const policy = getPolicy(slug);
  if (!policy) return {};
  return { title: policy.title, description: policy.summary };
}

export default async function PolicyPage(props: PageProps<"/policies/[slug]">) {
  const { slug } = await props.params;
  const policy = getPolicy(slug);
  if (!policy) notFound();

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <Link href="/policies" className="font-mono text-xs uppercase tracking-[0.25em] text-muted hover:text-foreground">
        ← All policies
      </Link>
      <h1 className="mt-6 text-4xl font-semibold sm:text-6xl">{policy.title}</h1>
      <p className="mt-4 max-w-xl text-lg text-muted">{policy.summary}</p>
      <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">Last updated {policiesUpdated}</p>

      <div className="mt-14 grid gap-12 lg:grid-cols-[14rem_1fr]">
        <nav aria-label="Policies" className="hidden lg:block">
          <ul className="sticky top-24 space-y-1 text-sm">
            {policies.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/policies/${p.slug}`}
                  aria-current={p.slug === policy.slug ? "page" : undefined}
                  className={`block rounded-xl px-3 py-2 transition ${
                    p.slug === policy.slug ? "bg-surface text-foreground" : "text-muted hover:text-foreground"
                  }`}
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <article className="max-w-2xl">
          {policy.sections.map((s, i) => (
            <section key={s.heading} className="border-t border-line py-8 first:border-t-0 first:pt-0">
              <h2 className="flex items-baseline gap-3 text-xl font-semibold sm:text-2xl">
                <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                {s.heading}
              </h2>
              {s.body.length === 1 ? (
                <p className="mt-3 leading-relaxed text-muted">{s.body[0]}</p>
              ) : (
                <ul className="mt-3 space-y-2 leading-relaxed text-muted">
                  {s.body.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-rec" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="mt-6 rounded-3xl border border-line bg-surface p-6">
            <p className="font-display text-lg font-medium">Questions about this policy?</p>
            <p className="mt-1 text-sm text-muted">
              {site.legalName} · {site.businessNumber} · {site.address}
            </p>
            <a
              href={whatsappLink(`Hi Certo, I have a question about your ${policy.title.toLowerCase()}.`)}
              target="_blank"
              rel="noopener"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-wa px-5 py-2.5 text-sm font-medium text-black transition hover:opacity-90"
            >
              <WhatsAppIcon className="size-4" /> Ask us on WhatsApp
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
