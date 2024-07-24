import Configure from "./configure";
import CopyExisting from "./copy-existing";
import Filesystem from "./filesystem";
import LoadConf from "./load-config";

export default function DocsBegin() {
  return (
    <article className="prose lg:prose-lg">
      <h1>Commencer votre configuration</h1>
      <Filesystem />
      <Configure />
      <LoadConf />
      <CopyExisting />
    </article>
  )
}
