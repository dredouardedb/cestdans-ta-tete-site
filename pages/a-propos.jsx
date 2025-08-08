dimport Image from "next/image";
import siteConfig from "../site.config";

export default function APropos() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 to-white" />
        <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            À propos —{" "}
            <span className="underline decoration-wavy decoration-neutral-300">
              {siteConfig.owner.name}
            </span>
          </h1>
          <div className="mt-4 p-3 rounded-xl bg-yellow-50 border border-yellow-200 text-sm">
  <p>Debug image : <a className="underline" href="/images/edouard-anime.png" target="_blank">/images/edouard-anime.png</a></p>
  <div className="mt-2">
    <img src="/images/edouard.jpg" alt="test img tag" style={{maxWidth:'200px', border:'1px solid #ddd'}} />
  </div>
</div>
          <p className="mt-4 text-neutral-700 text-lg md:text-xl max-w-3xl">
            Psychiatre spécialisé en addictologie, praticien & superviseur EMDR
            Europe, prof de yoga 200h. Mon credo :{" "}
            <strong>{siteConfig.tagline}</strong>
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            <span className="px-3 py-1 rounded-full bg-neutral-900 text-white">Psychiatre</span>
            <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">EMDR Europe</span>
            <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">Addictologie</span>
            <span className="px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200">Yoga 200h</span>
          </div>
        </div>
      </section>

      {/* PORTRAIT + INTRO */}
      <section className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[320px,1fr] gap-8">
        <div className="bg-white rounded-3xl border border-neutral-200 p-4 h-fit">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
<div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
<div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
  <img
    src="https://picsum.photos/600/750"
    alt="Test image externe"
    className="block w-full h-auto object-cover"
  />
</div>

        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-neutral-200 p-6">
            <h2 className="text-xl md:text-2xl font-semibold">Qui je suis</h2>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              Après 12 ans comme médecin psychiatre en centre spécialisé dans les addictions,
              je me suis orienté vers la psychothérapie. Formé à la thérapie systémique,
              à la thérapie EMDR et à la thérapie des schémas, j’accompagne aujourd’hui
              des personnes confrontées au trauma complexe, aux phobies et aux addictions —
              avec pédagogie, rigueur… et un peu d’humour.
            </p>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              La rencontre avec l’EMDR — comme patient puis comme praticien — a été
              déterminante. Elle m’a donné l’envie de transmettre : je suis praticien
              EMDR Europe depuis 2015, superviseur EMDR Europe et facilitateur pour l’EDEPHE.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
              <h3 className="text-lg font-semibold">Mon approche</h3>
              <p className="mt-2 text-neutral-700">
                Intégrative et fondée sur les preuves : EMDR, systémique, schémas,
                et une dimension corps–esprit (yoga hatha, yin, vinyasa — 200 h).
                Objectif : rendre le fonctionnement du psychisme compréhensible
                et actionnable au quotidien.
              </p>
              <ul className="mt-3 text-sm text-neutral-700 list-disc pl-5 space-y-1">
                <li>Pédagogie claire (sans jargon inutile)</li>
                <li>Humour dosé pour dédramatiser</li>
                <li>Cadre éthique et sécurisant</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
              <h3 className="text-lg font-semibold">En bref</h3>
              <ul className="mt-2 text-neutral-700 text-sm space-y-2">
                <li>👨‍⚕️ Psychiatre • addictologie</li>
                <li>🌀 EMDR Europe : praticien, superviseur, facilitateur (EDEPHE)</li>
                <li>🧘‍♂️ Yoga 200h (hatha, yin, vinyasa)</li>
                <li>📚 Revue régulière de littérature • formations</li>
              </ul>
            </div>
          </div>

          {/* TIMELINE */}
          <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
            <h3 className="text-lg font-semibold">Repères</h3>
            <ol className="mt-4 space-y-4">
              <li className="flex gap-3">
                <div className="mt-1 size-2 rounded-full bg-neutral-900" />
                <div>
                  <div className="text-sm text-neutral-500">2015</div>
                  <div className="font-medium">Praticien EMDR Europe</div>
                  <p className="text-neutral-700 text-sm">Début de la pratique EMDR (patient & praticien) — point de bascule.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 size-2 rounded-full bg-neutral-900" />
                <div>
                  <div className="text-sm text-neutral-500">2015–2024</div>
                  <div className="font-medium">Addictologie & psychothérapies</div>
                  <p className="text-neutral-700 text-sm">12 ans en centre d’addictologie + formations systémique & schémas.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="mt-1 size-2 rounded-full bg-neutral-900" />
                <div>
                  <div className="text-sm text-neutral-500">Aujourd’hui</div>
                  <div className="font-medium">Supervision & facilitation (EDEPHE)</div>
                  <p className="text-neutral-700 text-sm">Transmission, supervision de cas, accompagnement des praticiens.</p>
                </div>
              </li>
            </ol>
          </div>

          {/* HUMOUR / QUOTE */}
          <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
            <blockquote className="text-lg italic text-neutral-800">
              « Comprendre, c’est déjà commencer à changer — promis, sans prise de tête. »
            </blockquote>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${siteConfig.owner.email}`}
              className="px-5 py-3 rounded-2xl bg-neutral-900 text-white"
            >
              Contacter
            </a>
            <a
              href="/pros"
              className="px-5 py-3 rounded-2xl border border-neutral-300"
            >
              Supervision & formations
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
