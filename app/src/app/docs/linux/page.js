export default function DocsLinux() {
  return (
    <article className="prose lg:prose-lg">
      <h1 className="text-center">Linux</h1>
      <section>
        <h2>Les Commandes Shell</h2>

        <h3>1. Commande ls</h3>
        <p>
          La commande <code>ls</code> est utilisée pour lister les fichiers et répertoires dans un répertoire donné.
          Elle peut être utilisée avec diverses options pour afficher des informations spécifiques, telles que les permissions,
          la taille, et la date de modification.
        </p>
        <pre>
          <code>$ ls</code>
        </pre>

        <h3>2. Commande cd</h3>
        <p>
          La commande <code>cd</code> est utilisée pour changer de répertoire. Vous pouvez spécifier le chemin absolu ou relatif
          du répertoire vers lequel vous souhaitez vous déplacer.
        </p>
        <pre>
          <code>$ cd chemin/vers/le/repertoire</code>
        </pre>

        <h3>3. Commande echo</h3>
        <p>
          La commande <code>echo</code> est utilisée pour afficher du texte à la sortie standard. C'est souvent utilisé dans des
          scripts shell pour afficher des messages ou des variables.
        </p>
        <pre>
          <code>$ echo "Hello, World!"</code>
        </pre>
        <p>
          Vous pouvez utiliser cette commande pour vider le contenu d'un fichier à l'aide de la redirection de sortie <code>&gt;</code>.
        </p>
        <div className="alert alert-warning text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
          <span>Attention ! L'utilisation de cette commande vide le fichier de manière irréversible</span>
        </div>
        <pre>
          <code>$ echo "" &gt; /nom_du_fichier</code>
        </pre>

        <h3>4. Commande touch</h3>
        <p>
          La commande <code>touch</code> est utilisée pour créer des fichiers vides.
        </p>
        <pre>
          <code>$ touch nom_du_fichier</code>
        </pre>

        <h3>5. Commande mkdir</h3>
        <p>
          La commande <code>mkdir</code> est utilisée pour créer un nouveau répertoire (dossier).
        </p>
        <pre>
          <code>$ mkdir nom_du_repertoire</code>
        </pre>
      </section>
      <section id="edit-file">

        <h2>Utilisation de l'éditeur de texte vi</h2>

        <h3>1. Introduction</h3>
        <p>
          <code>vi</code> est un éditeur de texte en ligne de commande très puissant disponible sur la plupart des systèmes Unix
          et Linux. Il offre une interface puissante pour créer, éditer et modifier des fichiers texte directement à partir du
          terminal.
        </p>

        <h3>2. Modes de fonctionnement</h3>
        <p>
          <code>vi</code> a deux modes principaux : le mode <em>commande</em> (ou normal) et le mode <em>édition</em> (ou
          insertion).
        </p>
        <ul>
          <li>Dans le <em>mode commande</em>, vous pouvez effectuer des opérations telles que la navigation, la suppression et
            la copie de texte.</li>
          <li>Dans le <em>mode édition</em>, vous pouvez saisir et modifier le texte.</li>
        </ul>
        <p>Appuyez sur la touche <code>i</code> pour entrer en mode édition (en bas à gauche on voit un <code>I</code>) et <code>Esc</code> pour revenir en mode commande.</p>

        <h3>3. Commandes de base</h3>
        <ul>
          <li><code>:w</code> - Enregistre le fichier.</li>
          <li><code>:q</code> - Quitte <code>vi</code>.</li>
          <li><code>:wq</code> - Enregistre et quitte.</li>
          <li><code>:q!</code> - Quitte sans enregistrer les modifications.</li>
        </ul>

        <h3>4. Navigation</h3>
        <ul>
          <li><code>h</code> ou <code>◀︎</code> - Déplacement à gauche.</li>
          <li><code>j</code> ou <code>▼</code> - Déplacement vers le bas.</li>
          <li><code>k</code> ou <code>▲</code> - Déplacement vers le haut.</li>
          <li><code>l</code> ou <code>▶︎</code>- Déplacement à droite.</li>
        </ul>

        <h3>5. Modification de texte</h3>
        <ul>
          <li><code>x</code> - Supprime le caractère sous le curseur.</li>
          <li><code>dd</code> - Supprime la ligne courante.</li>
          <li><code>p</code> - Colle le texte supprimé après le curseur.</li>
          <li><code>yy</code> - Copie la ligne actuelle.</li>
          <li><code>u</code> - Annule le dernier changement.</li>
          <li><code>Ctrl+Shift+R</code> - Refait le dernier changement (contraire de <code>u</code>).</li>
        </ul>

        <h3>6. Recherche et remplacement</h3>
        <ul>
          <li><code>/motif</code> - Recherche le motif vers le bas.</li>
          <li><code>?motif</code> - Recherche le motif vers le haut.</li>
          <li><code>:s/motif/nouveau_motif/</code> - Remplace la première occurrence de motif par nouveau_motif sur la ligne actuelle.</li>
          <li><code>:s/motif/nouveau_motif/g</code> - Remplace toutes les occurrences de motif par nouveau_motif sur la ligne actuelle.</li>
          <li><code>:s/motif/nouveau_motif/gc</code> - Remplace toutes les occurrences de motif par nouveau_motif sur la ligne actuelle avec confirmation pour chaque occurence.</li>
          <li><code>:%s/motif/nouveau_motif/</code> - Remplace la première occurrence de motif par nouveau_motif sur toutes les lignes.</li>
          <li><code>:%s/motif/nouveau_motif/g</code> - Remplace toutes les occurrences de motif par nouveau_motif sur toutes les lignes.</li>
          <li><code>:%s/motif/nouveau_motif/gc</code> - Remplace toutes les occurrences de motif par nouveau_motif sur toutes les lignes avec confirmation pour chaque occurence.</li>
        </ul>

      </section>

    </article>
  )
}
