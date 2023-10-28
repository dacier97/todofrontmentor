import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

function App() {
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen bg-gray-300">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className=" text-3xl uppercase text-white font-bold tracking-[0.3em] ">
            todo
          </h1>
          <button>
            <MoonIcon className="fill-red-500" />
          </button>
        </div>

        <form
          action=""
          className="bg-white rounded-md overflow-hidden py-4 px-4 flex gap-4 items-center mt-8"
        >
          <span className="rounded-full border-2 inline-block h-5 w-5"></span>
          <input
            className="w-full text-gray-400 outline-none"
            type="text"
            placeholder="Create a new TODO.."
          />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <div className="rounded-md bg-white [&>article]:p-4">
          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="rounded-full border-2 inline-block h-5 w-5 flex-none">
              🛞
            </button>
            <p className="text-gray-600 grow">complete taks now</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-gray-400 border-b ">
            <button className="rounded-full border-2 inline-block h-5 w-5 flex-none">
              🛞
            </button>
            <p className="text-gray-600 grow">complete taks now</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-gray-400 border-b ">
            <button className="rounded-full border-2 inline-block h-5 w-5 flex-none">
              🛞
            </button>
            <p className="text-gray-600 grow">complete taks now</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-gray-400 border-b">
            <button className="rounded-full border-2 inline-block h-5 w-5 flex-none">
              🛞
            </button>
            <p className="text-gray-600 grow">complete taks now</p>
            <button className="flex-none">
              <CrossIcon />
            </button>
          </article>

          <section className="flex justify-between">
            <span className="text-gray-400">5 items left</span>
            <button className="text-gray-400">clear completed</button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-white p-4 flex justify-center gap-4 rounded-md">
          <buttonc className="text-blue-600">All</buttonc>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>
      <section>
        <p className="text-center mt-8">Drag and drop list</p>
      </section>
    </div>
  );
}

export default App;
