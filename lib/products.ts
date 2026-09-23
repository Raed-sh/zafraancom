import { images } from "@/lib/images";

export const products = [
  {
    id: "saffron",
    image: images.saffronJar,
    ar: {
      name: "زعفران — 1 غرام",
      description:
        "زعفران محلي مؤابي منتج بالطريقة الهوائية، نقي ومجفف بعناية.",
      price: "8 JD",
    },
    en: {
      name: "1g Saffron",
      description:
        "Local Muabi saffron, air-produced, pure and carefully dried.",
      price: "8 JD",
    },
  },
  {
    id: "serum",
    image: images.saffronSerum,
    ar: {
      name: "زيت / سيروم الزعفران — 10 مل",
      description:
        "سيروم تجميلي مخصص لمكافحة التجاعيد، يتكون من زيت الزعفران النقي ومدعم بفيتامين B5 وزيت جوز الهند، يمنح البشرة ترطيبًا ومرونة طبيعية.",
      price: "7 JD",
    },
    en: {
      name: "Saffron Oil / Serum — 10ml",
      description:
        "A cosmetic serum made with pure saffron oil, vitamin B5 and coconut oil for natural hydration and elasticity.",
      price: "7 JD",
    },
    ingredients: ["Saffron oil", "Vitamin B5", "Coconut oil"],
  },
  {
    id: "bulbs",
    image: images.saffronBulbs,
    ar: {
      name: "أبصال الزعفران — حجم كبير",
      description: "أبصال محلية مؤابية جاهزة للزراعة والإنتاج.",
      price: "1 JD للبصلة الواحدة",
    },
    en: {
      name: "Large Saffron Bulbs",
      description: "Large local Muabi bulbs ready for planting and production.",
      price: "1 JD per bulb",
    },
  },
];
