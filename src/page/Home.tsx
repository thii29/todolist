import Header from '../components/Header';
import NavHeader from '../components/NavHeader';
import TaskList from '../components/Task';
import TaskProvider from '../providers/TaskProvider';

const Home = () => {
  return (
    <TaskProvider>
      <main className="relative">
        <Header />
        <div className="flex justify-center">
          <NavHeader />
        </div>
        <div className="mt-6">
          <TaskList />
        </div>
      </main>
    </TaskProvider>
  );
};

export default Home;
