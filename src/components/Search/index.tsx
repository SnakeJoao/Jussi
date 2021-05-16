import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { SearchModal } from "../SearchModal";

import { api } from "../../services/api";

import { Container } from "./styles";

export default function Search() {
  const [showSearchModal, setShowSearchModal] = useState(false);

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState([]);
  const [text, setText] = useState("");

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await api.get(
        `/search/movie?language=pt-BR&query=${text}&api_key=${process.env.REACT_APP_KEY}`
      );

      const { results } = response.data;
      if (results) {
        setValue(results);
        setLoading(false);
        handleOpenSearchModal();
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function handleOpenSearchModal() {
    setShowSearchModal(true);
  }

  function handleCloseSearchModal() {
    setValue([]);
    setText("");
    setShowSearchModal(false);
  }
  return (
    <Container>
      <SearchModal
        results={value}
        isOpen={showSearchModal}
        onRequestClose={handleCloseSearchModal}
      />
      <form onSubmit={handleSearch}>
        <input
          disabled={loading}
          value={text}
          onChange={(event) => setText(event.target.value)}
          type=""
          placeholder="Buscar"
        />
        <button disabled={loading} type="submit">
          <FiSearch />
        </button>
      </form>
    </Container>
  );
}
