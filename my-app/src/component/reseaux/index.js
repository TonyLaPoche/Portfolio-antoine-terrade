// == Import
import { Col, Row, Card, CardTitle, Icon } from 'react-materialize';
import discordIcon from '../../../src/assets/SVG/discord-icon-svgrepo-com.svg';
import LinkDinIcon from '../../../src/assets/SVG/icons8-linkedin-144.svg';
import GitHubIcon from '../../../src/assets/SVG/icons8-github-squared.svg';

// TODO - A déplacer dans fakeProps
const fakeReseauxProps = [
  {
    id: 1,
    name: 'LinkdIn',
    title: 'Mon Profil',
    link: 'https://www.linkedin.com/in/antoine-terrade-web/',
    content: [
      'LinkedIn est une plateforme professionnelle incontournable pour tout développeur en quête de nouvelles opportunités. ',
      "Vous cherchez un développeur compétent et passionné pour rejoindre votre équipe ? Ne cherchez pas plus loin ! Mon profil LinkedIn regroupe toutes les informations nécessaires pour comprendre mon parcours et mes compétences en programmation. N'hésitez pas à me contacter directement sur la plateforme pour discuter de vos besoins et de la manière dont je pourrais y répondre.",
    ],
    picture: LinkDinIcon,
  },
  {
    id: 2,
    name: 'GitHub',
    title: 'Mon Profil',
    link: 'https://github.com/TonyLaPoche',
    content: [
      'GitHub est un outil indispensable pour tout développeur souhaitant partager et collaborer sur des projets open-source.',
      "Vous cherchez un développeur capable de créer des projets innovants et de haute qualité ? Mon profil GitHub est le parfait endroit pour commencer. Vous y trouverez des exemples de mes projets passés, qui illustrent mes compétences en programmation et ma créativité. N'hésitez pas à me contacter si vous êtes intéressé par une collaboration sur un projet ou pour discuter de vos besoins en développement.",
    ],
    picture: GitHubIcon,
  },
  {
    id: 3,
    name: 'Discord',
    title: 'Mon Serveur',
    link: 'https://discord.gg/zkeCnAsByF',
    content: [
      "Discord est une plateforme de communication en ligne qui permet de rester en contact avec d'autres développeurs et passionnés de technologie.",
      "Si vous cherchez un développeur qui aime travailler en équipe et qui est toujours à la recherche de nouveaux défis, vous devriez me rejoindre sur Discord. J'y suis présent en tant que TonyPocketSan#9907, où j'aime discuter avec d'autres professionnels de la tech et collaborer sur des projets innovants. N'hésitez pas à me contacter si vous souhaitez discuter de vos projets ou de vos besoins en développement.",
    ],
    picture: discordIcon,
  },
];

// TODO - A déplacer

const MonReseaux = fakeReseauxProps.map((elt, index) => (
  <Col key={index} s={12} m={6} l={4}>
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={elt.picture} reveal waves="light" />}
      reveal={
        <>
          {elt.content.map((elt2, index2) => (
            <p key={index2}>{elt2}</p>
          ))}
          <a href={elt.link}>{elt.name}</a>
        </>
      }
      revealIcon={<Icon>more_vert</Icon>}
      title={elt.name}
    >
      <p>{elt.title}</p>
    </Card>
  </Col>
));

// == Composant
const Reseaux = () => {
  return (
    <section id="mes-reseaux" className="container center">
      <Row>{MonReseaux}</Row>
    </section>
  );
};

// == Export
export default Reseaux;
