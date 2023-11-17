export default function Configure() {
  return (
    <section id="configure">
      <h2>Paramétrer votre DHCP Server</h2>

      <p>
        Ci-dessous, vous trouverez un exemple de paramétrage du serveur DHCP sur l'EdgeRouter Ubiquiti, avec un maximum
        d'options configurables :
      </p>

      <pre><code className="whitespace-pre-line">
        {`configure

    # Activation du service DHCP sur l'interface eth0
    set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 start 192.168.1.10 stop 192.168.1.100
    set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 default-router 192.168.1.1
    set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 dns-server 8.8.8.8
    set service dhcp-server shared-network-name LAN subnet 192.168.1.0/24 lease 86400

    # Ajout d'un deuxième serveur DHCP sur une autre interface
    set interfaces ethernet eth1 address 192.168.2.1/24
    set service dhcp-server shared-network-name LAN2 subnet 192.168.2.0/24 start 192.168.2.10 stop 192.168.2.100
    set service dhcp-server shared-network-name LAN2 subnet 192.168.2.0/24 default-router 192.168.2.1
    set service dhcp-server shared-network-name LAN2 subnet 192.168.2.0/24 dns-server 8.8.8.8
    set service dhcp-server shared-network-name LAN2 subnet 192.168.2.0/24 lease 86400

    # Ajout d'un troisième serveur DHCP sur une interface VLAN
    set interfaces ethernet eth2 vif 10 address 192.168.3.1/24
    set service dhcp-server shared-network-name VLAN10 subnet 192.168.3.0/24 start 192.168.3.10 stop 192.168.3.100
    set service dhcp-server shared-network-name VLAN10 subnet 192.168.3.0/24 default-router 192.168.3.1
    set service dhcp-server shared-network-name VLAN10 subnet 192.168.3.0/24 dns-server 8.8.8.8
    set service dhcp-server shared-network-name VLAN10 subnet 192.168.3.0/24 lease 86400

    commit
    save
    exit`}
      </code></pre>

      <p>
        Ces commandes définissent trois serveurs DHCP, chacun avec ses propres paramètres, sur différentes interfaces du
        routeur.
      </p>
    </section>
  )
}
