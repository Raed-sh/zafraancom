import { notFound } from "next/navigation";

export const langs = ["ar", "en"] as const;

export type Lang = (typeof langs)[number];

export type LangParams = { params: Promise<{ lang: string }> };

export const langStorageKey = "zaffarn-lang";

function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value);
}

export async function getLang(params: LangParams["params"]): Promise<Lang> {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return lang;
}

export const copy = {
  ar: {
    home: "الرئيسية",
    products: "المنتجات",
    about: "نحن",
    order: "الطلب / تواصل معنا",
    orderNow: "اطلب الآن",
    view: "عرض المنتج",
    learn: "اكتشف قصتنا",
    natural: "طبيعية",
    premium: "فاخرة",
    value: "قيمة غذائية وصحية عالية",
    local: "إنتاج محلي",
    phone: "الهاتف",
    whatsapp: "واتساب",
    email: "البريد الإلكتروني",
    menu: "القائمة",
    close: "إغلاق",
  },
  en: {
    home: "Home",
    products: "Products",
    about: "About Us",
    order: "Order / Contact",
    orderNow: "Order Now",
    view: "View Product",
    learn: "Discover our story",
    natural: "Natural",
    premium: "Premium",
    value: "High nutritional and health value",
    local: "Locally produced",
    phone: "Phone",
    whatsapp: "WhatsApp",
    email: "Email",
    menu: "Menu",
    close: "Close",
  },
};

export function navLinks(lang: Lang) {
  const t = copy[lang];
  return [
    [`/${lang}`, t.home],
    [`/${lang}/products`, t.products],
    [`/${lang}/about`, t.about],
    [`/${lang}/order`, t.order],
  ];
}
