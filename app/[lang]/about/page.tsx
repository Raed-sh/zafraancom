import {
  CTASection,
  FeatureStrip,
  ImageBand,
  PageShell,
} from "@/components/site";
import { getLang, type LangParams } from "@/lib/i18n";
import { images } from "@/lib/images";

export default async function AboutPage({ params }: LangParams) {
  const lang = await getLang(params);
  return (
    <PageShell lang={lang}>
      <main className="page-main">
        <section className="page-intro about-intro">
          <span className="eyebrow">{lang === "ar" ? "نحن" : "About us"}</span>
          <h1>
            {lang === "ar" ? (
              <>
                نكبر في الأرض،
                <br />
                <em>ونبقى قريبين منها.</em>
              </>
            ) : (
              <>
                Rooted in the land,
                <br />
                <em>close to it always.</em>
              </>
            )}
          </h1>
        </section>
        <ImageBand
          image={images.saffronBulbsSoil}
          alt={lang === "ar" ? "أبصال الزعفران في التربة" : "Saffron bulbs in soil"}
        />
        <section className="about-statement">
          <span className="eyebrow">
            {lang === "ar" ? "عن الشركة" : "The company"}
          </span>
          <h2>
            {lang === "ar"
              ? "شركة متخصصة في إنتاج وتسويق الزعفران ومنتجاته."
              : "A company specialized in producing and marketing saffron and its products."}
          </h2>
          <p>
            {lang === "ar"
              ? "نؤمن أن المنتج الجيد يبدأ من عناية حقيقية بالأرض، وينتهي بتجربة صادقة على طاولتك."
              : "We believe a good product begins with genuine care for the land and ends with an honest experience on your table."}
          </p>
        </section>
        <FeatureStrip lang={lang} />
        <section className="vision">
          <div>
            <span className="eyebrow">
              {lang === "ar" ? "رؤيتنا" : "Our vision"}
            </span>
            <h2>
              {lang === "ar" ? (
                <>
                  زعفران محلي
                  <br />
                  <em>طازج طوال العام.</em>
                </>
              ) : (
                <>
                  Fresh local saffron
                  <br />
                  <em>throughout the year.</em>
                </>
              )}
            </h2>
          </div>
          <p>
            {lang === "ar"
              ? "منتجات طبيعية، فاخرة، ذات قيمة غذائية وصحية عالية."
              : "Natural, premium products with high nutritional and health value."}
          </p>
        </section>
        <CTASection lang={lang} />
      </main>
    </PageShell>
  );
}
