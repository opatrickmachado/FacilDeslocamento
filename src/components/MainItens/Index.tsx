import { Button } from "../UI/Button/Index";
import styles from "./styles.module.scss";
import { BsFillPersonFill, BsCarFrontFill } from "react-icons/bs";
import Link from "next/link";
export function MainItens() {
  return (
    <div className={styles.container}>
      <div className={styles.containerCenter}>
        <span>
        O Sistema de Facil Deslocamento oferece às equipes uma solução eficiente para entregas do início ao fim.
        </span>
        <div className={styles.options}>
          <div className={styles.items}>
            <BsFillPersonFill />
            <h2>Cliente</h2>
            <span>
            Experimente a velocidade e a resolutividade através de um atendimento organizado com tags e etiquetas fáceis de localizar.
            </span>
            <Button className={styles.buttonItems}>
            <Link href={'/Client/ClientRegister'} legacyBehavior>
              ➡
            </Link>
              </Button>
          </div>
          <div className={styles.items}>
            <BsCarFrontFill />
            <h2>Condutor</h2>
            <span>
            Torne a experiência do primeiro contato do seu cliente com sua marca rápida e inesquecível.
            </span>
            <Button className={styles.buttonItems}>
            <Link href={'/Driver/DriverSignUp'} legacyBehavior>
              ➡
            </Link>
              </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
