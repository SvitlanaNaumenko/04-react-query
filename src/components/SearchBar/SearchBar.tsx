import toast, { Toaster } from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query")?.toString().trim();

    if (!query) {
      toast("Please enter your search query.", {
        icon: "⚠️",
        style: {
          background: "#333",
          color: "#fff",
        },
      });
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={styles.header}>
      <Toaster position="top-right" />
      <div className={styles.container}>
        <a
          className={styles.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>
        <form action={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}
