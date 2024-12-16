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
      <div className="mt-8 ">
        <TaskList />
      </div>
    </main>
  );
};

export default Home;
