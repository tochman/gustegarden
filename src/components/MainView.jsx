import { Heading } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const MainView = () => {
  const { title } = useSelector((state) => state.application);
  return <Heading data-cy="title">{title}</Heading>;
};

export default MainView;