export default function Advanced() {
  return (
    <section id="advanced">
      <h2>Configuration Avancée</h2>

      <p>
        Ci-dessous, vous trouverez des configurations avancées du service DHCP sur l'EdgeRouter Ubiquiti, incluant des
        options que nous n'avons pas précisées précédemment :
      </p>

      <pre><code className="whitespace-pre-line">
        {`configure

    # Activation du service DHCP avec une durée de bail spécifique
    set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 lease 7200

    # Activation de l'émission de noms de domaine dans les offres DHCP
    set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 domain-name example.com

    # Activation de la réservation d'adresses IP basée sur l'adresse MAC
    set service dhcp-server shared-network-name LAN static-mapping 00:11:22:33:44:55 ip-address 192.168.1.101

    # Configuration du serveur DNS préféré et alternatif dans l'offre DHCP
    set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 dns-server 8.8.8.8
    set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 dns-server 8.8.4.4

    # Configuration d'un nom d'hôte pour un client DHCP spécifique
    set service dhcp-server shared-network-name LAN static-mapping 00:11:22:33:44:55 host-name my-device

    # Configuration d'un serveur TFTP pour les clients DHCP
    set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 tftp-server-name tftp.example.com

    commit
    save
    exit`}
      </code></pre>

      <p>
        Ces commandes montrent comment configurer des options avancées telles que la durée du bail DHCP, l'émission de noms
        de domaine, la réservation d'adresses IP basée sur l'adresse MAC, la configuration des serveurs DNS, la configuration
        d'un nom d'hôte pour un client spécifique, et la configuration d'un serveur TFTP.
      </p>
    </section>
  )
}
