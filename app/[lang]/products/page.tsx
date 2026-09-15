import Image from "next/image";
import { CTASection, PageShell } from "@/components/site";
import { copy, getLang, type LangParams } from "@/lib/i18n";
import { products } from "@/lib/products";

export default async function ProductsPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = copy[lang];
  return (
    <PageShell lang={lang}>
      <main className="page-main">
        <section className="page-intro">
          <span className="eyebrow">
            {lang === "ar" ? "المنتجات" : "Products"}
          </span>
          <h1>
            {lang === "ar" ? (
              <>
                من الأرض،
                <br />
                <em>إلى طاولتك.</em>
              </>
            ) : (
              <>
                From the earth,
                <br />
                <em>to your table.</em>
              </>
            )}
          </h1>
          <p>
            {lang === "ar"
              ? "اختيارات موسمية ومنتجات طبيعية تحمل جوهر الزعفران المحلي."
              : "Seasonal selections and natural products carrying the essence of local saffron."}
          </p>
        </section>
        <section className="product-list">
          {products.map((product, index) => {
            const item = product[lang];
            return (
              <article
                className="product-detail"
                id={product.id}
                key={product.id}
              >
                <div className="detail-image">
                  <Image src={product.image} alt={item.name} />
                </div>
                <div className="detail-copy">
                  <span className="eyebrow">
                    0{index + 1} / {lang === "ar" ? "منتج" : "Product"}
                  </span>
                  <h2>{item.name}</h2>
                  <strong className="price">{item.price}</strong>
                  <p>{item.description}</p>
                  {product.ingredients && (
                    <ul className="ingredients">
                      {(lang === "ar"
                        ? ["زيت الزعفران", "فيتامين B5", "زيت جوز الهند"]
                        : product.ingredients
                      ).map((ingredient) => (
                        <li key={ingredient}>{ingredient}</li>
                      ))}
                    </ul>
                  )}
                  <a
                    className="gold-button"
                    href="https://wa.me/962778472931?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20%D8%B2%D8%B9%D9%81%D8%B1%D8%A7%D9%86%D9%83%D9%85"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.orderNow}
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </section>
        <CTASection lang={lang} />
      </main>
    </PageShell>
  );
}
