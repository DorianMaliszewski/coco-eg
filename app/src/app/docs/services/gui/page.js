import Advanced from "./advanced";
import Configure from "./configure";

export default function GUI() {
  return (
    <article className="prose lg:prose-lg">
      <section>
        <h1>GUI</h1>

        <p>
          L'interface graphique utilisateur (GUI) sur l'EdgeRouter Ubiquiti offre une méthode conviviale pour la configuration et la gestion du routeur. Cette interface web simplifie l'administration du routeur pour les utilisateurs qui préfèrent une approche visuelle.
        </p>
      </section>
      <Configure />
      <Advanced />
    </article>
  )
}
