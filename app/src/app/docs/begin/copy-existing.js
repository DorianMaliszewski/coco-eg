export default function CopyExisting() {
  return (
    <section id="copy-existing">
      <h2>Copier coller sa configuration depuis son ordinateur</h2>
      <p>
        Voici les étapes pour copier une configuration depuis votre ordinateur
        vers un Edge Router en utilisant la commande <code>scp</code> et
        l'appliquer.
      </p>

      <h3>Étape 1 : Préparer le fichier de configuration</h3>
      <p>
        Assurez-vous que le fichier de configuration est prêt sur votre
        ordinateur. Par exemple, nommons-le <code>custom_config</code>.
      </p>

      <h3>Étape 2 : Copier le fichier de configuration sur le Edge Router</h3>
      <p>
        Utilisez la commande <code>scp</code> pour copier le fichier de
        configuration vers le Edge Router. Remplacez <code>username</code> par
        votre nom d'utilisateur et <code>192.168.1.1</code> par l'adresse IP de
        votre Edge Router.
      </p>
      <div>
        <code>
          scp /chemin/vers/custom_config username@192.168.1.1:/config/custom_config
        </code>
      </div>
      <p>Par exemple :</p>
      <div>
        <code>
          scp ~/Downloads/custom_config admin@192.168.1.1:/config/custom_config
        </code>
      </div>

      <h3>Étape 3 : Se connecter au Edge Router</h3>
      <p>
        Connectez-vous au Edge Router via SSH pour appliquer la configuration.
      </p>
      <div>
        <code>ssh username@192.168.1.1</code>
      </div>

      <h3>Étape 4 : Appliquer la configuration</h3>
      <p>
        Une fois connecté au Edge Router, chargez la nouvelle configuration et
        enregistrez-la.
      </p>
      <ul>
        <li>
          <code>configure</code>
        </li>
        <li>
          <code>load /config/custom_config</code>
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

      <h3>Étape 5 : Redémarrer le Edge Router (facultatif)</h3>
      <p>
        Si nécessaire, vous pouvez redémarrer le Edge Router pour vous assurer
        que tous les changements sont appliqués correctement.
      </p>
      <div>
        <code>reboot</code>
      </div>

      <p>
        Voilà, votre configuration est maintenant appliquée sur le Edge Router !
      </p>
    </section>
  );
}
