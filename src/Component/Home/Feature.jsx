import Img from "../../assets/Home/menu/burger3.jpg";

const Feature = () => {
  return (
    <div className="hero min-h-screen text-black mb-24 bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          data-aos="zoom-in"
          src={Img}
          className="md:max-w-lg rounded-[18px] "
          alt=" image"
        />
        <div className="md:w-1/2 px-6 ">
          <p className=" my-2 font-semibold ">You are most welcome</p>
          <h1 className="text-4xl font-bold mb-6 text-yellow-600">
            About Our Food
          </h1>
          <p className="py-6 text-xl ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa, qui
            ipsa vitae obcaecati sed deserunt eius omnis id et itaque iste
            asperiores assumenda, quis cupiditate in ex ducimus? Tempore quod
            eaque velit alias minus nisi at rerum, reprehenderit rem aperiam
            iure, corporis ullam dicta cum labore facilis explicabo. Neque
            soluta quisquam, ipsa porro deserunt vero. Eaque odit repudiandae
            quod asperiores reprehenderit deleniti eos tenetur dolorem illo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
