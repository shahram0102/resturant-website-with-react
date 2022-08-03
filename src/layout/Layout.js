import { BottomMenu } from "../components/BottomMenu";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <BottomMenu />
    </>
  );
};

export default Layout;
