import Link from "next/link";
import { Contact, Container, Heading, Icons } from "../(home)/styled";
import Image from "next/image";
import GmailSrc from "./images/gmail.png";
import InstagramSrc from "./images/instagram.png";

export const ContactBlock = () => {
  return (
    <Contact id="kontakt">
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
  );
};
