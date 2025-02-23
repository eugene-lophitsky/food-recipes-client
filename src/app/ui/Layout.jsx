import { Navigation } from "../../widgets/navigation/ui/index.js";
import styles from "./Layout.module.css";
import { Header } from "../../widgets/header/ui/index.js";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Navigation />
        {children}
      </div>
    </>
  );
};

export default Layout;
