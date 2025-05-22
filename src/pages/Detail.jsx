import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const id = query.get("id");

  return <div>{id}</div>;
};
export default Detail;
