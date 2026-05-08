import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function BookingPage() {
  const t = await getTranslations("booking");

  return (
    <div className="flex flex-col">
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-3">{t("page_title")}</h1>
          <p className="text-gray-300">{t("page_subtitle")}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-sky-50 rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">📋</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">預約表單建置中</h2>
            <p className="text-gray-500 text-sm mb-6">
              線上表單即將上線，目前請直接聯繫業務代表，我們將為您量身安排
            </p>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-xl p-5 border border-sky-100 text-left">
                <p className="font-bold text-gray-700 mb-2 text-sm">聯繫業務（點擊右上角「聯繫業務」按鈕）</p>
                <p className="text-xs text-gray-400">依您所在區域連結專屬業務，透過 LINE 即時諮詢</p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-sky-100 text-left">
                <p className="font-bold text-gray-700 mb-1 text-sm">需要提供的資訊</p>
                <ul className="text-xs text-gray-500 space-y-1 mt-2">
                  <li>• 活動名稱與日期</li>
                  <li>• 使用地點（縣市）</li>
                  <li>• 需要的螢幕尺寸與台數</li>
                  <li>• 是否需要送貨安裝服務</li>
                  <li>• 是否需要軟體選配（DMS+ / ClassCraft）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
