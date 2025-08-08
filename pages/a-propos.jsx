import siteConfig from "../site.config";
export default function APropos() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">À propos</h1>
      <p className="mt-4 text-neutral-700 text-lg">
        Bonjour, je suis <strong>{siteConfig.owner.name}</strong>, médecin psychiatre spécialisé en addictologie,
        praticien & superviseur EMDR Europe. J’aide à comprendre le fonctionnement du psychisme — avec sérieux,
        pédagogie, et une bonne dose d’humour.
      </p>
      <div className="mt-8 space-y-4">
        <section>
          <h2 className="text-xl font-semibold">Parcours</h2>
          <p className="text-neutral-700">
            12 ans en centre spécialisé en addictions, formation à la thérapie systémique, EMDR et thérapie des schémas.
            Praticien EMDR Europe depuis 2015, superviseur EMDR Europe et facilitateur pour l'EDEPHE.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Approche</h2>
          <p className="text-neutral-700">
            Une approche intégrative corps-esprit (yoga 200h — hatha, yin, vinyasa) et ancrée dans les données probantes.
            Objectif : rendre la santé mentale accessible, compréhensible et actionnable.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="text-neutral-700">
            Pour les médias, partenariats, supervision : <a className="underline" href={`mailto:${siteConfig.owner.email}`}>{siteConfig.owner.email}</a>
          </p>
        </section>
      </div>
    </main>
  );
}
