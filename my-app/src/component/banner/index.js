import { motion } from 'framer-motion';

const messages = [
  'Open To Work',
  'Disponible de suite..',
  "N'attend plus que vous !",
  'promis il ne mord pas.',
];

const Banner = () => {
  return (
    <motion.div className="bg-gray-300 w-full h-10 flex items-center">
      <motion.p
        className="flex text-center m-0"
        initial={{ x: -2000 }}
        animate={{ x: 2000 }}
        transition={{ duration: 20, repeat: Infinity }}
        default={{ ease: 'linear' }}
      >
        {messages.map((t) => (
          <span className="mr-20">{t}</span>
        ))}
      </motion.p>
    </motion.div>
  );
};

export default Banner;
