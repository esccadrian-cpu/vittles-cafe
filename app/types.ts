export type MenuItem = {
  name: string;
  description: string;
  price_cents: number | null;
  price_note: string;
};

export type MenuCategory = {
  name: string;
  note: string;
  items: MenuItem[];
};

export type MenuData = {
  restaurant: {
    name: string;
    tagline: string;
    address: string;
    phone: string;
    hours: Record<string, string>;
    toast_url: string;
    logo_file: string;
  };
  categories: MenuCategory[];
};
