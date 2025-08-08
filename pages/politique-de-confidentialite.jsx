import siteConfig from "../site.config";
export default function PolitiqueConfidentialite() {
  const L = siteConfig.legal;
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Politique de confidentialité</h1>
      <div className="mt-6 space-y-6 text-neutral-800">
        <section>
          <h2 className="text-xl font-semibold">Données collectées</h2>
          <p>Adresse email pour la newsletter, données d’usage (cookies analytiques anonymisés). Aucun suivi médical individuel via ce site.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Finalités</h2>
          <p>Envoi d’informations et de contenus pédagogiques, amélioration du site, statistiques anonymes.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Base légale</h2>
          <p>Consentement explicite pour la newsletter, intérêt légitime pour la sécurité et les statistiques anonymisées.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Conservation</h2>
          <p>Jusqu’à la désinscription de la newsletter ou au plus tard 3 ans après le dernier contact.</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Vos droits</h2>
          <p>Accès, rectification, suppression. Contact : <a className="underline" href={`mailto:${L.email}`}>{L.email}</a>. DPO : {L.dpo || "à définir"}.</p>
        </section>
      </div>
    </main>
  );
}
