// == Composant
const BadgeM = ({ etat }) => {
  return (
    <div
      className={`text-white absolute top-5 right-5 text-lg p-1 font-medium ${etat === 'opérationnel' ? 'bg-green-600' : 'bg-orange-500'}`}
      newIcon={false}
    >
      {etat}
    </div>
  );
};

// == Export
export default BadgeM;
