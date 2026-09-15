'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export type Lang = 'ar' | 'en'

export const copy = {
  ar: { home: 'الرئيسية', products: 'المنتجات', about: 'نحن', order: 'الطلب / تواصل معنا', orderNow: 'اطلب الآن', view: 'عرض المنتج', learn: 'اكتشف قصتنا', natural: 'طبيعية', premium: 'فاخرة', value: 'قيمة غذائية وصحية عالية', local: 'إنتاج محلي', phone: 'الهاتف', whatsapp: 'واتساب', email: 'البريد الإلكتروني', menu: 'القائمة', close: 'إغلاق' },
  en: { home: 'Home', products: 'Products', about: 'About Us', order: 'Order / Contact', orderNow: 'Order Now', view: 'View Product', learn: 'Discover our story', natural: 'Natural', premium: 'Premium', value: 'High nutritional and health value', local: 'Locally produced', phone: 'Phone', whatsapp: 'WhatsApp', email: 'Email', menu: 'Menu', close: 'Close' },
}

export function useLanguage(): Lang {
  const [lang, setLang] = useState<Lang>('ar')
  useEffect(() => {
    const saved = window.localStorage.getItem('zaffarn-lang') as Lang | null
    if (saved === 'en' || saved === 'ar') setLang(saved)
  }, [])
  useEffect(() => {
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en'
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    window.localStorage.setItem('zaffarn-lang', lang)
  }, [lang])
  return lang
}

export function LanguageSwitcher({ lang, onChange }: { lang: Lang; onChange: (lang: Lang) => void }) {
  return <button type="button" className="language-switcher" onClick={() => onChange(lang === 'ar' ? 'en' : 'ar')} aria-label={lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}><span className={lang === 'ar' ? 'active' : ''}>ع</span><span className="switch-slash">/</span><span className={lang === 'en' ? 'active' : ''}>EN</span></button>
}

export function Header() {
  const lang = useLanguage()
  const [open, setOpen] = useState(false)
  const t = copy[lang]
  const pathname = usePathname()
  const links = [['/', t.home], ['/products', t.products], ['/about', t.about], ['/order', t.order]]
  return <header className="site-header"><Link className="brand" href="/" onClick={() => setOpen(false)}><img className="brand-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-f6vPmlgnlBH7NxeDLLXRxeafAT2vto.jpg" alt="Zaffarn" /><span className="sr-only">زعفرانكم</span></Link><button className="menu-button" type="button" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '×' : '☰'}<span className="sr-only">{open ? t.close : t.menu}</span></button><nav className={open ? 'main-nav open' : 'main-nav'}>{links.map(([href, label]) => <Link key={href} href={href} className={pathname === href ? 'current' : ''} onClick={() => setOpen(false)}>{label}</Link>)}<LanguageSwitcher lang={lang} onChange={(next) => { window.localStorage.setItem('zaffarn-lang', next); window.location.reload() }} /><a className="header-cta" href="https://wa.me/962778472931?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20%D8%B2%D8%B9%D9%81%D8%B1%D8%A7%D9%86%D9%83%D9%85" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{t.orderNow}<span aria-hidden="true">↗</span></a></nav></header>
}

export function Footer() {
  const lang = useLanguage(); const t = copy[lang]
  return <footer className="site-footer"><div><Link className="brand" href="/"><img className="brand-logo" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-f6vPmlgnlBH7NxeDLLXRxeafAT2vto.jpg" alt="Zaffarn" /><span className="sr-only">زعفرانكم</span></Link><p>{lang === 'ar' ? 'زعفران ومنتجاته، من إنتاج محلي مؤابي.' : 'Saffron and its products, locally produced in Muab.'}</p></div><div className="footer-links">{[['/', t.home], ['/products', t.products], ['/about', t.about], ['/order', t.order]].map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</div><div className="footer-contact"><a href="tel:0778472931">077 847 2931</a><a href="mailto:mnysyah@gmail.com">mnysyah@gmail.com</a></div><div className="copyright">© 2026 {lang === 'ar' ? 'زعفرانكم. جميع الحقوق محفوظة.' : 'Zaffarn. All rights reserved.'}</div></footer>
}

