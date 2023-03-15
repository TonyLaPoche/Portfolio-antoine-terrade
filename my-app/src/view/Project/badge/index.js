// == Import

import { Badge } from 'react-materialize';

// == Composant
const BadgeM = ({ etat }) => {
  return (
    <Badge
      className={`white-text ${etat === 'terminé' ? 'green' : 'orange'}`}
      newIcon={false}
    >
      {etat}
    </Badge>
  );
};

// == Export
export default BadgeM;
