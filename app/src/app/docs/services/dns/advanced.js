export default function Advanced() {
  return (
    <section id="advanced">
      <h2>Configuration Avancée</h2>

      <p>
        Ci-dessous, vous trouverez des configurations avancées du service DNS sur l'EdgeRouter Ubiquiti, incluant des options que nous n'avons pas précisées précédemment :
      </p>

      <pre><code className="whitespace-pre-line">
        {`configure

    # Configuration du DNS forwarding pour utiliser des serveurs DNS spécifiques par interface
    set service dns forwarding options server=/localdomain/192.168.1.1
    set service dns forwarding options server=/otherdomain/192.168.1.2

    # Activation de la résolution DNS via des serveurs DNS spécifiques par interface
    set interfaces ethernet eth1 dns-server 192.168.1.3
    set interfaces ethernet eth2 dns-server 192.168.2.3

    commit
    save
    exit`}
      </code></pre>

      <p>
        Ces commandes montrent comment configurer le DNS forwarding pour utiliser des serveurs DNS spécifiques pour des domaines particuliers et activer la résolution DNS via des serveurs DNS spécifiques par interface.
      </p>
    </section>
  )
}
