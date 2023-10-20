import './styles.scss';

const InputAnimation = () => {
  return (
    <div className="border-b-2 border-[#cccccc1a] relative ">
      <input
        className="bg-transparent outline-none caret-white text-sm text-white font-medium w-full pb-1 input-animation"
        placeholder="email@example.com"
      />
      <div className="absolute w-0 h-0.5 bg-primary left-0 bottom-0 focus-input"></div>
    </div>
  );
};

export default InputAnimation;
