import { v4 as UUID } from "uuid";

const guid = () => {
  const id = UUID();
  return id;
};

export default guid