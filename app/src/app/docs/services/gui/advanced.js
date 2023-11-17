export default function Advanced() {
  return (
    <section id="advanced">
      <h2>Configuration Avancée</h2>

      <p>
        Ci-dessous, vous trouverez des configurations avancées de l'interface graphique sur l'EdgeRouter Ubiquiti, incluant des options que nous n'avons pas précisées précédemment :
      </p>

      <pre><code className="whitespace-pre-line">
        {`configure

    # Activation de la connexion à l'interface graphique via HTTP (non sécurisé)
    set service gui https-port 80

    # Configuration de l'accès à l'interface graphique via des adresses IP spécifiques
    set service gui listen-address 192.168.1.1
    set service gui listen-address 203.0.113.1

    # Configuration du timeout de l'interface graphique
    set service gui session-timeout 1800

    commit
    save
    exit`}
      </code></pre>

      <p>
        Ces commandes montrent comment activer la connexion à l'interface graphique via HTTP, configurer l'accès via des adresses IP spécifiques, et ajuster le timeout de session pour l'interface graphique.
      </p>
    </section>
  )
}
