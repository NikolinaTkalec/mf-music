import { useEffect, useState } from "react";
import { getSong } from "@serengeti/api";
import { ModalWindow } from "@serengeti/styleguide";
import "./playSongModal.css";

const PlaySongModal = ({ showModal, onClose, id, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [songUrl, setSongUrl] = useState();
  useEffect(() => {
    if (id) {
      debugger;
      setIsLoading(true);
      getSong(id).then(
        (result) => {
          debugger;
          setSongUrl(result.formats[0].url);
        },
        (error) => {
          // TODO: implement error handler
          console.error(error);
        }
      );
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
