export default function Configure() {
  return (
    <section id="configure">
      <h2>Paramétrage de SSH</h2>

      <p>
        Ci-dessous, vous trouverez un exemple de paramétrage du service SSH sur l'EdgeRouter Ubiquiti avec des commandes et leur description :
      </p>

      <pre><code className="whitespace-pre-line">
        {`configure

    # Activation du service SSH
    set service ssh port 22

    # Configuration de l'accès SSH pour un utilisateur avec une clé SSH
    set system login user admin authentication public-keys 0 key 'ssh-rsa AAA...'

    # Configuration de l'accès SSH pour un utilisateur avec un mot de passe
    set system login user user1 authentication plaintext-password 'password123'

    # Configuration de l'accès SSH pour un utilisateur avec un mot de passe crypté (MD5)
    set system login user user2 authentication encrypted-password '$1$5c1u1pA7$7q...'

    # Activation de la connexion SSH via l'interface WAN
    set service ssh listen-address 203.0.113.1

    commit
    save
    exit`}
      </code></pre>

      <p>
        Ces commandes définissent la configuration de base du service SSH, la configuration d'un accès SSH pour un utilisateur avec une clé SSH, la configuration d'un accès SSH pour un utilisateur avec un mot de passe en texte clair, et la configuration d'un accès SSH pour un utilisateur avec un mot de passe crypté (MD5).
      </p>
    </section>
  )
}
