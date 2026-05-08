import { getTranslations } from "next-intl/server";
import Link from "next/link";

const COMMON_FEATURES = [
  { icon: "🖼️", title: "4K UHD 高畫質", desc: "3840×2160 @60Hz，細節清晰，適合大型展示" },
  { icon: "✋", title: "50 點紅外線觸控", desc: "Surface Light Wave 技術，支援多人同時觸控操作" },
  { icon: "🖥️", title: "內建電子白板", desc: "無需額外安裝，即開即用，支援多人書寫共創" },
  { icon: "📡", title: "9 分割無線投影", desc: "最多 9 裝置同步投影，適合會議教學場景" },
  { icon: "🤖", title: "Android 14 系統", desc: "最新 Android 14，支援各式 APP，內建 16GB+256GB" },
  { icon: "⚡", title: "TYPE-C 多功能接口", desc: "支援高速傳輸、多媒體輸出、同步充電" },
];

const STANDARD_SIZES = [
  {
    size: '55"',
    model: "KTA-PRO-FULL",
    outer: "1261.82 × 760.40 × 87.97 mm",
    display: "1211.60 × 682.40 mm",
    power: "≤ 400W",
    weight: "約 25 kg",
  },
  {
    size: '65"',
    model: "KTA-PRO-FULL",
    outer: "1489.37 × 905.28 × 103.86 mm",
    display: "1428.48 × 803.52 mm",
    power: "≤ 400W",
    weight: "約 41 kg",
  },
  {
    size: '75"',
    model: "KTA-PRO-FULL",
    outer: "1710.54 × 1039.87 × 103.87 mm",
    display: "1650 × 928 mm（約）",
    power: "≤ 400W",
    weight: "洽詢業務",
  },
  {
    size: '86"',
    model: "KTA-PRO-FULL",
    outer: "1962.32 × 1174.13 × 103.86 mm",
    display: "1895 × 1065 mm（約）",
    power: "≤ 400W",
    weight: "約 62 kg",
  },
];

const SPECIAL_SIZES = [
  {
    size: '70"',
    model: "70KTA-PRO-FULL",
    outer: "1587.1 × 947.72 × 91.74 mm",
    display: "1537.45 × 863.74 mm",
    power: "≤ 300W",
    weight: "52 kg",
    badge: "特規尺寸",
  },
  {
    size: '100"',
    model: "100KTA-PRO-FULL",
    outer: "2271.08 × 1348.83 × 104.87 mm",
    display: "2205.6 × 1241.7 mm",
    power: "≤ 400W",
    weight: "100 kg",
    badge: "旗艦尺寸",
  },
];

const SHARED_SPECS = [
  ["解析度", "4K UHD 3840 × 2160 @60Hz"],
  ["長寬比", "16：9"],
  ["可視角度", "178°"],
  ["觸控技術", "Surface Light Wave 紅外線觸控"],
  ["觸控點數", "50 點多點觸控"],
  ["觸控精度", "32767 × 32767"],
  ["背光壽命", "50,000 小時"],
  ["喇叭", "20W × 2（內建）"],
  ["作業系統", "Android 14（可升級）"],
  ["記憶體", "8GB RAM + 128GB（可升 16GB+256GB）"],
  ["Wi-Fi", "Wi-Fi 6（2.4G / 5G）"],
  ["藍牙", "BTS 2"],
  ["輸入端口", "HDMI×3, DP×1, VGA×1, USB×6, Touch-USB×2, RJ45, MIC"],
  ["電源", "AC 100–240V, 50/60Hz"],
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
            KTA-PRO-FULL 系列 · 55" / 65" / 70" / 75" / 86" / 100"<br />
            4K · Android 14 · 50 點觸控 · 即租即用
          </p>
        </div>
      </section>

      {/* Common Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">所有尺寸共同特色</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {COMMON_FEATURES.map((f) => (
              <div key={f.title} className="bg-sky-50 rounded-2xl p-5">
                <div className="text-2xl mb-2">{f.icon}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard Sizes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">常規尺寸</h2>
          <p className="text-gray-500 text-center text-sm mb-10">55" · 65" · 75" · 86"</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STANDARD_SIZES.map((s) => (
              <div key={s.size} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-sky-600 to-sky-900 p-5 text-white text-center">
                  <div className="text-3xl font-bold mb-1">{s.size}</div>
                  <div className="text-sky-200 text-xs">{s.model}</div>
                </div>
                <div className="p-4 text-xs space-y-2">
                  <div>
                    <span className="text-gray-400">外觀尺寸</span>
                    <p className="text-gray-700 font-medium mt-0.5 leading-relaxed">{s.outer}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">顯示區域</span>
                    <p className="text-gray-700 font-medium mt-0.5">{s.display}</p>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <span className="text-gray-400">功耗</span>
                      <p className="text-gray-700 font-medium mt-0.5">{s.power}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">重量</span>
                      <p className="text-gray-700 font-medium mt-0.5">{s.weight}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Sizes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-3">特規尺寸</h2>
          <p className="text-gray-500 text-center text-sm mb-10">70" · 100"｜市場獨特規格，適合大型空間或特殊需求</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {SPECIAL_SIZES.map((s) => (
              <div key={s.size} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 p-6 text-white text-center">
                  <span className="text-xs bg-sky-400 text-white px-2 py-0.5 rounded-full font-bold mb-2 inline-block">{s.badge}</span>
                  <div className="text-4xl font-bold mb-1">{s.size}</div>
                  <div className="text-gray-400 text-xs">{s.model}</div>
                </div>
                <div className="p-5 text-sm space-y-3">
                  <div>
                    <span className="text-gray-400 text-xs">外觀尺寸</span>
                    <p className="text-gray-700 font-medium mt-0.5 leading-relaxed">{s.outer}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs">顯示區域</span>
                    <p className="text-gray-700 font-medium mt-0.5">{s.display}</p>
                  </div>
                  <div className="flex gap-6">
                    <div>
                      <span className="text-gray-400 text-xs">功耗</span>
                      <p className="text-gray-700 font-medium mt-0.5">{s.power}</p>
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs">重量</span>
                      <p className="text-gray-700 font-medium mt-0.5">{s.weight}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shared Specs Table */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">完整技術規格（所有尺寸共用）</h2>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <tbody>
                {SHARED_SPECS.map(([label, value], i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="py-3 px-5 text-gray-500 w-1/3">{label}</td>
                    <td className="py-3 px-5 text-gray-900 font-medium">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Software Add-ons */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{tProducts("software_title")}</h2>
            <p className="text-gray-500 text-sm">選配軟體讓觸控螢幕發揮更大效益</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{tProducts("dms_title")}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{tProducts("dms_desc")}</p>
                </div>
              </div>
            </div>
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎓</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{tProducts("classcraft_title")}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{tProducts("classcraft_desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-sky-400">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">找到適合的尺寸了嗎？</h2>
          <p className="text-sky-100 mb-6">填寫預約表單，業務 24 小時內與您確認細節與租金</p>
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
