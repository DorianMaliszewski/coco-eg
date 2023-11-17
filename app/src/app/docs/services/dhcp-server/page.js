import Advanced from "./advanced";
import Configure from "./configure";

export default function DhcpServer() {
  return (
    <article className="prose lg:prose-lg">
      <section>
        <h1>DHCP Server</h1>
        <p>
          Le serveur DHCP (Dynamic Host Configuration Protocol) sur l'EdgeRouter Ubiquiti permet d'attribuer automatiquement des
          adresses IP et d'autres informations de configuration réseau aux périphériques du réseau. Cette fonctionnalité est
          essentielle pour simplifier la gestion des adresses IP au sein de votre réseau.
        </p>
      </section>
      <Configure />
      <Advanced />
    </article>

  )
}
