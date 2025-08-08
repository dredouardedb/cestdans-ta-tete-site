import siteConfig from "../site.config";

export default function Home() {
  const sections = [
   
    { id: 'hub', label: 'Hub des réseaux' },
    { id: 'revue', label: 'Revue de littérature' },
    { id: 'ressources', label: 'Ressources' },
    { id: 'ateliers', label: 'Ateliers' },
    { id: 'pros', label: 'Pour les pros' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-2xl bg-neutral-900 text-white grid place-items-center font-bold">EB</div>
            <div>
              <h1 className="text-lg font-semibold leading-tight">{siteConfig.brand}</h1>
              <p className="text-xs text-neutral-600">{siteConfig.tagline}</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-4 text-sm">
            <a href="/a-propos" className="px-3 py-2 rounded-xl hover:bg-neutral-100">À propos</a>
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="px-3 py-2 rounded-xl hover:bg-neutral-100">{s.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#newsletter" className="px-3 py-2 rounded-xl bg-neutral-900 text-white text-sm">Newsletter</a>
            <a href="#hub" className="px-3 py-2 rounded-xl border border-neutral-300 text-sm">S’abonner</a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Comprendre ton <span className="underline decoration-wavy decoration-neutral-300">psychisme</span>,<br className="hidden sm:block" /> sans prise de tête.
            </h2>
            <p className="mt-4 text-neutral-700 text-lg">
              Des explications claires (et parfois drôles) sur l’EMDR, la santé mentale et les addictions. Pro par métier, cool par choix.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#hub" className="px-4 py-3 rounded-2xl bg-neutral-900 text-white">Voir les derniers contenus</a>
              <a href="#revue" className="px-4 py-3 rounded-2xl border border-neutral-300">Explorer la revue de littérature</a>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-sm">
            <div className="grid grid-cols-3 gap-3">
              {['YouTube','Instagram','TikTok'].map((p) => (
                <div key={p} className="rounded-2xl border border-neutral-200 p-4">
                  <div className="aspect-video rounded-xl bg-neutral-100 mb-3" />
                  <p className="font-medium">{p}</p>
                  <p className="text-sm text-neutral-600">Dernières vidéos / posts</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-neutral-500">Placeholders d’intégration. Remplacer par vos iframes/embeds officiels une fois les comptes en ligne.</p>
          </div>
        </div>
      </section>

      <section id="hub" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-6">
          <h3 className="text-2xl md:text-3xl font-bold">Hub des réseaux</h3>
          <div className="text-sm text-neutral-600">Tout votre contenu, au même endroit</div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-neutral-200 p-4 bg-white">
            <div className="aspect-video rounded-2xl bg-neutral-100 mb-3 grid place-items-center text-sm text-neutral-500">YouTube Embed</div>
            <h4 className="font-semibold">Vidéos récentes</h4>
            <p className="text-sm text-neutral-600">Synchronisez automatiquement vos dernières vidéos.</p>
            <a className="mt-3 inline-block text-sm underline" href={siteConfig.social.youtube}>Voir la chaîne</a>
          </div>
          <div className="rounded-3xl border border-neutral-200 p-4 bg-white">
            <div className="aspect-square rounded-2xl bg-neutral-100 mb-3 grid place-items-center text-sm text-neutral-500">Instagram Grid</div>
            <h4 className="font-semibold">Posts & Reels</h4>
            <p className="text-sm text-neutral-600">Affichez une grille de vos 6 à 9 derniers posts.</p>
            <a className="mt-3 inline-block text-sm underline" href={siteConfig.social.instagram}>Voir le profil</a>
          </div>
          <div className="rounded-3xl border border-neutral-200 p-4 bg-white">
            <div className="aspect-[9/16] rounded-2xl bg-neutral-100 mb-3 grid place-items-center text-sm text-neutral-500">TikTok Feed</div>
            <h4 className="font-semibold">Shorts & TikToks</h4>
            <p className="text-sm text-neutral-600">Intégrez vos dernières vidéos verticales.</p>
            <a className="mt-3 inline-block text-sm underline" href={siteConfig.social.tiktok}>Voir le compte</a>
          </div>
        </div>
      </section>

      <section id="revue" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold">Revue de littérature</h3>
          <p className="text-neutral-700">Sélection commentée d’articles scientifiques et de livres sur l’EMDR, le trauma, la dissociation, les addictions, et la psychoéducation.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <article key={i} className="rounded-3xl border border-neutral-200 p-5 bg-white">
              <div className="text-xs uppercase tracking-wide text-neutral-500 mb-1">Article • {new Date().getFullYear()}</div>
              <h4 className="font-semibold text-lg">Titre de l’étude #{i}</h4>
              <p className="text-sm text-neutral-700 mt-2">Résumé bref (3–4 lignes) : objectif, méthode, principaux résultats, et implications cliniques. Ajouter un lien DOI ou éditeur.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {['EMDR','Trauma','Addiction'].map(t => (
                  <span key={t} className="px-2 py-1 rounded-full bg-neutral-100 border border-neutral-200">{t}</span>
                ))}
              </div>
              <a href="#" className="mt-4 inline-block text-sm underline">Lire la référence</a>
            </article>
          ))}
        </div>
        <div className="mt-6 text-sm text-neutral-600">Astuce : organisez par thèmes, utilisez un filtre, et proposez un flux RSS pour les nouvelles entrées.</div>
      </section>

      <section id="ressources" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold">Ressources & sites inspirants</h3>
          <p className="text-neutral-700">Sélection de sites, podcasts, conférences et outils utiles. Avec un bref commentaire sur pourquoi c’est pertinent.</p>
        </div>
        <ul className="grid md:grid-cols-2 gap-4">
          {[1,2,3,4,5,6].map(i => (
            <li key={i} className="rounded-2xl p-4 bg-white border border-neutral-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Nom de la ressource #{i}</p>
                  <p className="text-sm text-neutral-600">1–2 lignes sur l’intérêt clinique/pédagogique.</p>
                </div>
                <a href="#" className="text-sm underline whitespace-nowrap">Visiter</a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="ateliers" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold">Ateliers & événements</h3>
          <p className="text-neutral-700">Sessions en ligne (grand public) et formations/supervisions (pros). Ajoutez billetterie et replays.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="rounded-3xl border border-neutral-200 p-5 bg-white">
              <div className="text-xs text-neutral-500">En ligne • {i === 1 ? 'Grand public' : i === 2 ? 'Pros' : 'Tous'}</div>
              <h4 className="font-semibold mt-1">Titre de l’atelier #{i}</h4>
              <p className="text-sm text-neutral-700 mt-2">Pitch en 2–3 lignes : objectif, pour qui, bénéfices.</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="px-2 py-1 rounded-full bg-neutral-100 border border-neutral-200">60–90 min</span>
                <span className="font-semibold">59€</span>
              </div>
              <a href="#" className="mt-4 inline-block w-full text-center px-4 py-2 rounded-xl bg-neutral-900 text-white">S’inscrire</a>
            </div>
          ))}
        </div>
      </section>

      <section id="pros" className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-6">
          <h3 className="text-2xl md:text-3xl font-bold">Pour les professionnels</h3>
          <p className="text-neutral-700">Supervision EMDR Europe, formations avancées, et ressources cliniques.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-neutral-200 p-5 bg-white">
            <h4 className="font-semibold">Supervision (individuelle / groupe)</h4>
            <p className="text-sm text-neutral-700 mt-2">Cadre, fréquences, tarifs, éthique. Formulaire de demande et créneaux disponibles.</p>
            <a href="#" className="mt-3 inline-block text-sm underline">Demander un créneau</a>
          </div>
          <div className="rounded-3xl border border-neutral-200 p-5 bg-white">
            <h4 className="font-semibold">Formations & masterclass</h4>
            <p className="text-sm text-neutral-700 mt-2">EMDR (approfondissement), dissociation, addictions. Agenda et inscriptions.</p>
            <a href="#" className="mt-3 inline-block text-sm underline">Voir le catalogue</a>
          </div>
        </div>
      </section>

      <section id="newsletter" className="max-w-6xl mx-auto px-4 py-12">
        <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
          <div className="md:flex items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Newsletter : Sans prise de tête</h3>
              <p className="text-neutral-700 mt-2">1 email / 2 semaines. Des idées utiles, des références solides, et un peu d’humour.</p>
            </div>
            <form className="mt-4 md:mt-0 flex gap-2 w-full md:w-auto">
              <input type="email" placeholder="votre@email" className="flex-1 md:w-80 px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none" />
              <button type="button" className="px-4 py-3 rounded-xl bg-neutral-900 text-white">S’inscrire</button>
            </form>
          </div>
          <p className="text-xs text-neutral-500 mt-3">En vous inscrivant, vous acceptez la politique de confidentialité. Désinscription en 1 clic.</p>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <div className="rounded-3xl border border-neutral-200 p-6 bg-white">
          <h3 className="text-2xl md:text-3xl font-bold">Contact</h3>
          <p className="text-neutral-700 mt-2">Pour les médias, partenariats, supervision et interventions.</p>
          <form className="grid md:grid-cols-2 gap-4 mt-4">
            <input className="px-4 py-3 rounded-xl border border-neutral-300" placeholder="Nom" />
            <input className="px-4 py-3 rounded-xl border border-neutral-300" placeholder="Email" />
            <input className="md:col-span-2 px-4 py-3 rounded-xl border border-neutral-300" placeholder="Sujet" />
            <textarea className="md:col-span-2 px-4 py-3 rounded-xl border border-neutral-300 min-h-32" placeholder="Message" />
            <button type="button" className="md:col-span-2 px-4 py-3 rounded-xl bg-neutral-900 text-white">Envoyer</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6 text-sm">
          <div>
            <div className="font-semibold">{siteConfig.brand}</div>
            <p className="text-neutral-600 mt-2">Santé mentale & EMDR, expliquées simplement, avec sérieux… et humour.</p>
          </div>
          <div>
            <div className="font-semibold">Plan du site</div>
            <ul className="mt-2 space-y-1">
              {sections.map(s => (
                <li key={s.id}><a href={`#${s.id}`} className="hover:underline">{s.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-semibold">Réseaux</div>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href={siteConfig.social.youtube}>YouTube</a></li>
              <li><a className="hover:underline" href={siteConfig.social.instagram}>Instagram</a></li>
              <li><a className="hover:underline" href={siteConfig.social.tiktok}>TikTok</a></li>
              <li><a className="hover:underline" href={siteConfig.social.newsletter}>Newsletter</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Légal</div>
            <ul className="mt-2 space-y-1">
              <li><a className="hover:underline" href="/mentions-legales">Mentions légales</a></li>
              <li><a className="hover:underline" href="/politique-de-confidentialite">Politique de confidentialité</a></li>
              <li><a className="hover:underline" href="#">Cookies</a></li>
              <li><a href="/a-propos" className="hover:underline">À propos</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-neutral-500 pb-8">© {new Date().getFullYear()} Edouard Bougueret. Tous droits réservés.</div>
      </footer>
    </div>
  );
}
