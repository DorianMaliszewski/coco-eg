import Advanced from "./advanced";
import Configure from "./configure";

export default function Nat() {
  return (
    <article className="prose">
      <section>
        <h1>NAT</h1>

        <p>
          La translation d'adresse réseau (NAT) sur l'EdgeRouter Ubiquiti permet de mapper des adresses IP privées sur des adresses IP publiques, facilitant ainsi la communication entre les réseaux privés et Internet.
        </p>
      </section>
      <Configure />
      <Advanced />
    </article>
  )
}
