import Image from "next/image";
import Link from "next/link";

import AvatarSrc from "./images/avatar.png";
import LandscapeSrc from "./images/DSC06018-Enhanced-NR.jpg";
import AnimalSrc from "./images/DSC09353-Enhanced-NR.jpg";
import PetSrc from "./images/DSC03151-Enhanced-NR-2.jpg";
import GmailSrc from "./images/gmail.png";
import InstagramSrc from "./images/instagram.png";

import {
  Avatar,
  Container,
  Heading,
  Intro,
  Menu,
  Navbar,
  Title,
  Card,
  Photo,
  Contact,
  Icons,
} from "./styled";
import { AnimatedOnScroll } from "../components/animated-on-scroll";

export default function Home() {
  return (
    <>
      <Navbar>
        <Container>
          <Title>Káča fotí</Title>
          <Menu>
            <li>
              <a href="#uvod">O mně</a>
            </li>
            <li>
              <a href="#zvirata">Zvířata</a>
            </li>
            <li>
              <a href="#krajina">Krajina</a>
            </li>
            <li>
              <a href="#mazlicci">Mazlíčci</a>
            </li>
          </Menu>
        </Container>
      </Navbar>
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
          <Card href="/galerie/krajina" id="krajina">
            <div>
              <Heading>Krajina</Heading>
              <p>
                Fotografování krajiny je pro mě způsob, jak objevovat krásu
                světa kolem nás a uchovávat ji na snímcích. Při plánování
                výpravy si vždy pečlivě vybírám lokaci a studuji počasí, abych
                využila nejlepší světelné podmínky. Nejraději fotím při východu
                nebo západu slunce, kdy je světlo měkké a teplé, což dodává
                krajině magickou atmosféru.
              </p>
              <p>
                Během focení se soustředím na kompozici – hledám zajímavé prvky,
                které by mohly snímek ozvláštnit, jako jsou siluety stromů,
                skály nebo vodní plochy.
              </p>
              <p>
                Každá krajina má svůj jedinečný charakter a já se snažím
                zachytit její podstatu a atmosféru. Při focení mě fascinuje, jak
                světlo a stíny dokážou proměnit i známou scenérii v něco zcela
                nového a překvapivého.
              </p>
              <p>
                Fotografie krajiny mi přináší radost a inspiraci. Připomínají
                mi, jak rozmanitá a nádherná je naše planeta, a motivují mě k
                tomu, abych si jí vážila ještě více.
              </p>
            </div>
            <Photo src={LandscapeSrc} alt="Landscape" />
          </Card>
        </AnimatedOnScroll>

        <AnimatedOnScroll>
          <Card href="/galerie/zvirata" id="zvirata">
            <Photo src={AnimalSrc} alt="Swan" />
            <div>
              <Heading>Zvířata</Heading>
              <p>
                Fotografování zvířat je pro mě nádherným způsobem, jak se
                propojit s přírodou a zachytit jedinečné okamžiky v jejich
                životě.
              </p>
              <p>
                Zásadně vyrážím fotit brzy ráno, kdy jsou zvířata nejaktivnější
                a barvy přírody jsou nejvýraznější. Trpělivost je klíčová –
                často trávím hodiny čekáním na ten správný moment. Při focení se
                snažím respektovat jejich prostor a chovat se tiše, abych je
                nevyděsila.
              </p>
              <p>
                Každé setkání je jiné a pokaždé mě překvapí, jak rozmanité a
                krásné jsou detaily zvířecího světa. Každý snímek vypráví svůj
                vlastní příběh a já se snažím zachytit tu magii okamžiku.
                Fotografie zvířat mě nejen naplňují radostí, ale také mi
                připomínají, jak důležité je chránit naši přírodu a její
                obyvatele.
              </p>
            </div>
          </Card>
        </AnimatedOnScroll>

        <AnimatedOnScroll>
          <Card href="/galerie/zvirata" id="mazlicci">
            <div>
              <Heading>Mazlíčci</Heading>
              <p>
                Fotografování domácích mazlíčků je pro mě radostnou a zábavnou
                činností, která mi umožňuje zachytit jejich osobitý charakter a
                radostné momenty.
              </p>
              <p>
                Používám různé rekvizity, hračky a pamlsky, abych upoutala
                jejich pozornost a vyvolala u nich různé výrazy a pózy. Ráda
                fotím v přirozeném světle, nejlépe venku v přírodě nebo na
                zahradě, aby byly snímky co nejvíce autentické a plné života.
              </p>
              <p>
                Každý mazlíček je jiný a já se snažím vystihnout jejich
                jedinečnou osobnost. Trpělivost je klíčová, protože mazlíčci
                mají svou vlastní hlavu a často neposedí na místě. Ale právě to
                dělá focení tak zábavným a nevyzpytatelným.
              </p>
              <p>
                Výsledné fotografie nejsou jen obrázky, ale vzpomínky na
                společné chvíle plné lásky a radosti. Když se na ně podívám,
                vždycky mě zahřeje u srdce, jak moc mi mazlíčci přinášejí radost
                a jaký význam mají v životě lidí.
              </p>
            </div>
            <Photo src={PetSrc} alt="Kočka" />
          </Card>
        </AnimatedOnScroll>
        <AnimatedOnScroll>
          <Contact>
            <Container>
              <Heading>Kontakt</Heading>
              <Icons>
                <Link href="mailto:katerina.beranova4@gmail.com">
                  <Image src={GmailSrc} alt="E-mail" />
                </Link>
                <Link href="instagram.com/kacaberanova">
                  <Image src={InstagramSrc} alt="Instagram" />
                </Link>
              </Icons>
            </Container>
          </Contact>
        </AnimatedOnScroll>
      </main>
    </>
  );
}
