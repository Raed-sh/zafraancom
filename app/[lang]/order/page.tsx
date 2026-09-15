import { OrderForm } from "@/components/order-form";
import { ContactInfo, PageShell } from "@/components/site";
import { getLang, type LangParams } from "@/lib/i18n";

export default async function OrderPage({ params }: LangParams) {
  const lang = await getLang(params);
  return (
    <PageShell lang={lang}>
      <main className="order-page page-main">
        <section className="order-intro page-intro">
          <span className="eyebrow">
            {lang === "ar" ? "الطلب / تواصل معنا" : "Order / Contact"}
          </span>
          <h1>
            {lang === "ar" ? (
              <>
                دع الذهب
                <br />
                <em>يصل إليك.</em>
              </>
            ) : (
              <>
                Let nature’s gold
                <br />
                <em>reach you.</em>
              </>
            )}
          </h1>
          <p>
            {lang === "ar"
              ? "املأ النموذج وسنتواصل معك لتأكيد طلبك."
              : "Fill in the form and we will contact you to confirm your order."}
          </p>
        </section>
        <section className="order-layout">
          <div className="form-panel">
            <span className="eyebrow">
              {lang === "ar" ? "بيانات الطلب" : "Order details"}
            </span>
            <OrderForm lang={lang} />
          </div>
          <ContactInfo lang={lang} />
        </section>
      </main>
    </PageShell>
  );
}
