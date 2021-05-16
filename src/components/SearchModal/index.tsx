import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import noImg from "../../assets/noImg.png";

import * as global from "../../global/global";

import { Container } from "./styles";

interface Result {
  id: number;
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

interface SearchModalProps {
  results: Result[];
  isOpen: boolean;
  onRequestClose: () => void;
}

export function SearchModal({
  results,
  isOpen,
  onRequestClose,
}: SearchModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="close modal" />
      </button>

      {results.map((result) => (
        <Container key={result.id}>
          <img
            src={
              result.poster_path
                ? process.env.REACT_APP_IMG + result.poster_path
                : noImg
            }
            alt={result.title}
          />
          <p>
            <strong>Título:</strong> {result.title}
          </p>
          <br />
          <p>
            <strong>Avaliação:</strong> {result.vote_average}
          </p>
          <br />
          <p>
            <strong>Lançamento:</strong>{" "}
            {result.release_date
              ? global.convertToDateBr(result.release_date)
              : "-"}
          </p>
          <br />
          <p>
            <strong>Descrição:</strong> {result.overview}
          </p>
          <br />
        </Container>
      ))}
    </Modal>
  );
}
