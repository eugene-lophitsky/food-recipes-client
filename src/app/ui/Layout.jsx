import { Navigation } from "../../widgets/navigation/ui/index.js";
import styles from "./Layout.module.css";
import { Header } from "../../widgets/header/ui/index.js";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Navigation />
        {children}
        <p></p>
      </div>
    </>
  );
};

export default Layout;
