export default function Advanced() {
  return (
      <section id="advanced">
        <h2>3. Configuration avancée</h2>
        <h3>Configurer la réponse aux pings (ICMP) :</h3>
        <p>
          La commande <code>set firewall options all-ping enable</code> autorise la réponse aux pings sur toutes les interfaces.
          De même, <code>set firewall options broadcast-ping enable</code> autorise la réponse aux pings broadcast.
        </p>
        <pre><code className="whitespace-pre-line">
          {`set firewall options all-ping enable
          set firewall options broadcast-ping enable`}
        </code></pre>

        <h3>Configurer un groupe de règles :</h3>
        <p>
          La commande <code>set firewall group network-group name GROUP_NAME network NETWORK</code> crée un groupe qui peut
          être utilisé dans plusieurs règles.
        </p>
        <pre><code>
          set firewall group network-group name MY_GROUP network 192.168.1.0/24
        </code></pre>

        <h3>Configurer la réception de messages de redirection IPv6 :</h3>
        <p>
          La commande <code>set firewall options ipv6-receive-redirects disable</code> permet de désactiver la réception des messages
          de redirection IPv6.
        </p>
        <pre><code>
          set firewall options ipv6-receive-redirects disable
        </code></pre>
        <h3>Configurer une règle basée sur un groupe d'adresses IPv6 :</h3>
        <p>En remplaçant <code>name</code> par <code>ipv6-name</code> on configure une règle uniquement pour les IPv6.</p>
        <pre><code className="whitespace-pre-line">
          {`set firewall ipv6-name MY_IPV6_RULE default-action drop
          set firewall ipv6-name MY_IPV6_RULE rule 10 action accept
          set firewall ipv6-name MY_IPV6_RULE rule 10 source group address-group MY_GROUP`}`
        </code></pre>

        <h3>Configurer une règle avec la source d'adresse IPv6 :</h3>
        <pre><code>
          set firewall ipv6-src-route disable
        </code></pre>

        <h3>Configurer une règle avec la source d'adresse IP :</h3>
        <pre><code>
          set firewall ip-src-route disable
        </code></pre>
        <h3>Configurer la journalisation des adresses "martiennes" :</h3>
        <p>
          La commande <code>set firewall options log-martians enable</code> active la journalisation des paquets qui correspondent
          à des adresses IP non routables (adresses "martiennes").
        </p>
        <pre><code>
          set firewall options log-martians enable
        </code></pre>

      </section>
  )
}
