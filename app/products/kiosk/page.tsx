import Link from "next/link";

export default function KioskPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-3">即將上架</p>
          <h1 className="text-4xl font-bold mb-4">觸控直立廣告機</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            落地式觸控廣告機，適合門市導引、展覽互動，詳細規格與租金請洽業務
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <div className="text-7xl mb-6">📺</div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">規格資訊準備中</h2>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              觸控直立廣告機即將上架。如有緊急需求，歡迎直接聯繫業務，提前了解規格與租賃安排。
            </p>
            <Link
              href="/booking"
              className="inline-block bg-sky-400 hover:bg-sky-300 text-white font-bold px-8 py-3 rounded-lg transition-colors"
            >
              聯繫業務了解更多
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
