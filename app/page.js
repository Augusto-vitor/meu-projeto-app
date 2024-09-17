import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div> <h1 className={styles.title} >Rap Geek</h1>
    <p className={styles.p}>O Rap Geek, também chamado de Nerdcore Brasileiro, Música Geek, Rap de anime, Rap Nerd, entre outras nomenclaturas, é um subgénero do rap focado no universo geek. É responsável por bilhões de visualizações e reproduções em plataformas digitais de streaming, tendo seu maior enfoque no Youtube, porém contando com Spotify, Deezer, entre outras.</p>
    <p className={styles.p2}>O gênero, o qual teve seu início nos Estados Unidos, apareceu pela primeira vez no Brasil por meio do artista Flick com músicas baseadas em Dragon Ball. Contudo, o gênero conquistou sua popularidade por conta do artista Player Tauz e do grupo 7 Minutoz, sendo estes as maiores referências musicais do estilo por volta de 2014 até 2019. Durante este período, o estilo musical presente no Rap predominava não somente nos maiores artistas, como nos emergentes cantores e compositores destes anos. A importância destes artistas era tanta que estes participaram de grandes programas de TV do Brasil, como por exemplo o Programa do Raul Gil e o Domingão do Faustão.</p>
    </div>
  );
}
