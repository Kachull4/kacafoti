"use client";

import AvatarSrc from "./images/avatar.webp";
import LandscapeSrc from "./images/krajina.jpg";
import AnimalSrc from "./images/pelican.jpg";
import PetSrc from "./images/DSC03151-Enhanced-NR-2.jpg";
//import PortretSrc from "./images/DSC01787-Enhanced-NR.webp";
import { AnimatedOnScroll } from "../components/animated-on-scroll";
import { ContactBlock } from "../components/contact/contact";

import {
  Avatar,
  Container,
  Heading,
  Intro,
  Card,
  Photo,
  CardButton,
  Blog,
  BlogButton,
  BlogTileRow,
} from "./styled";
import { BlogTile } from "../components/blog/tile";
import { articles } from "../articles";
import { NavigationMenu } from "../components/navbar";

export default function Home() {
  return (
    <>
      <NavigationMenu />
      <main>
        <Intro id="uvod">
          <Container>
            <Avatar src={AvatarSrc} alt="Avatar" />
            <div>
              <Heading>
                Ahoj! Jmenuji se Káča a vítám vás na mém kreativním kousku
                internetu
              </Heading>
              <p>
                Jsem nadšená umělkyně, milovnice zvířat a vášnivá fotografka. Od
                malička mě fascinovala příroda a její krásy, což se odráží i v
                mých koníčcích a tvorbě. Zachycování krásy světa kolem nás
                prostřednictvím objektivu mi přináší radost. Nejraději fotím
                přírodu, květiny a zvířata v jejich přirozeném prostředí. Každý
                snímek je pro mě unikátní příběh, který se snažím sdílet s
                ostatními.
              </p>
              <p>
                Vedle fotografování se věnuji i malbě. Maluji olejomalby, které
                mi umožňují vyjádřit svou lásku k přírodě a zvířatům. Každý tah
                štětcem je pro mě cestou k zachycení okamžiku, který mě oslovil
                a inspiroval. Miluji barevné kontrasty a jemné detaily, které
                přinášejí mým obrazům život a hloubku.
              </p>
              <p>
                Ať už jde o umění, fotografii nebo lásku k přírodě, věřím, že
                sdílení zkušeností a inspirací nás všechny obohacuje. Ráda bych
                vás pozvala do svého světa a podělila se s vámi o své projekty,
                nápady a radosti, které mi přináší mé koníčky.
              </p>
            </div>
          </Container>
        </Intro>
        <AnimatedOnScroll>
          <Card href="/galerie/zvirata" id="zvirata">
            <div>
              <Heading>Zvířata</Heading>
              <p>
                Fotografování zvířat je pro mě způsobem, jak se propojit s
                přírodou a zachytit jedinečné okamžiky jejich života.
              </p>
              <p>
                Vyrážím brzy ráno, kdy jsou zvířata nejaktivnější a barvy
                přírody jsou nejvýraznější. Trpělivost je klíčová, často trávím
                hodiny čekáním na správný moment. Snažím se respektovat jejich
                prostor a chovat se tiše, abych je nevyděsila.
              </p>
              <p>
                Každé setkání je jiné a vždy mě překvapí, jak rozmanité a krásné
                jsou detaily zvířecího světa. Každý snímek vypráví svůj vlastní
                příběh a zachycuje magii okamžiku. Fotografie zvířat mi
                připomínají, jak důležité je chránit naši přírodu a její
                obyvatele.
              </p>
              <CardButton>
                <span>Zobrazit galerii</span>
                <svg
                  version="1.1"
                  viewBox="0 0 91 91"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fill="#ff9999"
                      d="M8.1,53.5c18.4-1,36.9-2,55.4-2.4c-8.6,6.9-16,15.6-14.7,25.3c0.4,2.6,4.3,3.4,5.9,1.6   c4.4-4.9,7.1-10.6,12-15.3c5.3-5,11.3-8.9,17.6-12.5c1.7-1,2.5-2.4,2.6-4c0.4-1.9-0.3-4-2.6-5.5c-6-4-11.8-7.7-16.9-12.9   c-4.4-4.7-8.1-10-12-15.1c-2-2.7-6.9-1.3-5.8,2.4c2.3,8.2,7.5,17,14.1,24.1c-18.5-0.5-37.2,0.4-55.6,1.3   C-0.3,40.9-0.3,53.9,8.1,53.5z"
                    />
                  </g>
                </svg>
              </CardButton>
            </div>
            <Photo src={AnimalSrc} alt="Pelican" />
          </Card>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
          <Card href="/galerie/krajina" id="krajina">
            <Photo src={LandscapeSrc} alt="Landscape" />
            <div>
              <Heading>Krajina</Heading>
              <p>
                Při fotografování krajiny objevuji a uchovávám krásu světa kolem
                nás. Pečlivě vybírám lokaci a studuji počasí, abych využila
                nejlepší světelné podmínky. Nejraději fotím při východu nebo
                západu slunce, kdy je světlo měkké a teplé, což dodává krajině
                magickou atmosféru.
              </p>
              <p>
                Soustředím se na kompozici a hledám zajímavé prvky, jako jsou
                siluety stromů, skály nebo vodní plochy.
              </p>
              <p>
                Každá krajina má svůj jedinečný charakter, snažím se proto
                zachytit její podstatu a atmosféru. Světlo a stíny dokážou
                proměnit i známou scenérii v něco nového a překvapivého.
              </p>
              <p>
                Fotografie krajiny mi přináší radost a inspiraci a motivují mě
                si jí vážit ještě více.
              </p>
              <CardButton>
                <span>Zobrazit galerii</span>
                <svg
                  version="1.1"
                  viewBox="0 0 91 91"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fill="#ff9999"
                      d="M8.1,53.5c18.4-1,36.9-2,55.4-2.4c-8.6,6.9-16,15.6-14.7,25.3c0.4,2.6,4.3,3.4,5.9,1.6   c4.4-4.9,7.1-10.6,12-15.3c5.3-5,11.3-8.9,17.6-12.5c1.7-1,2.5-2.4,2.6-4c0.4-1.9-0.3-4-2.6-5.5c-6-4-11.8-7.7-16.9-12.9   c-4.4-4.7-8.1-10-12-15.1c-2-2.7-6.9-1.3-5.8,2.4c2.3,8.2,7.5,17,14.1,24.1c-18.5-0.5-37.2,0.4-55.6,1.3   C-0.3,40.9-0.3,53.9,8.1,53.5z"
                    />
                  </g>
                </svg>
              </CardButton>
            </div>
          </Card>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
          <Card href="/galerie/mazlicci" id="mazlicci">
            <div>
              <Heading>Mazlíčci</Heading>
              <p>
                Velmi zábavnou činností je fotografování domácích mazlíčků.
                Umožňuje mi zachytit jejich osobitý charakter a radostné
                momenty.
              </p>
              <p>
                Používám hračky a pamlsky, k upoutání jejich pozornost a
                vyvolání různých výrazů a póz. Ráda fotím v přirozeném světle,
                ideálně v přírodě, aby byly snímky co nejvíce autentické a plné
                života.
              </p>
              <p>
                Každý mazlíček je jiný, proto se snažím vystihnout jejich
                jedinečnou osobnost. Trpělivost je klíčová, protože mazlíčci
                mají svou vlastní hlavu a často neposedí. Ale právě to dělá
                focení tak zábavným a nevyzpytatelným.
              </p>
              <p>
                Výsledné fotografie nejsou jen obrázky, ale vzpomínky na
                společné chvíle plné lásky a radosti.
              </p>
              <CardButton>
                <span>Zobrazit galerii</span>
                <svg
                  version="1.1"
                  viewBox="0 0 91 91"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fill="#ff9999"
                      d="M8.1,53.5c18.4-1,36.9-2,55.4-2.4c-8.6,6.9-16,15.6-14.7,25.3c0.4,2.6,4.3,3.4,5.9,1.6   c4.4-4.9,7.1-10.6,12-15.3c5.3-5,11.3-8.9,17.6-12.5c1.7-1,2.5-2.4,2.6-4c0.4-1.9-0.3-4-2.6-5.5c-6-4-11.8-7.7-16.9-12.9   c-4.4-4.7-8.1-10-12-15.1c-2-2.7-6.9-1.3-5.8,2.4c2.3,8.2,7.5,17,14.1,24.1c-18.5-0.5-37.2,0.4-55.6,1.3   C-0.3,40.9-0.3,53.9,8.1,53.5z"
                    />
                  </g>
                </svg>
              </CardButton>
            </div>
            <Photo src={PetSrc} alt="Kočka" />
          </Card>
        </AnimatedOnScroll>
        {/* 
        <AnimatedOnScroll>
          <Card href="/galerie/portrety" id="portrety">
            <Photo src={PortretSrc} alt="Portrét" />
            <div>
              <Heading>Portréty</Heading>
              <p>
                Srdeční záležitostí jsou pro mě portréty, přestože jsem teprve
                na začátku své cesty. Vždy se snažím zachytit nejen vzhled, ale
                i osobnost a jedinečnost každého člověka.
              </p>
              <p>
                Mým cílem není jenom vyfotit pěkný obrázek, ale vytvořit
                emotivní a autentické snímky, které v sobě nesou vaši osobní
                podstatu.
              </p>
              <p>
                Každý portrét je pro mě příležitostí vyjádřit kreativitu a
                uměleckou vizi. Spolupráce se mnou není jenom o focení, ale o
                společném objevování vaší osobní krásy a síly. Mým závazkem je
                vytvořit pro vás fotografie, které nejenom že vám budou
                připomínat krásné momenty, ale které v sobě budou skrývat vaši
                jedinečnou esenci.
              </p>
              <CardButton>
                <span>Zobrazit galerii</span>
                <svg
                  version="1.1"
                  viewBox="0 0 91 91"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      fill="#ff9999"
                      d="M8.1,53.5c18.4-1,36.9-2,55.4-2.4c-8.6,6.9-16,15.6-14.7,25.3c0.4,2.6,4.3,3.4,5.9,1.6   c4.4-4.9,7.1-10.6,12-15.3c5.3-5,11.3-8.9,17.6-12.5c1.7-1,2.5-2.4,2.6-4c0.4-1.9-0.3-4-2.6-5.5c-6-4-11.8-7.7-16.9-12.9   c-4.4-4.7-8.1-10-12-15.1c-2-2.7-6.9-1.3-5.8,2.4c2.3,8.2,7.5,17,14.1,24.1c-18.5-0.5-37.2,0.4-55.6,1.3   C-0.3,40.9-0.3,53.9,8.1,53.5z"
                    />
                  </g>
                </svg>
              </CardButton>
            </div>
          </Card>
        </AnimatedOnScroll>
        */}
        <AnimatedOnScroll>
          <Blog id="blog">
            <Heading>Blog</Heading>
            <BlogTileRow>
              {articles.map((article) => (
                <BlogTile
                  key={article.id}
                  title={article.title}
                  description={article.description}
                  date={article.date}
                  imageUrl={article.imageUrl}
                  altText={article.altText}
                  readMoreLink={`/blog/${article.id}`}
                />
              ))}
            </BlogTileRow>
            <BlogButton href="/blog">
              <span>Zobrazit všechny články</span>
              <svg
                version="1.1"
                viewBox="0 0 91 91"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    fill="#ff9999"
                    d="M8.1,53.5c18.4-1,36.9-2,55.4-2.4c-8.6,6.9-16,15.6-14.7,25.3c0.4,2.6,4.3,3.4,5.9,1.6   c4.4-4.9,7.1-10.6,12-15.3c5.3-5,11.3-8.9,17.6-12.5c1.7-1,2.5-2.4,2.6-4c0.4-1.9-0.3-4-2.6-5.5c-6-4-11.8-7.7-16.9-12.9   c-4.4-4.7-8.1-10-12-15.1c-2-2.7-6.9-1.3-5.8,2.4c2.3,8.2,7.5,17,14.1,24.1c-18.5-0.5-37.2,0.4-55.6,1.3   C-0.3,40.9-0.3,53.9,8.1,53.5z"
                  />
                </g>
              </svg>
            </BlogButton>
          </Blog>
        </AnimatedOnScroll>
      </main>
      <AnimatedOnScroll>
        <ContactBlock></ContactBlock>
      </AnimatedOnScroll>
    </>
  );
}
