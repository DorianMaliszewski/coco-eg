import Advanced from "./advanced";
import Configure from "./configure";

export default function Ssh() {
  return (
    <article className="prose lg:prose-lg">
      <section>
        <h1>SSH</h1>

        <p>
          La configuration du service SSH sur l'EdgeRouter Ubiquiti permet d'accéder à distance au routeur de manière sécurisée. SSH (Secure Shell) est un protocole de communication crypté utilisé pour administrer le routeur via une interface en ligne de commande.
        </p>
      </section>
      <Configure />
      <Advanced />
    </article>
  )
}
