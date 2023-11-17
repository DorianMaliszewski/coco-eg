export default function Configure() {
  return (
    <section id="configure">
      <h2>Paramétrage de DNS</h2>

      <p>
        Ci-dessous, vous trouverez un exemple de paramétrage du service DNS sur l'EdgeRouter Ubiquiti avec des commandes et leur description :
      </p>

      <pre><code className="whitespace-pre-line">
        {`configure

    # Configuration des serveurs DNS
    set system name-server 8.8.8.8
    set system name-server 8.8.4.4

    # Activation de la résolution DNS locale
    set service dns forwarding listen-on eth1
    set service dns forwarding cache-size 1000

    commit
    save
    exit`}
      </code></pre>

      <p>
        Ces commandes définissent la configuration des serveurs DNS utilisés par le routeur, ainsi que l'activation de la résolution DNS locale avec la spécification d'une interface et la taille du cache DNS.
      </p>
    </section>
  )
}
