import React from "react";
import GroupDetail from "./GroupDetail";

function AllGroups() {
  const notiData = [{}, {}, {}];
  return (
    <>
      {notiData.map((el) => {
        return <GroupDetail />;
      })}
    </>
  );
}

export default AllGroups;
