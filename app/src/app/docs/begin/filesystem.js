export default function Filesystem() {
  return (
    <section id="filesystem">
      <h2>1. Système de Fichiers</h2>

      <h3>Introduction</h3>
      <p>
        L'EdgeRouter d'Ubiquiti utilise une structure de système de fichiers basée sur Linux. Comprendre cette organisation
        est essentiel pour la gestion et la sauvegarde de la configuration.
      </p>

      <h3>Répertoire Racine (/)</h3>
      <p>
        Le répertoire racine contient les dossiers système de base tels que <code>/bin</code> (binaires), <code>/etc</code>
        (fichiers de configuration), et <code>/lib</code> (bibliothèques partagées).
      </p>

      <h3>Dossier /config</h3>
      <p>
        Le dossier le plus important pour l'EdgeRouter est <code>/config</code>. Il contient la configuration spécifique de
        l'utilisateur, y compris les fichiers de configuration et les sauvegardes. C'est dans ce dossier que sont stockées
        toutes les informations de configuration, y compris les paramètres réseau, les règles de pare-feu et autres
        configurations spécifiques à l'utilisateur.
      </p>

      <h3>Dossiers de Configuration</h3>
      <p>
        À l'intérieur du dossier <code>/config</code>, vous trouverez plusieurs sous-dossiers liés à des composants
        spécifiques de la configuration, tels que :
      </p>
      <ul>
        <li><code>/config/user-data</code> : Contient des données utilisateur spécifiques.</li>
        <li><code>/config/scripts</code> : Stocke des scripts personnalisés.</li>
        <li><code>/config/rules</code> : Pour les règles de pare-feu personnalisées.</li>
      </ul>

      <h3>Sauvegarde de la Configuration</h3>
      <p>
        La sauvegarde régulière du contenu du dossier <code>/config</code> est cruciale pour la préservation des
        configurations. Cela permet de restaurer rapidement les paramètres en cas de besoin, notamment après des mises à
        jour du firmware ou en cas de réinitialisation.
      </p>

    </section>
  )
}
