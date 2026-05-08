import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function CalculatorPage() {
  const t = await getTranslations("calculator");

  return (
    <div className="flex flex-col">
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">{t("page_title")}</h1>
          <p className="text-gray-300">{t("page_subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-sky-50 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">🧮</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">費用試算功能建置中</h2>
            <p className="text-gray-500 text-sm mb-6">
              試算工具即將上線，目前請直接聯繫業務，我們將在 24 小時內提供專屬報價
            </p>
            <div className="bg-white rounded-xl p-6 text-left mb-6 border border-sky-100">
              <p className="text-sm font-bold text-gray-700 mb-3">報價參考因素：</p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-start gap-2"><span className="text-sky-400">•</span>螢幕尺寸（55" 或 65"）</li>
                <li className="flex items-start gap-2"><span className="text-sky-400">•</span>租借台數</li>
                <li className="flex items-start gap-2"><span className="text-sky-400">•</span>租借天數（天租 / 週租 / 月租）</li>
                <li className="flex items-start gap-2"><span className="text-sky-400">•</span>送達地點與安裝需求</li>
                <li className="flex items-start gap-2"><span className="text-sky-400">•</span>是否需要選配軟體（DMS+ / ClassCraft）</li>
              </ul>
            </div>
            <Link
              href="/booking"
              className="inline-block bg-sky-400 hover:bg-sky-300 text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              填寫需求，取得報價
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
