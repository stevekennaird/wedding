import headerImg from "../../img/lindos-mare-1.jpg";

function Header() {
  return (
    <header id="page-title">
      <span className="fancy primary-color text-xl mt-2 lg:mt-4 block">
        The wedding of
      </span>
      <h1 className="fancy">Steve and Sharon</h1>
      <div className="text-lg mb-2 font-medium">24th May 2024</div>
      <div className="mb-2 lg:mb-4">Lindos Mare Hotel, Rhodes</div>
      <img
        className="w-full max-w-full shadow-inner"
        src={headerImg}
        alt="Lindos Mare Hotel"
      />
    </header>
  );
}

export default Header;
