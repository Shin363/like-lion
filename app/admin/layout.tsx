import Link from "next/link";
import AdminHeader from "./components/AdminHeader";
import AdminAside from "./components/AdminAside";
import AdminFooter from "./components/AdminFooter";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="n-layout n-aside-size:full1 n-aside-float1 n-aside-pos:right1">
      <AdminHeader />
      <div className="xl:w:xlarge">
        <AdminAside />
        {children}
      </div>
      <AdminFooter />
    </div>
  );
};

export default Layout;
