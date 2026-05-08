import { getTranslations } from "next-intl/server";

const FAQS = [
  {
    q: "最短租期是多久？",
    a: "最短 1 天，可依活動需求彈性安排，亦支援週租、月租，租期越長單日租金越優惠。",
  },
  {
    q: "是否提供送貨安裝服務？",
    a: "是，我們提供台灣本島送貨服務，可協助現場定位安裝，確認設備功能正常後才離開。",
  },
  {
    q: "設備損壞如何處理？",
    a: "正常使用下如有設備問題，我們負責維修或更換。因人為操作不當造成的損壞，費用依實際情況討論。",
  },
  {
    q: "可以同時租多台嗎？",
    a: "可以，55\" 目前庫存 28 台，65\" 庫存 2 台，多台租借歡迎直接洽業務確認檔期。",
  },
  {
    q: "可以試用軟體再決定是否加購嗎？",
    a: "DMS+ 的 APK 可提供試用版，在有觸控螢幕的環境下即可測試；ClassCraft 可提供 Windows 安裝檔試用。",
  },
  {
    q: "是否可以買斷設備？",
    a: "可以，買斷需求請透過「聯繫業務」按鈕，業務會為您提供採購報價。",
  },
];

export default async function FaqPage() {
  const t = await getTranslations("faq");

  return (
    <div className="flex flex-col">
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">{t("page_title")}</h1>
          <p className="text-gray-300">{t("page_subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl p-6 hover:border-sky-200 hover:shadow-sm transition-all">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-sky-400 font-mono text-sm mt-0.5">Q{i + 1}</span>
                  {faq.q}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center bg-sky-50 rounded-2xl p-8">
            <p className="text-gray-700 font-medium mb-2">還有其他問題？</p>
            <p className="text-gray-500 text-sm">透過右上角「聯繫業務」按鈕，我們的業務代表將在 24 小時內回覆您</p>
          </div>
        </div>
      </section>
    </div>
  );
}
