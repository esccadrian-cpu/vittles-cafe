import menuJson from "../menu.json";
import { Menu } from "./components/menu";
import { StatusPill } from "./components/status-pill";
import type { MenuData } from "./types";

const menu = menuJson as MenuData;
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Vittles+Cafe+4074+US-231+Ste+A+Ozark+AL+36360";
const heading =
  "font-[family-name:var(--font-display)] font-bold text-[#482913]";
const card =
  "rounded-[18px] border border-[#ddc29b] bg-[#fffaf0] p-6 shadow-[0_18px_45px_rgba(72,41,19,.12)]";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Vittles Cafe",
  slogan: menu.restaurant.tagline,
  servesCuisine: ["Southern", "American", "Breakfast", "Diner"],
  telephone: "+1-334-443-1019",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4074 US-231 Ste A",
    addressLocality: "Ozark",
    addressRegion: "AL",
    postalCode: "36360",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "07:00",
      closes: "14:00",
    },
  ],
  acceptsReservations: false,
};

function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      <p className="mb-2 text-xs font-extrabold uppercase tracking-[.16em] text-[#617337]">
        {eyebrow}
      </p>
      <h2 className={`${heading} text-4xl md:text-5xl`}>{children}</h2>
      <div className="mx-auto my-4 flex w-4/5 max-w-md items-center gap-3 text-xs text-[#b88e63] before:h-px before:flex-1 before:bg-[#ddc29b] after:h-px after:flex-1 after:bg-[#ddc29b]">
        <span>★</span>
      </div>
    </div>
  );
}

export default function Home() {
  const specials = menu.categories.slice(0, 2);
  return (
    <div className="min-h-screen bg-[#fbf3e3] font-[family-name:var(--font-body)] text-[#302216]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <header className="border-b-[3px] border-double border-[#ddc29b] bg-[radial-gradient(ellipse_at_top,#fffdf7_0%,#fbf3e3_68%)] px-5 py-10 text-center">
        <div className="mx-auto mb-5 grid h-44 w-44 place-items-center rounded-full border-[3px] border-[#b88e63] bg-white shadow-[0_18px_45px_rgba(72,41,19,.12)]">
          <div>
            <span className={`${heading} block text-5xl`}>VC</span>
            <span className="text-xs font-extrabold uppercase tracking-[.18em] text-[#617337]">
              Est. Ozark
            </span>
          </div>
        </div>
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[.16em] text-[#617337]">
          Ozark, Alabama
        </p>
        <h1 className={`${heading} text-5xl md:text-7xl`}>
          {menu.restaurant.name}
        </h1>
        <p className="my-2 font-[family-name:var(--font-display)] text-lg italic text-[#704521] md:text-xl">
          “{menu.restaurant.tagline}”
        </p>
        <p className="mb-4 text-[#705943]">
          Southern restaurant · {menu.restaurant.address}
        </p>
        <StatusPill />
        <div className="my-5 flex flex-wrap justify-center gap-3">
          <a
            className="rounded-xl bg-[#704521] px-5 py-3 font-extrabold text-white no-underline transition hover:-translate-y-0.5"
            href="tel:+13344431019"
          >
            Call {menu.restaurant.phone}
          </a>
          <a
            className="rounded-xl border border-[#704521] bg-[#fffaf0] px-5 py-3 font-extrabold text-[#704521] no-underline transition hover:-translate-y-0.5"
            href={mapUrl}
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>
        <p className="mx-auto max-w-2xl text-sm text-[#705943]">
          Country breakfast all morning, lunch specials Tue–Fri, and dinner
          plates ’til close. Closed Mondays.
        </p>
      </header>
      <main className="mx-auto w-[calc(100%-36px)] max-w-[1080px]">
        <section className="py-16" id="specials">
          <SectionHeading eyebrow="Tuesday–Friday · 7 AM–2 PM">
            Weekly Specials
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            {specials.map((category) => (
              <article className={card} key={category.name}>
                <p className="mb-2 text-xs font-extrabold uppercase tracking-wider text-[#617337]">
                  Tue–Fri · 7 AM–2 PM
                </p>
                <h3
                  className={`${heading} flex justify-between gap-3 text-2xl`}
                >
                  {category.name}
                  <span className="text-[#617337]">
                    ${((category.items[0]?.price_cents ?? 0) / 100).toFixed(2)}
                  </span>
                </h3>
                <ul className="mt-5 list-none p-0">
                  {category.items.map((item) => (
                    <li
                      className="flex justify-between gap-4 border-b border-dotted border-[#ddc29b] py-2"
                      key={item.name}
                    >
                      <span>{item.name}</span>
                      <strong className="whitespace-nowrap text-[#704521]">
                        {item.price_cents
                          ? `$${(item.price_cents / 100).toFixed(2)}`
                          : ""}
                      </strong>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <Menu categories={menu.categories} />
        <section className="py-16" id="visit">
          <SectionHeading eyebrow="Come see us">
            Hours & Location
          </SectionHeading>
          <div className="grid gap-6 md:grid-cols-2">
            <article className={card}>
              <h3 className={`${heading} mb-4 text-2xl`}>Hours</h3>
              <table className="w-full border-collapse">
                <tbody>
                  {Object.entries(menu.restaurant.hours).map(([day, hours]) => (
                    <tr
                      className="border-b border-[#ddc29b] last:border-0"
                      key={day}
                    >
                      <th className="py-2 text-left capitalize">{day}</th>
                      <td className="py-2 text-right">{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
            <article className={card}>
              <h3 className={`${heading} mb-4 text-2xl`}>Find Us</h3>
              <p className="mb-4 text-[#705943]">
                <strong className="text-[#302216]">Vittles Cafe</strong>
                <br />
                4074 US-231 Ste A<br />
                Ozark, AL 36360
              </p>
              <p className="mb-5 text-[#705943]">
                Call us:{" "}
                <a className="font-bold text-[#704521]" href="tel:+13344431019">
                  {menu.restaurant.phone}
                </a>
              </p>
              <a
                className="inline-flex rounded-xl border border-[#704521] bg-[#fffaf0] px-5 py-3 font-extrabold text-[#704521] no-underline"
                href={mapUrl}
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </article>
          </div>
        </section>
      </main>
      <footer className="bg-[#482913] px-5 py-12 pb-24 text-center text-sm text-[#eadcc4]">
        <p className="mb-2 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
          Vittles Cafe
        </p>
        <p>{menu.restaurant.tagline}</p>
        <p>
          {menu.restaurant.address} ·{" "}
          <a className="text-white" href="tel:+13344431019">
            {menu.restaurant.phone}
          </a>
        </p>
        <p>Tue–Fri 7 AM–8 PM · Sat 7 AM–4 PM · Sun 7 AM–2 PM · Closed Monday</p>
        <p className="mt-2">© 2026 Vittles Cafe. All rights reserved.</p>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-20 flex gap-2 border-t border-[#ddc29b] bg-[#fffaf0] p-2.5 md:hidden">
        <a
          className="flex-1 rounded-lg bg-[#704521] p-3 text-center font-extrabold text-white no-underline"
          href="tel:+13344431019"
        >
          Call
        </a>
        <a
          className="flex-1 rounded-lg bg-[#617337] p-3 text-center font-extrabold text-white no-underline"
          href={mapUrl}
          target="_blank"
          rel="noreferrer"
        >
          Directions
        </a>
      </div>
    </div>
  );
}
