import { Link } from "react-router-dom"
import { assets } from "../../../constants"
import About from "./About"
import Features from "./Features"
import Contact from "./Contact"
import Footer from "../../components/partials/Footer"



const Home = () => {
  return (
    <main className="flex flex-col gap-16">
      <section id="home" className="w-full px-16">

        <div className="text mt-34 mb-8">
          <h1>Streamline Your Library and Lab <br /> Experience with Resourcify</h1>
          <p className="mt-[8px] text-center">Discover, Book, and Manage Resources Effortlessly – All in One Place.</p>

          <div className="flex items-center justify-center gap-[8px] mt-[16px]">
            <button className="primary_btn">Join as Academia</button>
            <button className="sec_btn">Join as Coordinator</button>
          </div>
        </div>

        <div className="flex w-full gap-4 group h-[500px]">
          <div className="flex-1 transition-all duration-500 ease-in-out group-hover:flex-[0.9] hover:flex-[1.3]">
            <img
              src={assets.library_home}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          </div>
          <div className="flex-1 transition-all duration-500 ease-in-out group-hover:flex-[0.9] hover:flex-[1.3]">
            <img
              src={assets.lab_resources_home}
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          </div>
          <div className="flex-1 transition-all duration-500 ease-in-out group-hover:flex-[0.9] hover:flex-[1.3]">
            <img
              src={assets.discussion_room_home}
              className="w-full h-full object-cover object-center rounded-lg"
              alt=""
            />
          </div>
        </div>

      </section>
      <Features />
      <About />
      <Footer />
    </main>
  )
}

export default Home
