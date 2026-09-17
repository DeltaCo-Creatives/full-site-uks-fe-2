import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { usePageMeta } from "@/hooks/usePageMeta";

export function NotFoundPage() {
  usePageMeta("Halaman Tidak Ditemukan");
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Reveal className="mx-auto max-w-md text-center">
          <p className="font-display text-6xl text-brand-700">404</p>
          <h1 className="mt-4 font-display text-2xl text-ink-950">Halaman tidak ditemukan</h1>
          <p className="mt-3 text-ink-700">Halaman yang Anda cari mungkin telah dipindahkan atau belum tersedia.</p>
          <LinkButton href="/" className="mt-6">
            Kembali ke Beranda
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
