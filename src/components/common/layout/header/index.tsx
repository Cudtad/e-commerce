import Navigation from './nav/Navigation';
import Register from './register';

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <Navigation />
      <Register />
    </div>
  );
}
