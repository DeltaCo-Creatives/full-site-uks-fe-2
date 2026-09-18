import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { BeritaDetailPage } from "@/routes/BeritaDetailPage";
import { BeritaListPage } from "@/routes/BeritaListPage";
import { ContentPage } from "@/routes/ContentPage";
import { HomePage } from "@/routes/HomePage";
import { NotFoundPage } from "@/routes/NotFoundPage";
import { PraktikBaikDetailPage } from "@/routes/PraktikBaikDetailPage";
import { SearchPage } from "@/routes/SearchPage";
import { UptBerceritaDetailPage } from "@/routes/UptBerceritaDetailPage";
import { UptBerceritaListPage } from "@/routes/UptBerceritaListPage";

const contentRoutes = [
  "/uksm/tentang",
  "/uksm/trias",
  "/uksm/struktur-organisasi",
  "/uksm/manajemen",
  "/uksm/stratifikasi",
  "/sekolah-sehat",
  "/program/7kaih",
  "/program/mbg",
  "/program/ckg",
  "/program/asri",
  "/program/saih-gala-kreasi",
  "/mitra",
  "/publikasi",
  "/publikasi/buku-panduan",
  "/publikasi/infografis",
  "/publikasi/video",
  "/publikasi/produk-hukum",
  "/informasi",
  "/informasi/praktik-baik",
  "/informasi/agenda",
  "/informasi/aplikasi",
  "/kontak",
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="berita" element={<BeritaListPage />} />
        <Route path="berita/:slug" element={<BeritaDetailPage />} />
        <Route path="informasi/praktik-baik/:slug" element={<PraktikBaikDetailPage />} />
        <Route path="informasi/upt-bercerita" element={<UptBerceritaListPage />} />
        <Route path="informasi/upt-bercerita/:slug" element={<UptBerceritaDetailPage />} />
        <Route path="pencarian" element={<SearchPage />} />
        {contentRoutes.map((path) => (
          <Route key={path} path={path.slice(1)} element={<ContentPage />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
