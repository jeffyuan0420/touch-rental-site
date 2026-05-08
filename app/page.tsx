import { getTranslations } from "next-intl/server";
import Link from "next/link";

const STEP_META = [
  { icon: "📋", bg: "#1f2937" },
  { icon: "📧", bg: "#374151" },
  { icon: "✍️", bg: "#4b5563" },
  { icon: "🚚", bg: "#0369a1" },
  { icon: "📦", bg: "#0284c7" },
];

export default async function HomePage() {
  const t = await getTranslations("hero");
  const tHome = await getTranslations("home");
  const tFlow = await getTranslations("flow");

  const features = [
    { icon: "⚡", title: tHome("feat1_title"), desc: tHome("feat1_desc") },
    { icon: "📅", title: tHome("feat2_title"), desc: tHome("feat2_desc") },
    { icon: "🧩", title: tHome("feat3_title"), desc: tHome("feat3_desc") },
  ];

  const useCases = [
    { icon: "🎪", title: tHome("case1_title"), desc: tHome("case1_desc") },
    { icon: "🏢", title: tHome("case2_title"), desc: tHome("case2_desc") },
    { icon: "📚", title: tHome("case3_title"), desc: tHome("case3_desc") },
    { icon: "🛍️", title: tHome("case4_title"), desc: tHome("case4_desc") },
  ];

  const FLOW_STEPS = [
    { ...STEP_META[0], title: tFlow("s1_title"), details: [tFlow("s1_d1"), tFlow("s1_d2"), tFlow("s1_d3")] },
    { ...STEP_META[1], title: tFlow("s2_title"), details: [tFlow("s2_d1"), tFlow("s2_d2"), tFlow("s2_d3")] },
    { ...STEP_META[2], title: tFlow("s3_title"), details: [tFlow("s3_d1"), tFlow("s3_d2"), tFlow("s3_d3")] },
    { ...STEP_META[3], title: tFlow("s4_title"), details: [tFlow("s4_d1"), tFlow("s4_d2"), tFlow("s4_d3")] },
    { ...STEP_META[4], title: tFlow("s5_title"), details: [tFlow("s5_d1"), tFlow("s5_d2"), tFlow("s5_d3")] },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-sky-900 opacity-90" />
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center w-full">
          <p className="text-sky-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Persona Taiwan
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products/touch-screen"
              className="bg-sky-400 hover:bg-sky-300 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
            >
              {t("cta_products")}
            </Link>
            <Link
              href="/booking"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all hover:scale-105"
            >
              {t("cta_booking")}
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feat) => (
              <div key={feat.title} className="text-center p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{feat.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{tHome("products_title")}</h2>
            <p className="text-gray-500">{tHome("products_subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kiosk Card - main product with stock */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-br from-gray-800 to-sky-900 h-48 flex items-center justify-center">
                <span className="text-7xl">📺</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">觸控直立廣告機</h3>
                  <span className="bg-sky-100 text-sky-700 text-xs font-bold px-2 py-0.5 rounded-full">熱門</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">55" / 65" 4K 落地直立式觸控廣告機，IR 20 點觸控，Android 13，庫存充足即時出貨</p>
                <div className="flex gap-2 text-xs text-gray-500 mb-4">
                  <span className="bg-gray-100 px-2 py-1 rounded">55" × 28台</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">65" × 2台</span>
                </div>
                <Link
                  href="/products/kiosk"
                  className="block text-center bg-sky-400 hover:bg-sky-300 text-white font-bold py-2.5 rounded-lg transition-colors"
                >
                  查看規格 →
                </Link>
              </div>
            </div>

            {/* Touch Screen Card - coming soon */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden opacity-75">
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 h-48 flex items-center justify-center">
                <span className="text-7xl">🖥️</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">觸控螢幕</h3>
                  <span className="bg-gray-100 text-gray-500 text-xs font-bold px-2 py-0.5 rounded-full">即將上架</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">壁掛式 / 桌上型觸控螢幕，規格與租金洽詢業務</p>
                <button className="block w-full text-center border-2 border-gray-300 text-gray-500 font-bold py-2.5 rounded-lg cursor-not-allowed">
                  即將上架
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">{tHome("use_cases_title")}</h2>
            <p className="text-gray-500">{tHome("use_cases_subtitle")}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {useCases.map((uc) => (
              <div key={uc.title} className="text-center p-5 rounded-2xl bg-gray-50 hover:bg-sky-50 transition-colors group">
                <div className="text-3xl mb-3">{uc.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1 text-sm group-hover:text-sky-700 transition-colors">{uc.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">{tHome("flow_title")}</h2>
            <p className="text-gray-400">{tHome("flow_subtitle")}</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-start">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.title} className="flex-1 relative">
                <div
                  className="rounded-xl p-5"
                  style={{ backgroundColor: step.bg }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">{i + 1}</span>
                    <span className="text-xl">{step.icon}</span>
                    <span className="font-bold text-sm">{step.title}</span>
                  </div>
                  <ul className="space-y-1">
                    {step.details.map((d) => (
                      <li key={d} className="text-xs text-gray-300 flex items-start gap-1.5">
                        <span className="text-sky-400 mt-0.5">•</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 -translate-y-1/2 z-10 text-sky-400 text-lg font-bold">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-sky-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">準備好提升您的互動體驗了嗎？</h2>
          <p className="text-sky-100 mb-8 text-lg">填寫需求，業務 24 小時內回覆，提供專屬報價</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-white text-sky-600 font-bold px-8 py-4 rounded-lg text-lg hover:bg-sky-50 transition-colors shadow-md"
            >
              立即預約租賃
            </Link>
            <Link
              href="/calculator"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-sky-500 transition-colors"
            >
              費用試算
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
