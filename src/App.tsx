import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { redirects } from "@/content/redirects";
import { BeritaDetailPage } from "@/routes/BeritaDetailPage";
import { BeritaListPage } from "@/routes/BeritaListPage";
import { ContentPage } from "@/routes/ContentPage";
import { HomePage } from "@/routes/HomePage";
import { HashAwareRedirect, LegacySlugRedirect, ProgramIndexRoute } from "@/routes/LegacyRedirects";
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

// /uksm/profil and /uksm/sekolah-sehat need to inspect the incoming hash to
// pick a destination (see src/content/redirects.ts hashRedirects), so they
// get their own <Route> with HashAwareRedirect instead of the generic
// path→path loop below.
const HASH_AWARE_PATHS = new Set(["/uksm/profil", "/uksm/sekolah-sehat"]);
const staticRedirects = redirects.filter((r) => !HASH_AWARE_PATHS.has(r.from));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="berita" element={<BeritaListPage />} />
        <Route path="berita/:slug" element={<BeritaDetailPage />} />
        <Route path="program" element={<ProgramIndexRoute />} />
        <Route path="informasi/praktik-baik/:slug" element={<PraktikBaikDetailPage />} />
        <Route path="informasi/upt-bercerita" element={<UptBerceritaListPage />} />
        <Route path="informasi/upt-bercerita/:slug" element={<UptBerceritaDetailPage />} />
        <Route path="pencarian" element={<SearchPage />} />
        {contentRoutes.map((path) => (
          <Route key={path} path={path.slice(1)} element={<ContentPage />} />
        ))}

        {/* Legacy redirects — see src/content/redirects.ts for the full old→new map. */}
        <Route path="uksm/profil" element={<HashAwareRedirect fallbackTo="/uksm/tentang" />} />
        <Route path="uksm/sekolah-sehat" element={<HashAwareRedirect fallbackTo="/sekolah-sehat" />} />
        <Route path="halaman/berita/:slug" element={<LegacySlugRedirect toBase="/berita" />} />
        <Route path="informasi/berita/:slug" element={<LegacySlugRedirect toBase="/berita" />} />
        <Route path="tentang-uks-v2/:slug" element={<Navigate to="/uksm/tentang" replace />} />
        {staticRedirects.map((r) => (
          <Route key={r.from} path={r.from.slice(1)} element={<Navigate to={r.to} replace />} />
        ))}

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
