import React, { useEffect, useState } from "react";
import { getAllSongs } from "@serengeti/api";
import { MusicList } from "./components/MusicList/MusicList";

export const MusicLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [list, setList] = useState();

  useEffect(() => {
    const getList = async () => {
      try {
        let result = await getAllSongs();
        setList(result.data);
      } catch (error) {
        // TODO: implement gloabal error handler
        console.error(error);
      }
    };
    setIsLoading(true);
    getList();
    setIsLoading(false);
  }, []);

  if (isLoading) {
    // TODO: implement global loader
    return <div>Loading....</div>;
  }

  return <MusicList list={list} />;
};
