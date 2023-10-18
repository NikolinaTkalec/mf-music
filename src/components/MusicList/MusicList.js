import { useState } from "react";
import { Thumbnail } from "@serengeti/styleguide";
import PlaySongModal from "../PlaySongModal/PlaySongModal";

export const MusicList = ({ list = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [songId, setSongId] = useState();
  const [title, setTitle] = useState();

  const handleClick = (id, title) => {
    debugger;
    setSongId(id);
    setTitle(title);
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="list-container">
        {list.map((item, i) => {
          return (
            <Thumbnail
              key={i}
              title={item.title}
              thumbnailSrc={item.thumbnail[3].url}
              onCLick={() => handleClick(item.videoId, item.title)}
            />
          );
        })}
        <PlaySongModal
          onClose={() => setShowModal(!showModal)}
          showModal={showModal}
          id={songId}
          title={title}
        />
      </div>
    </>
  );
};
