import Advanced from "./advanced";
import Configure from "./configure";

export default function Dns() {
  return (
    <article className="prose lg:prose-lg">
      <section>
        <h1>DNS</h1>

        <p>
          La configuration DNS sur l'EdgeRouter Ubiquiti permet de spécifier les serveurs DNS utilisés par le routeur et par les clients du réseau pour la résolution des noms de domaine en adresses IP.
        </p>
      </section>
    <Configure />
    <Advanced />
    </article>
  )
}
