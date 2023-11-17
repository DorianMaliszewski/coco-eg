export default function Traffic() {
  return (
      <section id="traffic">

        <h2>Les différent types de traffic</h2>
        <p>
          Lors de la configuration du pare-feu sur l'EdgeRouter d'Ubiquiti, il est essentiel de comprendre les différents types
          de trafic auxquels le pare-feu peut être confronté. Ces types de trafic sont généralement classés en trois
          catégories : IN, OUT et LOCAL.
        </p>

        <h3>Trafic IN (Entrant)</h3>
        <p>
          Le trafic IN, ou trafic entrant, fait référence à tout le trafic qui se dirige vers le réseau depuis l'extérieur. Il
          peut s'agir de données provenant d'Internet ou d'un autre réseau externe. Lorsque le pare-feu rencontre du trafic IN,
          il évalue les règles de filtrage pour déterminer si ce trafic doit être autorisé à entrer dans le réseau.
        </p>

        <h3>Trafic OUT (Sortant)</h3>
        <p>
          Le trafic OUT, ou trafic sortant, concerne les données qui quittent le réseau pour se diriger vers l'extérieur. Cela
          peut inclure les réponses à des demandes provenant du trafic entrant ou les données générées à l'intérieur du réseau.
          Le pare-feu évalue également les règles de filtrage pour le trafic OUT afin de déterminer si ces données peuvent
          quitter le réseau en toute sécurité.
        </p>

        <h3>Trafic LOCAL</h3>
        <p>
          Le trafic LOCAL concerne les communications internes au sein du réseau lui-même. Il s'agit des données échangées
          entre les différentes machines et appareils connectés au réseau local. Le pare-feu traite le trafic LOCAL en
          évaluant les règles de filtrage spécifiques à ces communications internes.
        </p>

        <p>
          Lors de la configuration du pare-feu sur l'EdgeRouter, il est crucial de définir des règles appropriées pour chaque
          type de trafic. Cela permet de contrôler précisément quelles communications sont autorisées et quelles communications
          sont bloquées, renforçant ainsi la sécurité du réseau.
        </p>
      </section>
  )
}
