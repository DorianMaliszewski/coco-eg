export default function Configure() {
  return (
    <section id="configure">

      <h2>2. Configurer l'EdgeRouter</h2>

      <h3>Introduction</h3>
      <p>
        L'EdgeRouter Ubiquiti peut être configuré de différentes manières, que ce soit via l'interface Web, une connexion SSH
        (Secure Shell), ou en utilisant le port console directement. Choisissez la méthode qui convient le mieux à vos
        besoins.
      </p>

      <h3>Configuration via l'Interface Web (EdgeOS)</h3>
      <p>
        Pour configurer l'EdgeRouter via l'interface Web :
      </p>
      <ol>
        <li>Connectez-vous à l'interface Web en utilisant l'adresse IP de l'EdgeRouter.</li>
        <li>Utilisez vos identifiants pour accéder à l'interface.</li>
        <li>Explorez les onglets pour configurer les interfaces réseau, le routage, le pare-feu, VPN, VLAN, etc.</li>
        <li>N'oubliez pas de sauvegarder votre configuration.</li>
      </ol>

      <h3>Configuration via SSH</h3>
      <p>
        Pour configurer l'EdgeRouter via une connexion SSH :
      </p>
      <ol>
        <li>Ouvrez un terminal et utilisez la commande SSH :</li>
        <pre><code>ssh username@adresse_ip_edge_router</code></pre>
        <li>Entrez votre mot de passe lorsque vous y êtes invité.</li>
        <li>Utilisez des commandes CLI pour configurer les paramètres souhaités.</li>
        <li>Pour entrer en mode configuration entrer la commande <code>configure</code></li>
        <li>
          <p>Après avoir entré des commandes CLI testez votre configuration avec la commande <code>commit</code></p>
          <div className="alert alert-warning">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span><strong className="text-warning-content">Attention:</strong> Les commandes que vous avez fait seront chargées dans le routeur. La configuration ne sera pas sauvegardée en cas de mise hors tension.</span>
          </div>
        </li>
        <li>N'oubliez pas de sauvegarder votre configuration avec la commande <code>save</code> pour qu'elle soit réutiliser même en cas de mise en hors tension.</li>
        <li>Quittez le mode configuration avec la commande <code>exit</code>.</li>
      </ol>

      <h3>Configuration via le Port Console</h3>
      <p>
        Pour configurer l'EdgeRouter via le port console :
      </p>
      <ol>
        <li>Utilisez un émulateur de terminal (comme PuTTY) et un câble série pour vous connecter :</li>
        <pre><code>puTTY -serial /dev/ttyUSB0 -sercfg 115200</code></pre>
        <li>Adaptez le port série en fonction de votre système d'exploitation.</li>
        <li>Utilisez des commandes CLI pour configurer les paramètres souhaités.</li>
        <li>N'oubliez pas de sauvegarder votre configuration.</li>
      </ol>
    </section>

  )
}
