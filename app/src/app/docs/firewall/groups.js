export default function Groups() {
  return (
    <section id="groups">
      <h2>
        Configuration des Network Groups et Address Groups
      </h2>
      <p>
        Ce guide explique comment configurer les Network Groups et Address
        Groups sur un Edge Router, à la fois via la CLI et via le fichier de
        configuration.
      </p>

      <h3>Configuration via la CLI</h3>
      <h4>Étape 1 : Accéder à la CLI</h4>
      <p>Connectez-vous au Edge Router via SSH.</p>
      <ul>
        <code>ssh username@192.168.1.1</code>
      </ul>

      <h4>Étape 2 : Créer un Network Group</h4>
      <p>Entrez en mode configuration et ajoutez un Network Group.</p>
      <ul>
        <li>
          <code>configure</code>
        </li>
        <li>
          <code>
            set firewall group network-group LAN-NETWORK network 192.168.1.0/24
          </code>
        </li>
        <li>
          <code>commit</code>
        </li>
        <li>
          <code>save</code>
        </li>
      </ul>

      <h4>Étape 3 : Créer un Address Group</h4>
      <p>En mode configuration, ajoutez un Address Group.</p>
      <ul>
        <li>
          <code>
            set firewall group address-group ALLOWED-HOSTS address 192.168.1.10
          </code>
        </li>
        <li>
          <code>
            set firewall group address-group ALLOWED-HOSTS address 192.168.1.20
          </code>
        </li>
        <li>
          <code>commit</code>
        </li>
        <li>
          <code>save</code>
        </li>
        <li>
          <code>exit</code>
        </li>
      </ul>

      <h3>Configuration via le fichier de configuration</h3>
      <h4>Étape 1 : Préparer le fichier de configuration</h4>
      <p>
        Créez ou modifiez un fichier de configuration, par exemple{" "}
        <code>config.boot</code>, sur votre ordinateur avec les contenus
        suivants :
      </p>
      <div>
        <pre>
          {`firewall {
        group {
            network-group LAN-NETWORK {
                network 192.168.1.0/24
            }
            address-group ALLOWED-HOSTS {
                address 192.168.1.10
                address 192.168.1.20
            }
        }
}`}
        </pre>
      </div>
    </section>
  );
}
