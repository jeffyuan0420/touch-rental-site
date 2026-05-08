import { getTranslations } from "next-intl/server";
import Link from "next/link";

const SPECS_55 = [
  ["尺寸", '55"（1984×745×389mm）'],
  ["解析度", "4K UHD（3840×2160）"],
  ["亮度", "350 cd/m²"],
  ["觸控技術", "IR 紅外線 20 點觸控"],
  ["作業系統", "Android 13"],
  ["記憶體", "4GB RAM + 32GB 儲存"],
  ["重量", "33.9 kg"],
  ["功耗", "≤ 120W"],
  ["現有庫存", "28 台"],
];

const SPECS_65 = [
  ["尺寸", '65"（1999×821×730mm）'],
  ["解析度", "4K UHD（3840×2160）"],
  ["亮度", "350 cd/m²"],
  ["觸控技術", "IR 紅外線 20 點觸控"],
  ["作業系統", "Android 13"],
  ["記憶體", "4GB RAM + 32GB 儲存"],
  ["重量", "64.7 kg"],
  ["功耗", "待確認"],
  ["現有庫存", "2 台"],
];

export default async function TouchScreenPage() {
  const tProducts = await getTranslations("products");

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">產品規格</p>
          <h1 className="text-4xl font-bold mb-4">觸控螢幕租賃</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            55" / 65" 4K 工業級觸控螢幕，IR 20 點觸控，Android 13 系統，即租即用
          </p>
        </div>
      </section>

      {/* Spec Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* 55" */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-sky-600 to-sky-900 p-8 text-white text-center">
                <div className="text-5xl mb-3">🖥️</div>
                <h2 className="text-2xl font-bold">55K10SK-PRO</h2>
                <p className="text-sky-200 mt-1">55 吋觸控螢幕</p>
                <div className="mt-4 inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold">
                  庫存 28 台 · 可即時出貨
                </div>
              </div>
              <div className="p-6">
                <table className="w-full text-sm">
                  <tbody>
                    {SPECS_55.map(([label, value]) => (
                      <tr key={label} className="border-b border-gray-100 last:border-0">
                        <td className="py-2.5 text-gray-500 w-1/3">{label}</td>
                        <td className="py-2.5 text-gray-900 font-medium">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link
                  href="/booking"
                  className="mt-6 block text-center bg-sky-400 hover:bg-sky-300 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  預約此規格
                </Link>
              </div>
            </div>

            {/* 65" */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-8 text-white text-center">
                <div className="text-5xl mb-3">🖥️</div>
                <h2 className="text-2xl font-bold">65K10SK-PRO</h2>
                <p className="text-gray-300 mt-1">65 吋觸控螢幕</p>
                <div className="mt-4 inline-block bg-white/20 px-4 py-1.5 rounded-full text-sm font-bold">
                  庫存 2 台 · 先預約先保留
                </div>
              </div>
              <div className="p-6">
                <table className="w-full text-sm">
                  <tbody>
                    {SPECS_65.map(([label, value]) => (
                      <tr key={label} className="border-b border-gray-100 last:border-0">
                        <td className="py-2.5 text-gray-500 w-1/3">{label}</td>
                        <td className="py-2.5 text-gray-900 font-medium">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Link
                  href="/booking"
                  className="mt-6 block text-center bg-sky-400 hover:bg-sky-300 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  預約此規格
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Add-ons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{tProducts("software_title")}</h2>
            <p className="text-gray-500 text-sm">選配軟體讓觸控螢幕發揮更大效益</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{tProducts("dms_title")}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{tProducts("dms_desc")}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{tProducts("classcraft_title")}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{tProducts("classcraft_desc")}</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">選配軟體費用請洽業務，以實際使用天數與授權數量計算</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sky-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">準備好預約了嗎？</h2>
          <p className="text-sky-100 mb-6">填寫預約表單，業務 24 小時內與您確認細節</p>
          <Link
            href="/booking"
            className="inline-block bg-white text-sky-600 font-bold px-8 py-3 rounded-lg hover:bg-sky-50 transition-colors shadow-md"
          >
            立即預約租賃
          </Link>
        </div>
      </section>
    </div>
  );
}
