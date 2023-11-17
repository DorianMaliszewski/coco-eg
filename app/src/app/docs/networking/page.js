export default function DocsNetworking() {
  return (
    <article className="prose lg:prose-lg">
      <h1 className="text-center">Base de connaissance réseau</h1>

      <h2>1. Qu'est-ce qu'un réseau informatique ?</h2>
      <p>
        Un réseau informatique est une interconnexion de plusieurs dispositifs tels que des ordinateurs, des serveurs, des
        routeurs, etc., qui communiquent entre eux pour partager des ressources et des informations. Les réseaux peuvent
        être locaux (LAN), étendus (WAN) ou mondiaux (Internet).
      </p>

      <h2>2. Le Masque Réseau</h2>
      <p>
        Le masque réseau est une série de bits qui détermine quelles parties d'une adresse IP sont réservées au réseau et
        aux hôtes. Il est souvent exprimé en notation décimale pointée, comme <code>255.255.255.0</code>.
      </p>

      <h2>3. Calcul du Nombre d'IP Utilisables</h2>
      <p>
        Le nombre d'IP utilisables dans un réseau est calculé en soustrayant deux du nombre total d'adresses IP disponibles
        dans le réseau. La première adresse est réservée pour l'adresse réseau, et la dernière pour l'adresse de diffusion.
      </p>
      <p>
        Par exemple, dans un réseau avec un masque <code>255.255.255.0</code> (ou /24 en notation CIDR), il y a
        <code>2^(32-24) - 2</code> adresses IP utilisables.
      </p>

      <h2>4. Adresse Réseau et Adresse de Diffusion</h2>
      <p>
        L'adresse réseau est la première adresse IP dans une plage donnée, et elle identifie le réseau lui-même. Par
        exemple, dans le réseau <code>192.168.1.0/24</code>, l'adresse réseau est <code>192.168.1.0</code>.
      </p>
      <p>
        L'adresse de diffusion est la dernière adresse IP dans une plage et est utilisée pour envoyer des données à tous les
        hôtes du réseau. Dans le même réseau <code>192.168.1.0/24</code>, l'adresse de diffusion est
        <code>192.168.1.255</code>.
      </p>
      <h2>5. Exemple avec une adresse IP</h2>

      <h3>Adresse IP et Masque</h3>
      <p>
        Considérons l'adresse IP <code>192.162.0.30/18</code>. Cette notation signifie que les 18 premiers bits de l'adresse IP
        sont réservés pour le réseau, et les 14 bits restants sont disponibles pour les hôtes.
      </p>

      <h3>Calcul du Nombre d'IP Utilisables</h3>
      <p>
        Pour calculer le nombre d'IP utilisables, nous utilisons la formule <code>2^(32 - n) - 2</code>, où <code>n</code>
        est le nombre de bits réservés pour le réseau.
      </p>
      <p>
        Dans notre exemple, <code>n = 18</code>, donc le nombre d'IP utilisables est <code>2^(32-18) - 2 = 2^14 - 2 =
          16382</code>.
      </p>

      <h3>Adresses Réseau et de Diffusion</h3>
      <p>
        L'adresse réseau est la première adresse IP dans la plage, et dans notre exemple, c'est <code>192.162.0.0</code>.
      </p>
      <p>
        L'adresse de diffusion est la dernière adresse IP dans la plage, et elle est calculée en mettant tous les bits
        réservés pour les hôtes à 1. Dans notre cas, cela donne <code>192.162.63.255</code>.
      </p>

      <h3>En détails</h3>
      <pre>
        <code>
          {`Address:   192.158.0.30          11000000.10011110.00 000000.00011110
Netmask:   255.255.192.0 = 18    11111111.11111111.11 000000.00000000
Wildcard:  0.0.63.255            00000000.00000000.00 111111.11111111
---
Network:   192.158.0.0/18        11000000.10011110.00 000000.00000000 (Class C)
Broadcast: 192.158.63.255        11000000.10011110.00 111111.11111111
HostMin:   192.158.0.1           11000000.10011110.00 000000.00000001
HostMax:   192.158.63.254        11000000.10011110.00 111111.11111110
Hosts/Net: 16382`}
        </code>
      </pre>
      <h2>IPCalc à la rescouse</h2>
      <p>IPCalc est un outil permettant d'effectuer tous les calculs sur le réseau que vous lui soumettrez. Cet outil vous permettra d'obtenir les informations d'une adresse et son CIDR (par exemple 192.168.3.30/24) dans l'ordre suivant :</p>
      <ul>
        <li>Adresse soumise</li>
        <li>Masque réseau</li>
        <li>Masque réseau inversé</li>
        <li>Adresse réseau avec le CIDR auquel votre adresse appartient</li>
        <li>Adresse broadcast</li>
        <li>Première adresse IP utilisable</li>
        <li>Dernière adresse IP utilisable</li>
        <li>Nombre d'adresse IP utilisable</li>
      </ul>
      <p><a href="https://jodies.de/ipcalc" target="_blank" referrerPolicy="no-referrer">Cliquez ici pour accéder au site pour calculer votre réseau</a></p>
    </article >
  )
}
