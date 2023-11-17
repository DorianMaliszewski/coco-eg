export default function LoadConf() {
  return (
    <section id="load-config">
      <h2>3. Charger un Fichier de Configuration</h2>
      <p>
        En mode configuration, utilisez la commande <code>load</code> pour charger le fichier de configuration. Assurez-vous que le fichier est
        présent sur l'EdgeRouter ou utilisez SCP pour le transférer au préalable.
      </p>

      <pre><code>load configuration_file</code></pre>

      <p>
        Remplacez "configuration_file" par le chemin complet du fichier de configuration sur l'EdgeRouter.
        Si vous ne spécifiez pas le chemin du fichier, le chemin par défaut (<code>/config/config.boot</code>) sera utilisé.
      </p>

      <h3>Application des Changements</h3>
      <p>
        Exactement comme lorsque vous utiliser des commandes CLI, utilisez la commande <code>commit</code> pour appliquer les changements. Cela activera la nouvelle configuration.
      </p>

      <pre><code>commit</code></pre>
      <p>
        Sauvegardez la configuration pour qu'elle persiste après un redémarrage ou une mise à jour du firmware.
      </p>

      <pre><code>save</code></pre>

      <p>
        La commande <code>save</code> sans argument sauvegarde la configuration actuelle.
      </p>

      <p>
        Une fois les étapes ci-dessus terminées, vous pouvez vous déconnecter de la session SSH.
      </p>

      <pre><code>exit</code></pre>
    </section>
  )
}
