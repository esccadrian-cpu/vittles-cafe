import type { MenuCategory } from "../types";
import { formatPrice, slugify } from "../utils";

export function Menu({ categories }: { categories: MenuCategory[] }) {
  return (
    <>
      <nav
        className="sticky top-0 z-10 -mx-[calc((100vw-100%)/2)] border-y border-[#ddc29b] bg-[#fffaf0]/95 backdrop-blur-xl"
        aria-label="Menu categories"
      >
        <div className="mx-auto flex w-full max-w-[1080px] gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category) => (
            <a
              className="whitespace-nowrap rounded-full border border-[#ddc29b] bg-white px-3.5 py-2 text-sm font-bold text-[#704521] no-underline transition hover:border-[#704521] hover:bg-[#704521] hover:text-white"
              href={`#${slugify(category.name)}`}
              key={category.name}
            >
              {category.name}
            </a>
          ))}
        </div>
      </nav>
      <section id="menu" aria-label="Full menu">
        <div className="mx-auto mb-8 max-w-3xl pt-16 text-center">
          <p className="mb-2 text-xs font-extrabold uppercase tracking-[.16em] text-[#617337]">
            Breakfast, lunch & dinner
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-bold text-[#482913] md:text-5xl">
            The Full Menu
          </h2>
          <div
            className="my-4 flex items-center gap-3 text-xs text-[#b88e63] before:h-px before:flex-1 before:bg-[#ddc29b] after:h-px after:flex-1 after:bg-[#ddc29b]"
            aria-hidden="true"
          >
            <span>★</span>
          </div>
          <p className="text-[#705943]">
            Country breakfasts, cowboy combos, burgers, sammiches, baskets,
            dinner plates, pasta and homemade desserts.
          </p>
        </div>
        <div className="columns-1 gap-6 lg:columns-2">
          {categories.map((category) => (
            <section
              className="mb-6 inline-block w-full scroll-mt-24 break-inside-avoid rounded-[18px] border border-[#ddc29b] bg-[#fffaf0] p-5 shadow-[0_8px_24px_rgba(72,41,19,.08)] md:p-6"
              id={slugify(category.name)}
              key={category.name}
            >
              <h3 className="border-b-2 border-[#704521] pb-3 font-[family-name:var(--font-display)] text-2xl font-bold text-[#482913]">
                {category.name}
              </h3>
              {category.note && (
                <p className="my-3 rounded-lg bg-[#f3e4c7] px-3 py-2 text-sm text-[#705943]">
                  {category.note}
                </p>
              )}
              <ul className="m-0 list-none p-0">
                {category.items.map((item, index) => {
                  const price = formatPrice(item.price_cents);
                  return (
                    <li
                      className="break-inside-avoid border-b border-dotted border-[#ddc29b] py-3.5 last:border-0 last:pb-0"
                      key={`${item.name}-${index}`}
                    >
                      <div className="flex items-baseline gap-2">
                        <h4 className="font-extrabold text-[#302216]">
                          {item.name}
                        </h4>
                        <span
                          className="min-w-3 flex-1 border-b-2 border-dotted border-[#ddc29b]"
                          aria-hidden="true"
                        />
                        {price && (
                          <span className="whitespace-nowrap font-extrabold text-[#704521]">
                            {price}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="mt-1 text-sm leading-snug text-[#705943]">
                          {item.description}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
