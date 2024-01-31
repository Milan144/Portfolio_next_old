import Image from "next/image";

export default function Projects() {
  return (
    <div style={{ paddingTop: "150px" }}>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mb-5"
      >
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="https://impact-mvp.hommet.ch/">
            <Image
              src="/assets/img/impact.png"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
              width={500}
              height={500}
            />
            <div className="px-4 py-3 w-72 mt-30">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                School project
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Impact UGC - Landing page / MVP
              </p>
            </div>
          </a>
        </div>
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="https://cq.hommet.ch/">
            <Image
              src="/assets/img/cq.jpg"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
              width={500}
              height={500}
            />
            <div className="px-4 py-3 w-72 mt-30">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                School project
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                Campus Quest
              </p>
            </div>
          </a>
        </div>
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <a href="https://github.com/Milan144/ChatAII">
            <Image
              src="/assets/img/chataii.jpg"
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
              width={500}
              height={500}
            />
            <div className="px-4 py-3 w-72 mt-30">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                Personnal project
              </span>
              <p className="text-lg font-bold text-black truncate block capitalize">
                ChatAII
              </p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
