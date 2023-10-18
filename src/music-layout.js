import React, { useEffect, useState } from "react";
import { getAllSongs, getAllNews } from "@serengeti/api";
import { MusicList } from "./components/MusicList/MusicList";

export const MusicLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState();

  useEffect(() => {
    setIsLoading(true);
    getAllSongs()
      .then(
        (result) => {
          setList(result.data);
        },
        (error) => {
          // TODO: implement gloabal error handler
          console.error(error);
        }
      )
      .finally(setIsLoading(false));
    getAllNews().then((res) => {
      console.log(res);
    });
  }, []);

  if (isLoading) {
    // TODO: implement global loader
    return <div>Loading....</div>;
  }

  return <MusicList list={list} />;
};
