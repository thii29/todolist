import Header from "../components/Header"
import TaskList from "../components/Task"

const Home = () => {
  return (
    <main className="relative">
        <Header />
        <section className="mt-16 absolute left-1/2  -translate-x-1/2">
          <TaskList />
        </section>
      </main>
  )
}

export default Home