import siteConfig from "../site.config";
export default function MentionsLegales() {
  const L = siteConfig.legal;
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Mentions légales</h1>
      <div className="mt-6 space-y-6 text-neutral-800">
        <section>
          <h2 className="text-xl font-semibold">Éditeur du site</h2>
          <p>{L.entityName}<br/>{L.address}<br/>Email : <a className="underline" href={`mailto:${L.email}`}>{L.email}</a></p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Hébergement</h2>
          <p>{L.host}</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Propriété intellectuelle</h2>
          <p>Le contenu de ce site (textes, images, vidéos, logos) est protégé par le droit d’auteur. Toute reproduction est interdite sans autorisation préalable.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Responsabilité</h2>
          <p>Les informations fournies ont un but éducatif et ne remplacent pas une consultation médicale. En cas d’urgence, contactez les services d’urgence.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">SIRET / Registre</h2>
          <p>{L.siret || "À compléter"}</p>
        </section>
      </div>
    </main>
  );
}
