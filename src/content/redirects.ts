/**
 * Old URL → new location, for every legacy path this rebuild has a home
 * for. Two sources, both in docs/sitemaps/sitemap-portal-uks.md:
 *
 *  - §1/§2: sitemap-*proposed* URLs that don't match this app's actual
 *    routes, because this app keeps route-per-topic URLs (e.g. /sekolah-sehat,
 *    /uksm/tentang) instead of the sitemap's single-page-with-anchors model
 *    (e.g. /uksm/sekolah-sehat#bergizi). Those proposed URLs never existed on
 *    a real server, but they're what the IA review and any external links
 *    from that review will use, so they're redirected here too.
 *  - §3: the real legacy redirect map, from both prod
 *    (uks.kemendikdasmen.go.id) and dev (portal-uks.demo.or.id).
 *
 * Rows already served by an identical path in this app (e.g. prod's
 * `/kontak` → our `/kontak`) are left out — there's nothing to redirect.
 * Rows needing a URL param (a slug, or a legacy `?kategori=` code) are
 * handled by the small components in src/routes/LegacyRedirects.tsx instead,
 * since <Navigate> alone can't rewrite a path segment.
 */
export interface Redirect {
  from: string;
  to: string;
}

export const redirects: Redirect[] = [
  // --- §1/§2: sitemap-proposed URLs that differ from our routes ---
  // Hash variants of these two (e.g. /uksm/profil#deskripsi,
  // /uksm/sekolah-sehat#bergizi) are in hashRedirects below — a <Route path>
  // can't match on location.hash, so those need a component that reads it.
  { from: "/uksm/profil", to: "/uksm/tentang" },
  { from: "/uksm/sekolah-sehat", to: "/sekolah-sehat" },
  { from: "/informasi/berita", to: "/berita" },

  // --- §3: prod (uks.kemendikdasmen.go.id) ---
  { from: "/tentang-uks/deskripsi-umum", to: "/uksm/tentang" },
  { from: "/tentang-uks/tujuan", to: "/uksm/tentang" },
  { from: "/tentang-uks/sasaran", to: "/uksm/tentang" },
  { from: "/tentang-uks/struktur-organisasi-tim-pembina", to: "/uksm/struktur-organisasi" },
  { from: "/tentang-uks/struktur-organisasi-timpelaksana", to: "/uksm/struktur-organisasi" },
  { from: "/program/manajemen-uks-m", to: "/uksm/manajemen" },
  { from: "/program/pendidikan-kesehatan", to: "/uksm/trias#pendidikan-kesehatan" },
  { from: "/program/pelayanan-kesehatan", to: "/uksm/trias#pelayanan-kesehatan" },
  { from: "/program/pembinaan-lingkungan-sekolah-sehat", to: "/uksm/trias#pembinaan-lingkungan" },
  // The 16 prod sub-program slugs. docs/ only confirms these 4 match their
  // Trias item id 1:1 (content-inventory.md T-02…T-17); the rest assume the
  // same pattern and need checking against prod before this can be trusted.
  // TODO(content): verify the 12 unconfirmed slugs below against prod.
  { from: "/program/literasi-kesehatan", to: "/uksm/trias#literasi-kesehatan" },
  { from: "/program/perilaku-hidup-bersih-dan-sehat", to: "/uksm/trias#perilaku-hidup-bersih-dan-sehat" },
  { from: "/program/pendidikan-gizi", to: "/uksm/trias#pendidikan-gizi" },
  { from: "/program/pendidikan-kesehatan-reproduksi", to: "/uksm/trias#pendidikan-kesehatan-reproduksi" },
  { from: "/program/pendidikan-karakter", to: "/uksm/trias#pendidikan-karakter" },
  { from: "/program/pembiasaan-aktivitas-fisik", to: "/uksm/trias#pembiasaan-aktivitas-fisik" },
  { from: "/program/dokter-kecil", to: "/uksm/trias#dokter-kecil" },
  { from: "/program/penjaringan-kesehatan-dan-pemeriksaan-berkala", to: "/uksm/trias#penjaringan-kesehatan-dan-pemeriksaan-berkala" },
  { from: "/program/imunisasi", to: "/uksm/trias#imunisasi" },
  { from: "/program/pemberian-obat-cacing", to: "/uksm/trias#pemberian-obat-cacing" },
  { from: "/program/p3k-dan-p3p", to: "/uksm/trias#p3k-dan-p3p" },
  { from: "/program/sanitasi-sekolah", to: "/uksm/trias#sanitasi-sekolah" },
  { from: "/program/pembinaan-kantin-sehat", to: "/uksm/trias#pembinaan-kantin-sehat" },
  { from: "/program/pemanfaatan-pekarangan-sekolah", to: "/uksm/trias#pemanfaatan-pekarangan-sekolah" },
  { from: "/program/pemberantasan-sarang-nyamuk", to: "/uksm/trias#pemberantasan-sarang-nyamuk" },
  { from: "/program/kawasan-tanpa-rokok-napza-kekerasan-pornografi", to: "/uksm/trias#kawasan-tanpa-rokok-napza-kekerasan-pornografi" },
  { from: "/sekolah-sehat/gerakan-sekolah-sehat", to: "/sekolah-sehat" },
  { from: "/sekolah-sehat/sehat-bergizi", to: "/sekolah-sehat#sehat-bergizi" },
  { from: "/sekolah-sehat/sehat-fisik", to: "/sekolah-sehat#sehat-fisik" },
  { from: "/sekolah-sehat/sehat-imunisasi", to: "/sekolah-sehat#sehat-imunisasi" },
  { from: "/sekolah-sehat/sehat-jiwa", to: "/sekolah-sehat#sehat-jiwa" },
  { from: "/sekolah-sehat/sehat-lingkungan", to: "/sekolah-sehat#sehat-lingkungan" },
  { from: "/sekolah-sehat/bahan-advokasi", to: "/sekolah-sehat#bahan-advokasi" },
  { from: "/sekolah-sehat/mitra-sekolah-sehat", to: "/mitra" },
  { from: "/program/cek-kesehatan-gratis", to: "/program/ckg" },
  { from: "/gala-kreasi/informasi-lomba-saih-2025", to: "/program/saih-gala-kreasi" },
  { from: "/gala-kreasi/pengumuman-pemenang-2025", to: "/program/saih-gala-kreasi" },
  { from: "/gala-kreasi/gala-kreasi-2024", to: "/program/saih-gala-kreasi" },
  { from: "/gala-kreasi/gala-kreasi-2024-pemenang", to: "/program/saih-gala-kreasi" },
  { from: "/gala-kreasi/gala-kreasi-2024-video-pemenang", to: "/program/saih-gala-kreasi" },
  { from: "/gala-kreasi/gala-kreasi-2023", to: "/program/saih-gala-kreasi" },
  { from: "/mitra/panduan-kemitraan", to: "/mitra#panduan" },
  { from: "/mitra/pendaftaran-mitra", to: "/mitra#kriteria" },
  { from: "/mitra/mitra-kami", to: "/mitra#mitra-kami" },
  { from: "/aktifitas-mitra", to: "/mitra#dukungan" },
  { from: "/mitra/dukungan-mitra", to: "/mitra#dukungan" },
  { from: "/halaman/berita", to: "/berita" },
  { from: "/dokumen/produk-hukum", to: "/publikasi/produk-hukum" },
  { from: "/dokumen/publikasi/buku-panduan", to: "/publikasi/buku-panduan" },
  { from: "/dokumen/publikasi/infografis", to: "/publikasi/infografis" },
  { from: "/dokumen/publikasi/video", to: "/publikasi/video" },
  { from: "/faq", to: "/kontak" },

  // --- §3: dev only (portal-uks.demo.or.id) ---
  { from: "/tentang-uks", to: "/uksm/tentang" },
  { from: "/trias-uks", to: "/uksm/trias" },
  { from: "/manajemen-uks", to: "/uksm/manajemen" },
  { from: "/stratifikasi-uks", to: "/uksm/stratifikasi" },
  { from: "/7kaih", to: "/program/7kaih" },
  { from: "/mbg", to: "/program/mbg" },
  { from: "/ckg", to: "/program/ckg" },
  { from: "/asri", to: "/program/asri" },
  { from: "/mitra-uks", to: "/mitra" },
  // dev "-v1" duplicates of the routes above (docs/sitemaps/sitemap-portal-uks.md §3:
  // "same target as their non-v1 page").
  { from: "/tentang-uks-v1", to: "/uksm/tentang" },
  { from: "/trias-uks-v1", to: "/uksm/trias" },
  { from: "/manajemen-uks-v1", to: "/uksm/manajemen" },
  { from: "/stratifikasi-uks-v1", to: "/uksm/stratifikasi" },
  { from: "/7kaih-v1", to: "/program/7kaih" },
  { from: "/mbg-v1", to: "/program/mbg" },
  { from: "/ckg-v1", to: "/program/ckg" },
  { from: "/asri-v1", to: "/program/asri" },
  { from: "/mitra-uks-v1", to: "/mitra" },
];

