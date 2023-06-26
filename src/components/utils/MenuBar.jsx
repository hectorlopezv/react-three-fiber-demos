export default function MenuBar({ setSection, menuOpen, setMenuOpen }) {
  return (
    <>
      <button
        onClick={() => setMenuOpen((predicate) => !predicate)}
        className="z-20 fixed top-12 right-12 p-3 bg-indigo-700 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            menuOpen ? "rotate-45 translate-y-0.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            menuOpen ? "hidden" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all  ${
            menuOpen ? "-rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col ${
          menuOpen ? "w-80" : "w-0"
        }`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton onClick={() => setSection(0)} label="About" />
          <MenuButton onClick={() => setSection(1)} label="Skills" />
          <MenuButton onClick={() => setSection(2)} label="Projects" />
          <MenuButton onClick={() => setSection(3)} label="Contact" />
        </div>
      </div>
    </>
  );
}

const MenuButton = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};
