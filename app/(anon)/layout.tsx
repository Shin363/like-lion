import Header from "./components/Header";
import Footer from "./components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return (
    <div>
      <div>
        <Header />
      </div>
      {children}
      <Footer />
    </div>
  );
}
