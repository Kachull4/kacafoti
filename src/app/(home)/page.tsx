"use client";

import AvatarSrc from "./images/avatar.webp";
import LandscapeSrc from "./images/krajina.jpg";
import AnimalSrc from "./images/pelican.jpg";
import PetSrc from "./images/DSC03151-Enhanced-NR-2.jpg";
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
        <Intro id="about">
          <Container>
            <Avatar src={AvatarSrc} alt="Avatar" />
            <div>
              <Heading>
                Ahoj! Jmenuji se Káča a vítám vás na mém kreativním kousku
                internetu
              </Heading>
              <p>
                Fotím, maluju, ztrácím se v přírodě a zkoumám svět skrz
                objektiv. Od dětství mě fascinují zvířata, barvy a detaily,
                kterých si většina lidí nevšimne.
              </p>
              <p>
                Nejčastěji fotím přírodu, zvířata a rostliny v jejich přirozeném
                prostředí, ať už někde v tropech nebo doma na zahradě. Každá
                fotka pro mě nese konkrétní moment, náladu a příběh.
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
          <Card href="/galerie/zvirata" id="gallery">
            <div>
              <Heading>Zvířata</Heading>
              <p>
                Fotografování zvířat je pro mě výzva i terapie. Miluju ten
                moment ticha, kdy čekám, co se objeví, a jestli vůbec. Vyrážím
                brzo ráno, kdy je světlo nejměkčí a příroda nejživější.
              </p>
              <p>
                Trpělivost je klíčová, někdy čekám hodiny, jindy to trvá jen pár
                vteřin. Snažím se zvířata nerušit, být spíš pozorovatel než
                narušitel.
              </p>
              <p>
                Každý snímek je pro mě malý příběh. Někdy klidný, jindy
                dramatický. Ale vždycky opravdový.
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
                Krajinu nefotím jen proto, že je hezká. Zajímá mě atmosféra,
                světlo, struktura. Než zmáčknu spoušť, trávím dost času výběrem
                místa, sledováním světla i počasí.
              </p>
              <p>
                Miluju zlatou hodinku, východ nebo západ slunce, kdy všechno na
                chvíli ztichne a krajina se promění.
              </p>
              <p>
                Nehledám pohlednicové scenérie, spíš momenty, které ve mně něco
                zanechají.
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
                Focení mazlíčků je kombinace radosti, chaosu a trpělivosti.
                Každý pes nebo kočka je jiná a právě to mě na tom baví
              </p>
              <p>
                Ráda fotím venku v přirozeném světle. Hračky, pamlsky a rychlé
                reakce jsou základ. Většinou to není o pózování, ale o zachycení
                momentu, výrazu nebo pohybu.
              </p>
              <p>
                Výsledkem nejsou jen hezké fotky, ale hlavně vzpomínky. Na
                chvíle, které s námi ti chlupatí parťáci sdílejí.
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
        <AnimatedOnScroll>
          <Blog id="blog">
            <Heading>Blog</Heading>
            <BlogTileRow>
              {articles
                .sort((a, b) => {
                  const [dayA, monthA, yearA] = a.date.split(".").map(Number);
                  const [dayB, monthB, yearB] = b.date.split(".").map(Number);
                  return (
                    new Date(yearB, monthB - 1, dayB).getTime() -
                    new Date(yearA, monthA - 1, dayA).getTime()
                  );
                })
                .slice(0, 3)
                .map((article) => (
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
