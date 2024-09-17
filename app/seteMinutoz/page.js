"use client"; // Necessário para usar hooks como useState

import { useState } from "react";
import styles from "./seteMinutoz.module.css";

export default function SeteMinutoz() {
  const [showText, setShowText] = useState(false);

  const handleTitleClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <h1 className={styles.titulo}>7MZ Nerd Hits</h1>

      <h2 className={styles.titulo2} onClick={handleTitleClick} style={{ cursor: 'pointer' }}>
      Rap do Joel e Ellie (The Last Of Us) - Os Últimos de Nós.
      </h2>

      {showText && (
        <div className={styles.rap} >
          <h2>Letra da Música:</h2>
          <pre>
            {`Lembro de como o mundo era antes
Antes desse vírus acabar com as nossas vidas
Antes, quando eu era feliz e não sabía
Antes de um soldado atirar na minha garotinha

Passaram 20 anos
Eu vi tanta coisa nessa vida
Tô no ramo do contrabando
Transportando coisas proibidas

Tess, não mexe com os Vaga-lumes
Melhor distância de terroristas
Só que a gente tinha uma dívida
Nossa carga é uma menina

Ellie, você faz o que eu disser
Quando eu disser, então se acostume
Pessoas que eu me importava
Se foram pra cê tá de pé
Por que você importa tanto
Pros Vaga-lumes?

Então você é a única pessoa imune
Eu vou te proteger, más não esqueça mais
Isso é só trabalho
Você não é minha filha e eu não sou seu pai

Garota, esse mundo
É cruel e tão grande
Só pra quem se garante
Então não se esqueça

Entre homens e monstros
Entre pólvora e sangue
Cê só tem uma chance
Faça os tiros valerem a pena

Por muito tempo
Eu tenho lutado pra sobreviver
Eu só faço o que eu posso

Não importa como
Cê sempre vai encontrar
Um motivo pra viver
Caminhando entre esporos

Espero que quando você ouvir
Os acordes do violão
Ainda lembre da minha voz
Acho que eu e você somos
Os últimos de nós!

Tenho medo de ficar sozinha
Tem muita gente malvada lá fora
E muita gente precisa de ajuda
É que eu sou imune ao vírus
Tal vez seja a chave pra achar uma cura

Atravessamos cidades abandonadas
Fugindo de emboscadas
Sempre tão perto de morrer!

Todas as pessoas que eu amava
Morreram ou me deixaram
Todo mundo menos você!

Tudo que eu passei
Aqueles homens que eu matei
Não vai ser em vão
E mesmo sendo tão pequena
Eu vou fazer os tiros valerem a pena

Por muito tempo
Eu tenho lutado pra sobreviver
Eu só faço o que eu posso

Não importa como
Cê sempre vai encontrar
Um motivo pra viver
Caminhando entre esporos

Espero que quando você ouvir
Os acordes do violão
Ainda lembre da minha voz
Acho que eu e você somos
Os últimos de nós!`}
          </pre>

          <form>
            <div>
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
}
