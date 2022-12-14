import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const App = () => {
  const { title } = useSelector((state) => state.application);
  return <Heading>{title}</Heading>;
};

export default App;
