import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ScheduleProvider } from "@/lib/ScheduleContext";

const notoSansKR = Noto_Sans_KR({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "스마트 수업교체 도우미",
  description: "선생님들을 위한 스마트 수업교체 및 협의회 시간 탐색 웹앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.className} bg-teal-50 text-slate-800 min-h-screen`}>
        <ScheduleProvider>
          {children}
        </ScheduleProvider>
      </body>
    </html>
  );
}
