import Header from "../components/Header";
import NavHeader from "../components/NavHeader";
import TaskList from "../components/Task";

const Home = () => {
  return (
    <main className="relative">
      <Header />
      <div className="flex justify-center">
        <NavHeader />
      </div>
      <div className="mt-16 absolute left-1/2 -translate-x-1/2">
        <TaskList />
      </div>
    </main>
  );
};

export default Home;
