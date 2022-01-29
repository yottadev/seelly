import React from "react";

import {
  ContentStructure,
  BannerJogo,
  BannerCapsule,
  ContentSide,
  ContentMaintext,
  Contentsubtext,
  Main
} from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Main>
        <ContentSide bgImg="./main-content.png">
          <ContentMaintext>Sobre Seelly</ContentMaintext>
          <Contentsubtext>
            Seelly é uma ferramenta de ajuda para os gamers, onde eles poderão
            encontrar tutorias e dicas sobre jogos que necessitam de um longo
            tempo de progressão.
          </Contentsubtext>
        </ContentSide>
        <ContentStructure>
          <BannerCapsule bgImg="https://blog.br.playstation.com/tachyon/sites/4/2021/11/9af15fef86503ecb5ff4f11a4f5847534786dd50.jpg">
            <BannerJogo to="/genshin">Genshin Impact</BannerJogo>
          </BannerCapsule>
          <BannerCapsule bgImg="https://sm.ign.com/ign_pt/news/s/stardew-va/stardew-valley-is-officially-an-esport-now_ktxv.jpg">
            <BannerJogo to="/stardew-valley">stardew Valley</BannerJogo>
          </BannerCapsule>
        </ContentStructure>
      </Main>
    </>
  );
};

export default Home;
