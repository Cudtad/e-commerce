import Navigation from './nav/Navigation';
import SignIn from './sign-in';

export default function Header() {
  return (
    <div className="bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center py-4 mx-auto max-w-screen-xl">
        <Navigation />
        <SignIn />
      </div>
    </div>
  );
}
