"use client"; // Necessário para usar hooks como useState

import { useState } from "react";
import styles from "./PlayerTauz.module.css";

export default function PlayerTauz() {
  const [showText, setShowText] = useState(false);

  const handleTitleClick = () => {
    setShowText(!showText);
  };

  return (
    <div>
      <h1 className={styles.title}>Player Tauz Hits</h1>

      <h2 
        className={styles.titulo2} 
        onClick={handleTitleClick} 
        style={{ cursor: 'pointer' }}
      >
        Rap do Minecraft
      </h2>

      {showText && (
        <div className={styles.rap}>
          <h2>Letra da Música:</h2>
          <pre>
            {`Bem-vindo ao Minecraft, ai meu amigo
Na jornada deste game ficará surpreendido
Sinta liberdade para poder criar
Apenas qualquer coisa que poder imaginar

Modo criativo, ou sobrevivência
Em uma aventura, tenha sua experiência
Nem preciso dizer, o que se pode ou não fazer
Faça o que quiser e verá acontecer

Construindo e minerando sem nenhuma trajetória
Sem ao menos perceber, vou fazendo minha história
Neste universo realmente impressionante
Explorando cavernas, a procura de diamantes
Combinando itens, construindo casas
De dia ou de noite fazendo minha jornada
Modificações aumentam a diversidade
E fica ainda mais legal com os amigos de verdade

Minecraft
Você conhece!
Num mundo de blocos faço qualquer criação
Onde o único limite é a imaginação

Minecraft
Você conhece!
Num mundo de blocos faço qualquer criação
Onde o único limite é a imaginação

Quando cai a noite é preciso ter cuidado
Pode aparecer, mobs por todo lado
Esqueleto, Zumbi, Aranha ou Creeper
Tenha coragem para invocar o Wither
Não olhe nos olhos de um Enderman
Assim como o Slender te persegue também
Mas o que mais assusta é a lenda deste game
Herobrine, esse ai é diferente

Sua existência é um grande mistério
Tudo que se fala pode ou não estar correto

Realmente Minecraft, é incomparável
Nunca nada semelhante tinha sido criado
Recorde de vendas, grande inspiração
Alcançando os da antiga e da nova geração
Vai falar de gráficos? Mano dá um tempo
Ninguém nunca reclamou de jogar Super Nintendo!

Minecraft
Você conhece!
Num mundo de blocos faço qualquer criação
Onde o único limite é a imaginação
Minecraft
Você conhece!
Num mundo de blocos faço qualquer criação
Onde o único limite é a imaginação`}
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
