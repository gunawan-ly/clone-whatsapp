import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white h-screen">
        <Header />
        <Main />
        <div className="mt-14">
          <h1 className="text-2xl text-center font-bold text-teal-500">
            Hello i'm Awanophile
          </h1>
        </div>
      </div>
    </>
  );
};

export default App;
