export default function Configure() {
  return (
    <section id="configure">
      <h2>Paramétrer votre NAT</h2>

      <p>
        Ci-dessous, vous trouverez un exemple de paramétrage de NAT sur l'EdgeRouter Ubiquiti avec des commandes et leur description :
      </p>

      <pre><code className="whitespace-pre-line">
        {`configure

    # Activation de la translation d'adresse source (SNAT) pour les clients LAN
    set service nat rule 1 type source
    set service nat rule 1 outbound-interface eth0
    set service nat rule 1 source address 192.168.1.0/24
    set service nat rule 1 outside-address address 203.0.113.1

    # Activation de la translation d'adresse destination (DNAT) pour les serveurs Web
    set service nat rule 2 type destination
    set service nat rule 2 inbound-interface eth0
    set service nat rule 2 destination address 203.0.113.1
    set service nat rule 2 destination port 80
    set service nat rule 2 inside-address address 192.168.1.10

    commit
    save
    exit`}
      </code></pre>

      <p>
        Ces commandes définissent deux règles NAT, l'une pour la translation d'adresse source (SNAT) pour les clients LAN, et l'autre pour la translation d'adresse destination (DNAT) pour les serveurs Web.
      </p>
    </section>
  )
}
