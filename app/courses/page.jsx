import CourseDetails from "@/app/courses-components/homepage/CourseDetails";
import CourseModule from "@/app/courses-components/homepage/CourseModule";
import Hero from "@/app/courses-components/homepage/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <CourseDetails />
      <CourseModule />
    </>
  );
};

export default Home;
