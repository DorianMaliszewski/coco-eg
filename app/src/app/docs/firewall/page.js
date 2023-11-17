import Advanced from "./advanced";
import Rules from "./rules";
import Traffic from "./traffic";

export default function Firewall() {
  return (
    <article className="prose lg:prose-lg">

      <section>
        <h1>Firewall</h1>

        <p>
          Le pare-feu, véritable rempart de la sécurité informatique, est une barrière essentielle entre un réseau privé et les
          menaces potentielles provenant de l'extérieur. Son rôle principal est de filtrer le trafic réseau, autorisant
          soigneusement les communications légitimes tout en bloquant les activités suspectes ou malveillantes.
        </p>

        <p>
          Imaginons le pare-feu comme le gardien vigilant d'une forteresse numérique. Il examine chaque paquet de données qui
          tente d'entrer ou de sortir du réseau, évaluant sa légitimité en fonction de règles prédéfinies. Ces règles, définies
          par les administrateurs réseau, spécifient les conditions sous lesquelles un trafic est autorisé ou refusé.
        </p>

        <p>
          En plus de la protection contre les menaces extérieures, les pare-feux sont également cruciaux pour prévenir les
          fuites d'informations sensibles et pour contrôler l'accès aux ressources internes du réseau. Ils constituent ainsi
          une ligne de défense essentielle dans le paysage numérique complexe d'aujourd'hui.
        </p>

        <p>
          Dans ce parcours d'apprentissage, nous explorerons en détail la configuration d'un pare-feu sur l'EdgeRouter
          d'Ubiquiti. De la compréhension des différents types de trafic à la création de règles spécifiques, en passant par
          les configurations avancées et des exemples pratiques, vous serez équipé pour renforcer la sécurité de votre réseau
          grâce à la puissance du pare-feu.
        </p>
      </section>
      <Traffic />
      <Rules />
      <Advanced />
    </article>
  )
}
