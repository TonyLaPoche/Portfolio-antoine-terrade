// == Import
// import PropTypes from 'prop-types';
import { Chip, Icon } from 'react-materialize';
// == Composant

const Techno = ({ techno }) => {
  return (
    <Chip
      close={false}
      closeIcon={<Icon className="close">close</Icon>}
      options={null}
    >
      {techno}
    </Chip>
  );
};

// == Export
export default Techno;
