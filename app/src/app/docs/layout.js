import Link from 'next/link'


export const metadata = {
  title: 'Coco Learning',
  description: 'Documentation',
}

export default function DocsLayout({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        <label for="my-drawer-2" className="btn btn-ghost mt-4 btn-block drawer-button lg:hidden">
          <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
          Voir le menu
        </label>
        <div className="p-2 lg:p-4 pt-4 lg:pt-10">
          {children}
        </div>

      </div>
      <aside className="drawer-side ">
        <label for="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200">
          <li><Link href="/docs">Introduction</Link></li>
          <li>
            <details>
              <summary>Commandes de base en Linux</summary>
              <ul>
                <li><Link href="/docs/linux">Les Commandes Shell</Link></li>
                <li><Link href="/docs/linux#edit-file">Utilisation de l'éditeur de texte vi</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="/docs/networking">Base de connaissance réseau</Link></li>
          <li><Link href="/docs/edgerouter-intro">Présentation du EdgeRouter</Link></li>
          <li>
            <details open>
              <summary>Commencer votre configuration</summary>
              <ul>
                <li><Link href="/docs/begin">Système de fichiers</Link></li>
                <li><Link href="/docs/begin#configure">Configurer l'EdgeRouter</Link></li>
                <li><Link href="/docs/begin#load-config">Charger un Fichier de Configuration</Link></li>
                <li><Link href="/docs/begin#copy-existing">Copier coller sa configuration</Link></li>
              </ul>
            </details>
            <details open>
              <summary>Pare-Feu (Firewall)</summary>
              <ul>
                <li><Link href="/docs/firewall">Introduction</Link></li>
                <li><Link href="/docs/firewall#advanced">Les différents traffics</Link></li>
                <li><Link href="/docs/firewall#groups">Network Groups et Address Groups</Link></li>
                <li><Link href="/docs/firewall#rules">Rulesets et Rules</Link></li>
                <li><Link href="/docs/firewall#advanced">Configurations avancées</Link></li>
              </ul>
            </details>
            <details open>
              <summary>Interfaces</summary>
              <ul>
                <li><Link href="/docs/interfaces">Introduction</Link></li>
                <li><Link href="/docs/interfaces#types">Les différents types d&apos;interfaces</Link></li>
                <li><Link href="/docs/interfaces#network">LAN, WAN, VLAN, Port VLAN</Link></li>
                <li><Link href="/docs/interfaces#configure">Paramétrer une interface</Link></li>
              </ul>
            </details>
            <details open>
              <summary>Services</summary>
              <ul>

                <li>
                  <details>
                    <summary>DHCP Server</summary>
                    <ul>
                      <li><Link href="/docs/services/dhcp-server">Introduction</Link></li>
                      <li><Link href="/docs/services/dhcp-server#configure">Paramétrer votre serveur DHCP</Link></li>
                      <li><Link href="/docs/services/dhcp-server#advanced">Configurations avancées</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>NAT</summary>
                    <ul>
                      <li><Link href="/docs/services/nat">Introduction</Link></li>
                      <li><Link href="/docs/services/nat#configure">Paramétrer votre NAT</Link></li>
                      <li><Link href="/docs/services/nat#advanced">Configurations avancées</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>DNS</summary>
                    <ul>
                      <li><Link href="/docs/services/dns">Introduction</Link></li>
                      <li><Link href="/docs/services/dns#configure">Paramétrer votre DNS</Link></li>
                      <li><Link href="/docs/services/dns#advanced">Configurations avancées</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>SSH</summary>
                    <ul>
                      <li><Link href="/docs/services/ssh">Introduction</Link></li>
                      <li><Link href="/docs/services/ssh#configure">Paramétrer votre SSH</Link></li>
                      <li><Link href="/docs/services/ssh#advanced">Configurations avancées</Link></li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>GUI (Accès Web)</summary>
                    <ul>
                      <li><Link href="/docs/services/gui">Introduction</Link></li>
                      <li><Link href="/docs/services/gui#configure">Paramétrer votre GUI</Link></li>
                      <li><Link href="/docs/services/gui#advanced">Configurations avancées</Link></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Système</summary>
              <ul>
                <li><Link href="/">Introduction</Link></li>
                <li><Link href="/">Configuration système</Link></li>
                <li><Link href="/">Configurations avancées</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </aside>
    </div>
  )
}
