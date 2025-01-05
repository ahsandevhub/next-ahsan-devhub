import Header from "@/app/courses-components/common/Header";
import "./styles.css";

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default RootLayout;