export const products = [
  { id: 'saffron', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/187835-mAjqptUhaxt88f464Z9nU7Oq479Vhv.jpg', ar: { name: 'زعفران — 1 غرام', description: 'زعفران محلي مؤابي منتج بالطريقة الهوائية، نقي ومجفف بعناية.', price: '8 JD' }, en: { name: '1g Saffron', description: 'Local Muabi saffron, air-produced, pure and carefully dried.', price: '8 JD' } },
  { id: 'serum', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/187838-kfURLKqzsJl2QIVY4xdfwPo8Uu8nTd.jpg', ar: { name: 'زيت / سيروم الزعفران — 10 مل', description: 'سيروم تجميلي مخصص لمكافحة التجاعيد، يتكون من زيت الزعفران النقي ومدعم بفيتامين B5 وزيت جوز الهند، يمنح البشرة ترطيبًا ومرونة طبيعية.', price: '7 JD' }, en: { name: 'Saffron Oil / Serum — 10ml', description: 'A cosmetic serum made with pure saffron oil, vitamin B5 and coconut oil for natural hydration and elasticity.', price: '7 JD' }, ingredients: ['Saffron oil', 'Vitamin B5', 'Coconut oil'] },
  { id: 'bulbs', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/187836-Qquep8CXfcCCq49yd1oVvboRiTSPkC.jpg', ar: { name: 'أبصال الزعفران — حجم كبير', description: 'أبصال محلية مؤابية جاهزة للزراعة والإنتاج.', price: '1 JD للبصلة الواحدة' }, en: { name: 'Large Saffron Bulbs', description: 'Large local Muabi bulbs ready for planting and production.', price: '1 JD per bulb' } },
]

export function ProductCard({ product }: { product: typeof products[number] }) {
  const lang = useLanguage(); const item = product[lang]
  return <article className="product-card"><div className="product-card-image"><img src={product.image} alt={item.name} /></div><div className="product-card-body"><span className="eyebrow">{product.id === 'saffron' ? '01' : product.id === 'serum' ? '02' : '03'}</span><h3>{item.name}</h3><p>{item.description}</p><div className="product-meta"><strong>{item.price}</strong><Link href={`/products#${product.id}`}>{copy[lang].view}<span aria-hidden="true">↗</span></Link></div></div></article>
}

export function CTASection() { const lang = useLanguage(); const t = copy[lang]; return <section className="cta-section"><span className="eyebrow">{lang === 'ar' ? 'المحصول القادم بين يديك' : 'The next harvest, in your hands'}</span><h2>{lang === 'ar' ? 'اطلب منتجاتنا الآن' : 'Order our products'}</h2><a className="gold-button" href="https://wa.me/962778472931?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D8%A8%D8%A7%D9%84%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20%D8%B2%D8%B9%D9%81%D8%B1%D8%A7%D9%86%D9%83%D9%85" target="_blank" rel="noopener noreferrer">{t.orderNow}<span aria-hidden="true">↗</span></a></section> }

export function PageShell({ children }: { children: React.ReactNode }) { return <><Header />{children}<Footer /></> }

export function ImageBand({ image, alt }: { image: string; alt: string }) { return <div className="image-band"><Image src={image} alt={alt} fill sizes="100vw" /></div> }

export function ContactInfo() { const lang = useLanguage(); const t = copy[lang]; return <div className="contact-info"><span className="eyebrow">{lang === 'ar' ? 'تواصل معنا' : 'Contact us'}</span><a href="tel:0778472931"><small>{t.phone}</small><strong>077 847 2931</strong></a><a href="https://wa.me/962778472931"><small>{t.whatsapp}</small><strong>077 847 2931</strong></a><a href="mailto:mnysyah@gmail.com"><small>{t.email}</small><strong>mnysyah@gmail.com</strong></a></div> }

export function FeatureStrip() { const lang = useLanguage(); const t = copy[lang]; return <section className="feature-strip">{[t.natural, t.premium, t.value, t.local].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}</section> }

export { Image }

