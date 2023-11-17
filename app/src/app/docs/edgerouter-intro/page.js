export default function DocsEdgeRouterIntro() {
  return (
    <article className="prose lg:prose-lg">
      <h1>Présentation du EdgeRouter</h1>
      <p>
        L'EdgeRouter d'Ubiquiti Networks est une série de routeurs conçus pour offrir des performances élevées et des
        fonctionnalités avancées, adaptées aux environnements réseau professionnels et domestiques. Ces routeurs sont
        spécialement conçus pour fournir une connectivité fiable et sécurisée.
      </p>

      <h2>Utilisation</h2>
      <p>
        L'EdgeRouter a pour objectif de fournir un routage avancé, une sécurité réseau et des fonctionnalités de
        gestion de réseau dans un boîtier compact. Il est idéal pour les réseaux d'entreprise, les fournisseurs de services
        Internet (ISP), les réseaux domestiques avancés, et d'autres applications nécessitant une gestion de réseau
        sophistiquée.
      </p>

      <h2>Système d'Exploitation</h2>
      <p>
        L'EdgeRouter fonctionne sur un système d'exploitation basé sur Debian, offrant ainsi une base stable et sécurisée.
        L'interface utilisateur est accessible via une interface Web intuitive, et les utilisateurs avancés peuvent accéder
        au système en utilisant une interface en ligne de commande (CLI) basée sur le shell de commande Vyatta.
      </p>

      <h2>Configuration</h2>
      <p>
        La configuration de l'EdgeRouter peut être réalisée à l'aide de l'interface Web (EdgeOS) ou de la ligne de
        commande. L'interface Web offre une configuration basée sur des formulaires avec des options conviviales, tandis que
        la ligne de commande permet un contrôle plus fin pour les utilisateurs avancés.
      </p>
      <p>
        Les fonctionnalités de configuration incluent la gestion des interfaces réseau, le routage statique et dynamique, les
        règles de pare-feu, la gestion des VLAN, la configuration VPN, et bien plus encore.
      </p>

      <h2>Services Fournis</h2>
      <p>
        L'EdgeRouter apporte gamme complète de services pour répondre aux besoins avancés de
        routage, de sécurité, et de gestion de réseau. Chaque service contribue à l'efficacité et à la
        sécurité de votre infrastructure réseau.
      </p>
      <ul>
        <li>
          <strong>Routage Avancé:</strong> Permet de diriger le trafic entre différents réseaux en utilisant des protocoles
          de routage dynamiques ou des règles statiques.
        </li>
        <li>
          <strong>Pare-feu Robuste:</strong> Fournit des règles de filtrage de trafic pour renforcer la sécurité du réseau en
          autorisant ou bloquant le trafic en fonction de critères définis.
        </li>
        <li>
          <strong>Configuration de VPN:</strong> Permet d'établir des connexions VPN sécurisées pour un accès à distance ou
          pour interconnecter des réseaux distants.
        </li>
        <li>
          <strong>Gestion des Interfaces Réseau:</strong> Facilite la configuration et la gestion des interfaces réseau,
          permettant une connectivité flexible.
        </li>
        <li>
          <strong>Support VLAN:</strong> Permet la création de réseaux virtuels indépendants au sein d'un réseau physique,
          améliorant la segmentation et la gestion du trafic.
        </li>
        <li>
          <strong>Filtrage de Contenu:</strong> Contrôle et filtre le contenu du trafic en fonction de règles définies,
          améliorant la sécurité et la gestion du réseau.
        </li>
        <li>
          <strong>Bilan de Charge:</strong> Distribue équitablement la charge entre plusieurs liaisons pour optimiser
          l'utilisation de la bande passante.
        </li>
        <li>
          <strong>QoS (Quality of Service):</strong> Gère la priorité du trafic pour garantir une qualité de service
          optimale pour les applications critiques.
        </li>
        <li>
          <strong>Monitoring du Trafic:</strong> Permet de surveiller le trafic réseau en temps réel pour diagnostiquer les
          problèmes et optimiser les performances.
        </li>
        <li>
          <strong>Serveur DHCP:</strong> Fournit des adresses IP dynamiques aux appareils du réseau, simplifiant la gestion
          des adresses IP.
        </li>
        <li>
          <strong>Serveur DNS:</strong> Gère la résolution des noms de domaine pour faciliter l'accès aux ressources sur
          Internet.
        </li>
      </ul>
    </article>
  )
}
