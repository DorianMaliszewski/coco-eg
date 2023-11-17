export default function Configure() {
  return (
    <section id="configure">
      <h2>Paramétrage de l'Interface Graphique</h2>

      <p>
        Ci-dessous, vous trouverez un exemple de paramétrage de l'interface graphique sur l'EdgeRouter Ubiquiti avec des commandes et leur description :
      </p>

      <pre><code className="whitespace-pre-line">
        {`configure

    # Activation de l'interface graphique sur le port 443
    set service gui listen-address 192.168.1.1
    set service gui port 443

    # Configuration de l'accès à l'interface graphique avec un nom d'utilisateur et un mot de passe
    set service gui authentication local-users username admin password 'adminpassword'

    commit
    save
    exit`}
      </code></pre>

      <p>
        Ces commandes définissent la configuration de base de l'interface graphique en activant l'accès via le port 443, en spécifiant une adresse IP d'écoute, et en configurant l'authentification avec un nom d'utilisateur et un mot de passe.
      </p>
    </section>
  )
}
