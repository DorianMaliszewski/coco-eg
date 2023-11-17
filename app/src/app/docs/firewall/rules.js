export default function Rules() {
  return (
    <section id="rules">
      <h2>Les Rulesets et Règles du Pare-feu Ubiquiti</h2>

      <p>
        Lors de la configuration du pare-feu sur l'EdgeRouter d'Ubiquiti, les concepts de rulesets et de règles jouent un rôle
        essentiel dans la définition du comportement du pare-feu. Comprendre comment organiser ces règles au sein de
        rulesets permet une gestion efficace du trafic réseau.
      </p>

      <h3>Rulesets</h3>
      <p>
        Un ruleset est un ensemble de règles qui partagent des caractéristiques similaires ou qui sont appliquées à un type
        spécifique de trafic. Par exemple, vous pourriez avoir un ruleset pour le trafic IN, un autre pour le trafic OUT, et
        un troisième pour le trafic LOCAL. Les rulesets offrent une manière structurée d'organiser les règles du pare-feu.
      </p>

      <h3>Règles (Rules)</h3>
      <p>
        Les règles (ou rules) définissent les actions spécifiques à prendre pour un trafic particulier. Chaque règle est
        constituée de conditions (telles que l'adresse IP source, le port, le protocole) et d'une action associée (autoriser
        ou bloquer). Les règles sont évaluées séquentiellement, et la première règle correspondante détermine le sort du
        trafic.
      </p>

      <h3>Exemple de Commandes</h3>
      <p>
        Voici un exemple de commandes pour créer un ruleset simple avec une règle sur l'EdgeRouter. Supposons que nous
        voulions autoriser le trafic HTTP (port 80) provenant de l'extérieur (IN) vers un serveur interne à l'adresse IP
        192.168.1.10 :
      </p>

      <pre>
        <code className="whitespace-pre-line">
          {`configure  
set firewall name WAN_IN rule 10 action accept  
set firewall name WAN_IN rule 10 description 'Autoriser le trafic HTTP'
set firewall name WAN_IN rule 10 protocol tcp
set firewall name WAN_IN rule 10 destination port 80
set firewall name WAN_IN rule 10 state new enable
set firewall name WAN_IN rule 10 state established enable
set firewall name WAN_IN rule 10 state related enable
set firewall name WAN_IN rule 10 destination address 192.168.1.10
commit
save
exit`}
        </code></pre>

      <p>
        Ces commandes ajoutent une règle au ruleset WAN_IN. Elle autorise le trafic TCP sur le port 80 vers
        l'adresse IP 192.168.1.10 et prend en charge les états de connexion pour les nouvelles connexions, les connexions
        établies et les connexions liées.
      </p>
    </section>
  )
}
