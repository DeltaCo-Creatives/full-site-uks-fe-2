import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { BeritaDetailPage } from "@/routes/BeritaDetailPage";
import { BeritaListPage } from "@/routes/BeritaListPage";
import { ContentPage } from "@/routes/ContentPage";
import { HomePage } from "@/routes/HomePage";
import { NotFoundPage } from "@/routes/NotFoundPage";
import { SearchPage } from "@/routes/SearchPage";

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
  "/mitra",
  "/publikasi",
  "/publikasi/produk-hukum",
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
        <Route path="pencarian" element={<SearchPage />} />
        {contentRoutes.map((path) => (
          <Route key={path} path={path.slice(1)} element={<ContentPage />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
