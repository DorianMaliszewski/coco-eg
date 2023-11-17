export default function Interfaces() {
  return (
    <article className="prose lg:prose-lg">
      <section>
        <h1>1. Interfaces</h1>
        <p>
          Les interfaces sur l'EdgeRouter d'Ubiquiti sont essentielles pour la gestion du trafic réseau. Elles permettent de
          définir comment le routeur interagit avec le réseau, que ce soit pour connecter des périphériques locaux (LAN),
          accéder à Internet (WAN), ou mettre en œuvre des VLAN pour une segmentation plus poussée.
        </p>
      </section>
      <section id="types">

        <h2>2. Les Différents Types d'Interfaces</h2>

        <p>
          Sur l'EdgeRouter d'Ubiquiti, plusieurs types d'interfaces sont disponibles pour répondre à divers besoins de réseau.
          Les principaux types incluent :
        </p>

        <ul>
          <li><strong>Ethernet :</strong> Utilisé pour les connexions câblées.</li>
          <li><strong>Switch0 :</strong> Interface de commutation pour les ports du commutateur intégré.</li>
          <li><strong>Loopback :</strong> Interface virtuelle utilisée pour des tests ou des configurations spéciales.</li>
        </ul>
      </section>

      <section id="network">

        <h2>3. LAN, WAN, VLAN, Port VLAN</h2>

        <p>
          <strong>LAN (Local Area Network) :</strong> L'interface LAN est généralement utilisée pour connecter les périphériques
          locaux au sein d'un réseau privé. Elle peut être configurée avec une adresse IP privée.
        </p>

        <p>
          <strong>WAN (Wide Area Network) :</strong> L'interface WAN est utilisée pour connecter le routeur à Internet ou à un
          autre réseau externe. Elle est configurée avec une adresse IP publique.
        </p>

        <p>
          <strong>VLAN (Virtual Local Area Network) :</strong> Les VLAN permettent de segmenter le réseau en plusieurs sous-réseaux
          virtuels, chacun avec ses propres règles de sécurité et de gestion.
        </p>

        <p>
          <strong>Port VLAN :</strong> Un Port VLAN est une interface virtuelle associée à un VLAN spécifique sur un commutateur
          réseau. Chaque Port VLAN peut être configuré indépendamment avec ses propres paramètres.
        </p>
      </section>

      <section id="configure">

        <h2>4. Paramétrage d'une Interface</h2>
        <p>
          Ci-dessous, plusieurs exemples de paramétrage d'interfaces :
        </p>

        <h3>Adresse Statique</h3>
        <pre><code className="whitespace-pre-line">
          {`configure

          # Configuration de l'interface Ethernet avec une adresse IP statique
          set interfaces ethernet eth0 address 192.168.1.1/24
          set interfaces ethernet eth0 description 'LAN Interface - Static IP'

          commit
          save
          exit`}
        </code></pre>

        <h3>Adresse DHCP</h3>
        <pre><code className="whitespace-pre-line">
          {`configure

          # Configuration de l'interface Ethernet avec une adresse IP attribuée par DHCP
          set interfaces ethernet eth0 address dhcp
          set interfaces ethernet eth0 description 'LAN Interface - DHCP'

          commit
          save
          exit`}
        </code></pre>

        <h3>Avec une Règle du Firewall</h3>
        <pre><code className="whitespace-pre-line">
          {`configure

          # Configuration de l'interface Ethernet avec une adresse IP statique et une règle de pare-feu
          set interfaces ethernet eth0 address 192.168.1.1/24
          set interfaces ethernet eth0 description 'LAN Interface - Static IP with Firewall Rule'

          # Configuration d'une règle de pare-feu autorisant le trafic vers le port 80
          set firewall name LAN_IN rule 10 action accept
          set firewall name LAN_IN rule 10 destination port 80

          commit
          save
          exit`}
        </code></pre>

        <h3>Paramétrage d'une Interface switch0 avec VLANs</h3>
        <pre><code className="whitespace-pre-line">
          {`configure

      # Configuration de l'interface switch0 avec trois VLANs sur eth1, eth2 et eth3
      set interfaces ethernet eth1 vif 10 address 192.168.1.1/24
      set interfaces ethernet eth2 vif 20 address 192.168.2.1/24
      set interfaces ethernet eth3 vif 30 address 192.168.3.1/24
      set interfaces switch switch0 switch-port interface eth1 vlan 10
      set interfaces switch switch0 switch-port interface eth2 vlan 20
      set interfaces switch switch0 switch-port interface eth3 vlan 30
      set interfaces switch switch0 switch-port vlan-aware enable

      commit
      save
      exit`}
        </code></pre>

        <p>
          Ces exemples illustrent différentes configurations d'interfaces, y compris avec des adresses statiques, des adresses
          attribuées par DHCP, l'ajout de règles de pare-feu, et la configuration d'une interface switch0 avec des VLANs.
        </p>
      </section>
    </article>
  )
}
