import { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      layout
      data-expanded={isOpen}
      initial={{ borderRadius: 50 }}
      className="flex h-[100px] w-[100px] items-center justify-center bg-black data-[expanded=true]:h-[200px] data-[expanded=true]:w-[400px]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout className="h-10 w-10 rounded-full bg-white" />
    </motion.div>
  );
};

export default App;
