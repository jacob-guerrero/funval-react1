import { Cards } from "./components/Cards";

function App() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between max-w-5xl mx-auto">
        <h1 className="p-4 text-2xl font-bold">The creative crew</h1>

        <div>
          <h2 className="px-8 font-semibold md:pt-4 md:px-0 md:pr-4">
            Who we are
          </h2>
          <p className="max-w-sm px-8 md:px-0 md:pr-4 ">
            We are team of creatively diverse, driven, innovative individuals
            working in various locations from the world.
          </p>
        </div>
      </div>

      <Cards />

      <img
        src="/icons/dark_mode.svg"
        alt="toggle mode"
        className="absolute top-3 right-3"
      />
    </>
  );
}

export default App;
