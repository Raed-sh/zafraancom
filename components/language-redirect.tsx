"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { langStorageKey } from "@/lib/i18n";

export function LanguageRedirect() {
  const router = useRouter();
  useEffect(() => {
    const saved = window.localStorage.getItem(langStorageKey);
    router.replace(saved === "en" ? "/en" : "/ar");
  }, [router]);
  return (
    <main className="cta-section">
      <Link className="gold-button" href="/ar">
        العربية
      </Link>
      <Link className="text-button" href="/en">
        English
      </Link>
    </main>
  );
}
