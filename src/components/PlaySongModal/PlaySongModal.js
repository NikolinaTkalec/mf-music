import { useEffect, useState } from "react";
import { getSong } from "@serengeti/api";
import { ModalWindow } from "@serengeti/styleguide";
import "./playSongModal.css";

const PlaySongModal = ({ showModal, onClose, id, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [songUrl, setSongUrl] = useState();

  useEffect(() => {
    if (id) {
      const getSongUrl = async () => {
        try {
          let result = await getSong(id);
          setSongUrl(result.formats[0].url);
        } catch (error) {
          // TODO: implement error handler
          console.error(error);
        }
      };
      setIsLoading(true);
      getSongUrl();
      setIsLoading(false);
    }
  }, [id]);

  const handleClose = () => {
    setSongUrl(null);
    onClose();
  };

  return (
    <ModalWindow showModal={showModal} title={title} onClose={handleClose}>
      <iframe
        src={songUrl}
        onLoad={() => {
          setIsLoading(false);
        }}
      ></iframe>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <a id="modal-window-link" noreferrer />
      )}
    </ModalWindow>
  );
};

export default PlaySongModal;