/**
 * Redirects that depend on the URL's hash, not just its path — React Router
 * matches <Route path> against the pathname only, so these need a component
 * that reads location.hash itself (see src/routes/LegacyRedirects.tsx).
 * Keyed by the old pathname; each value maps an old hash (without "#") to
 * the new full path (which may itself carry a "#" for the new anchor). A
 * hash not listed here falls back to the plain path→path row in `redirects`
 * above for the same pathname.
 */
export const hashRedirects: Record<string, Record<string, string>> = {
  "/uksm/profil": {
    deskripsi: "/uksm/tentang",
    tujuan: "/uksm/tentang",
    sasaran: "/uksm/tentang",
    struktur: "/uksm/struktur-organisasi",
    manajemen: "/uksm/manajemen",
  },
  "/uksm/sekolah-sehat": {
    konsep: "/sekolah-sehat",
    bergizi: "/sekolah-sehat#sehat-bergizi",
    fisik: "/sekolah-sehat#sehat-fisik",
    imunisasi: "/sekolah-sehat#sehat-imunisasi",
    jiwa: "/sekolah-sehat#sehat-jiwa",
    lingkungan: "/sekolah-sehat#sehat-lingkungan",
    "bahan-advokasi": "/sekolah-sehat#bahan-advokasi",
  },
};

/**
 * /program is a real page (programIndexPage) now, not a pure redirect, so
 * it isn't in hashRedirects above — only a hash matching one of these
 * program anchors sends the visitor on to that program's own route; no
 * hash (or an unrecognised one) renders the index page normally. See
 * ProgramIndexRoute in src/routes/LegacyRedirects.tsx.
 */
export const programHashRedirects: Record<string, string> = {
  mbg: "/program/mbg",
  ckg: "/program/ckg",
  "7kaih": "/program/7kaih",
  asri: "/program/asri",
  "saih-gala-kreasi": "/program/saih-gala-kreasi",
};
