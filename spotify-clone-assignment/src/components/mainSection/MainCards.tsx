import bgphoto from "../../../images/asset/bgPhoto.jpg";

const MainCards = () => {
  const data = [
    {
      img: bgphoto,
      title: "Today's Top Songs",
      contest: "Here are the biggest songs biggest",
    },
    {
      img: bgphoto,
      title: "Today's Top Songs",
      contest: "Here are the biggest songs biggest",
    },
    {
      img: bgphoto,
      title: "Today's Top Songs",
      contest: "Here are the biggest songs biggest",
    },
    {
      img: bgphoto,
      title: "Today's Top Songs",
      contest: "Here are the biggest songs biggest",
    },
    {
      img: bgphoto,
      title: "Today's Top Songs",
      contest: "Here are the biggest songs biggest",
    },
  ];

  return (
    <>
      {data.map((value: { img: string; title: string; contest: string }) => (
        <div className="max-w-[160px]  rounded-lg bg-[#121212] ">
          <img
            className="rounded-t-lg h-[120px] w-[160px] object-center object-cover"
            src={value.img}
            alt="img"
          />
          <div className="p-2 bg-[#121212] rounded-b-lg">
            <h5 className="mb-2 text-sm bg-[#121212] font-bold tracking-tight text-white ">
              {value.title}
            </h5>
            <p className="mb-3 text-xs bg-[#121212] text-[rgb(167, 163, 163)] ">
              {value.contest}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainCards;
