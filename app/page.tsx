"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CTASection,
  FeatureStrip,
  ImageBand,
  PageShell,
  ProductCard,
  copy,
  products,
  useLanguage,
} from "@/components/site";
import { images } from "@/lib/images";

export default function HomePage() {
  const lang = useLanguage();
  const t = copy[lang];
  return (
    <PageShell>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              {lang === "ar" ? "زعفران محلي · مؤاب" : "Local saffron · Muab"}
            </span>
            <h1>
              {lang === "ar" ? (
                <>
                  ذهب الطبيعة،
                  <br />
                  <em>بلمسة محلية.</em>
                </>
              ) : (
                <>
                  Nature’s gold,
                  <br />
                  <em>locally grown.</em>
                </>
              )}
            </h1>
            <p>
              {lang === "ar"
                ? "زعفرانكم — جودة طبيعية تُقطف بعناية وتصل إليك كما أرادتها الأرض."
                : "Zaffarn — natural quality, carefully harvested and brought to you as the land intended."}
            </p>
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
          <div className="hero-image">
            <Image
              src={images.saffronBowl}
              alt={
                lang === "ar"
                  ? "زعفران فاخر في وعاء"
                  : "Premium saffron in a bowl"
              }
              preload
            />
            <div className="image-caption">
              <span>01</span>
              <span>
                {lang === "ar" ? "حصاد بعناية" : "Harvested with care"}
              </span>
            </div>
          </div>
        </section>
        <FeatureStrip />
        <section className="section products-preview">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                {lang === "ar" ? "مختاراتنا" : "Our selection"}
              </span>
              <h2>
                {lang === "ar" ? (
                  <>
                    ثلاثة منتجات،
                    <br />
                    <em>قصة واحدة.</em>
                  </>
                ) : (
                  <>
                    Three products,
                    <br />
                    <em>one story.</em>
                  </>
                )}
              </h2>
            </div>
            <Link className="text-button" href="/products">
              {t.products}
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
        <ImageBand
          image={images.saffronStigmas}
          alt={lang === "ar" ? "خيوط الزعفران الطازجة" : "Fresh saffron threads"}
        />
        <CTASection />
      </main>
    </PageShell>
  );
}
