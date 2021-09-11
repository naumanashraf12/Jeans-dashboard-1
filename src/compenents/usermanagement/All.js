import React, { useEffect, useState } from "react";
import UserDetail from "./UserDetail";

function All(props) {
  const { active } = props;
  console.log(active);
  const [Data, setData] = useState([
    {
      name: "noman",
      email: "naumanashraf30@gail.com",
      img: "/images/Ellipse 10.svg",
    },
    {
      name: "noman",
      email: "naumanashraf30@gail.com",
      img: "/images/Ellipse 10.svg",
    },
    {
      name: "noman",
      email: "naumanashraf30@gail.com",
      img: "/images/Ellipse 10.svg",
    },
  ]);
  useEffect(() => {
    if (active === "all")
      setData([
        {
          name: "noman ahmed",
          email: "naumanashraf30@gail.com",
          img: "/images/Ellipse 10.svg",
        },
        {
          name: "noman ashraf",
          email: "naumanashraf30@gail.com",
          img: "/images/Ellipse 10.svg",
        },
      ]);
    else if (active === "active")
      setData([
        {
          name: "sooban",
          email: "naumanashraf30@gail.com",
          img: "/images/Ellipse 10.svg",
        },
      ]);
    else if (active === "blocked")
      setData([
        {
          name: "zeeshan",
          email: "naumanashraf30@gail.com",
          img: "/images/Ellipse 10.svg",
        },
      ]);
    else if (active === "remove")
      setData([
        {
          name: " ahmed",
          email: "naumanashraf30@gail.com",
          img: "/images/Ellipse 10.svg",
        },
        {
          name: " ahmed",
          email: "naumanashraf30@gail.com",
          img: "/images/Ellipse 10.svg",
        },
      ]);
  }, [active]);

  return (
    <>
      {Data.map((el) => {
        return <UserDetail name={el.name} email={el.email} img={el.img} />;
      })}
    </>
  );
}
export default All;
