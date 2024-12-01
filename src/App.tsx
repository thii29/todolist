import Header from "./components/Header";
import TaskList from "./section";

function App() {
  return (
    <div className="w-screen h-screen bg-custom-gray-600">
      <main className="relative">
        <Header />
        <section className="mt-16 absolute left-1/2  -translate-x-1/2">
          <TaskList />
        </section>
      </main>
    </div>
  );
}

export default App;
