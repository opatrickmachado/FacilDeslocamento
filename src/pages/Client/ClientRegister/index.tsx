import { useContext, FormEvent, useState, useEffect } from "react";
import Router from "next/router";
import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import Head from "next/head";
import { BsGeoAltFill } from "react-icons/bs";
import { Button } from "@/components/UI/Button/Index";
import { Navbar } from "@/components/Header";
import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { toast } from "react-toastify";

export default function ClientRegister() {
  const { signUp } = useContext(AuthContext);

  const [nome, setnome] = useState("");
  const [numeroDocumento, setNumeroDocumento] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (
      nome === "" ||
      numeroDocumento === "" ||
      tipoDocumento === "" ||
      logradouro === "" ||
      bairro === "" ||
      cidade === "" ||
      uf === "" ||
      numero === ""
    ) {
      toast.error("Preencha todos os campos");
      return;
    }

    setLoading(true);

    let data = {
      nome,
      numeroDocumento,
      tipoDocumento,
      logradouro,
      numero,
      bairro,
      cidade,
      uf,
    };
    await signUp(data);
    setLoading(false);
    Router.push("/Client/Dashboard");
  }
  
  useEffect(() => {
    const clientUser = localStorage.getItem("userId");
    if (clientUser) {
      Router.push("/Client/Dashboard");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Facil Deslocamento - Cadastro de cliente</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <h1>Bem-Vindo</h1>
          <span>Acesse sua conta agora mesmo</span>

          <Button>
            <Link href={"/Client/ClientSignIn"} legacyBehavior>
              Entrar
            </Link>
          </Button>
        </div>
        <div className={styles.registerContainer}>
          <div className={styles.containerLeft}></div>
          <div className={styles.logo}>
            <h1>Cadastre-se como usuario</h1>
          </div>
          <form onSubmit={handleSignUp}>
            <div className={styles.inputWrapper}>
              <Input
                placeholder="Informe o nome do cliente"
                type="text"
                value={nome}
                onChange={(e) => setnome(e.target.value)}
              />
              <Input
                placeholder="Numero do documento"
                type="text"
                value={numeroDocumento}
                onChange={(e) => setNumeroDocumento(e.target.value)}
              />
            </div>

            <div className={styles.inputWrapper}>
              <Input
                placeholder="Tipo de documento"
                type="text"
                value={tipoDocumento}
                onChange={(e) => setTipoDocumento(e.target.value)}
              />
              <Input
                placeholder="Logradouro"
                type="text"
                value={logradouro}
                onChange={(e) => setLogradouro(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <Input
                placeholder="Numero"
                type="number"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
              ></Input>
              <Input
                placeholder="Bairro"
                type="text"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <Input
                placeholder="Cidade"
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
              />
              <Input
                placeholder="Estado"
                type="text"
                maxLength={3}
                value={uf}
                onChange={(e) => setUf(e.target.value)}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button loading={loading}>
                  Cadastrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
