export default function Advanced() {
  return (
    <section id="advanced">
      <h2>Configuration Avancée</h2>

      <p>
        Ci-dessous, vous trouverez des configurations avancées de NAT sur l'EdgeRouter Ubiquiti, incluant des options que nous n'avons pas précisées précédemment :
      </p>

      <pre><code className="whitespace-pre-line">
        {`configure

    # Activation de la hairpin NAT pour permettre aux clients internes d'accéder aux ressources internes via l'adresse publique
    set service nat rule 3 type source
    set service nat rule 3 source address 192.168.1.0/24
    set service nat rule 3 outbound-interface eth0
    set service nat rule 3 outside-address address 203.0.113.1
    set service nat rule 3 hairpin-nat enable

    # Activation du masquerading pour masquer les adresses privées
    set service nat rule 4 type masquerade
    set service nat rule 4 outbound-interface eth0

    commit
    save
    exit`}
      </code></pre>

      <p>
        Ces commandes montrent comment configurer la hairpin NAT pour permettre aux clients internes d'accéder aux ressources internes via l'adresse publique, et comment activer le masquerading pour masquer les adresses privées.
      </p>
    </section>
  )
}
