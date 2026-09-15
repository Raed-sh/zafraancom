'use client'

import { ContactInfo, PageShell, copy, useLanguage } from '@/components/site'
import { OrderForm } from '@/components/order-form'

export default function OrderPage() { const lang = useLanguage(); return <PageShell><main className="page-main order-page"><section className="page-intro order-intro"><span className="eyebrow">{lang === 'ar' ? 'الطلب / تواصل معنا' : 'Order / Contact'}</span><h1>{lang === 'ar' ? <>دع الذهب<br /><em>يصل إليك.</em></> : <>Let nature’s gold<br /><em>reach you.</em></>}</h1><p>{lang === 'ar' ? 'املأ النموذج وسنتواصل معك لتأكيد طلبك.' : 'Fill in the form and we will contact you to confirm your order.'}</p></section><section className="order-layout"><div className="form-panel"><span className="eyebrow">{lang === 'ar' ? 'بيانات الطلب' : 'Order details'}</span><OrderForm /></div><ContactInfo /></section></main></PageShell> }
