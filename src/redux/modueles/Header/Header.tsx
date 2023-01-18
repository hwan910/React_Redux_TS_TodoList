import { useNavigate } from "react-router-dom";
import Head from "./styled";
const Header = () => {
  const navigate = useNavigate();
  return (
    <Head
      onClick={() => {
        navigate("/");
      }}
    >
      ✓ To-Do
    </Head>
  );
};
export default Header;
