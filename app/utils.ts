export function slugify(value: string) {
  return `menu-${value.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
}

export function formatPrice(cents: number | null) {
  return cents === null ? null : `$${(cents / 100).toFixed(2)}`;
}
