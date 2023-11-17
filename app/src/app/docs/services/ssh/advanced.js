export default function Advanced() {
  return (
    <section id="advanced">
      <h2>Configuration Avancée de SSH</h2>

      <p>
        Ci-dessous, vous trouverez des configurations avancées du service SSH sur l'EdgeRouter Ubiquiti, incluant des options que nous n'avons pas précisées précédemment :
      </p>

      <pre><code className="whitespace-pre-line">
        {`configure

    # Configuration du temps d'inactivité pour la session SSH
    set service ssh idle-timeout 30

    # Activation de la version du protocole SSH
    set service ssh protocol-version 'v2'

    commit
    save
    exit`}
      </code></pre>

      <p>
        Ces commandes montrent comment configurer le temps d'inactivité pour la session SSH et activer une version spécifique du protocole SSH.
      </p>
    </section>
  )
}
