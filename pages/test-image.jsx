export default function TestImage() {
  return (
    <main style={{padding: 24}}>
      <h1 style={{fontFamily: 'sans-serif'}}>Test image externe</h1>

      <p>Si tu vois une image juste en dessous, tout va bien côté affichage :</p>

      <div style={{border: '2px solid red', padding: 12, marginTop: 12}}>
        <img
          src="https://picsum.photos/600/400"
          alt="Test picsum"
          style={{display: 'block', width: '100%', height: 'auto'}}
        />
      </div>

      <p style={{marginTop: 12}}>Si cette image s'affiche, le souci vient de la page À propos (layout/CSS).</p>
    </main>
  );
}
