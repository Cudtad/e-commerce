import Header from './header';
import Footer from './footer';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <main className="max-w-7xl mx-auto">
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
