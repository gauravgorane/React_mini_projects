import styles from "../styles/main.module.css";
import { useEffect, useRef, useState } from "react";
import * as htmlToImage from "html-to-image";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
    memeImageAlt: "Demo",
  });

  const [allMemes, setAllMemes] = useState([]);
  const myRef = useRef(null);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function handleClick() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    setMeme((i) => ({
      ...i,
      randomImg: allMemes[randomNumber].url,
      memeImageAlt: allMemes[randomNumber].name,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  const downloadMeme = async () => {
    const dataUrl = await htmlToImage.toPng(myRef.current);
    const link = document.createElement("a");
    link.download = "Meme.png";
    link.href = dataUrl;
    link.click();
  };

  return (
    <main className={styles.memePage}>
      <div className={styles.form}>
        <div>
          <label htmlFor="top-text" className={styles.labels}>
            Top text
          </label>
          <input
            type="text"
            className={styles.inputs}
            placeholder="Top text"
            id="top-text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bottom-text" className={styles.labels}>
            Bottom text
          </label>
          <input
            type="text"
            className={styles.inputs}
            placeholder="Bottom text"
            id="bottom-text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className={styles.btn} onClick={handleClick}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className={styles.memeDiv} onDoubleClick={downloadMeme}>
        <div ref={myRef} className={styles.memeImage}>
          <h2 className={`${styles.memeText} ${styles.top}`}>{meme.topText}</h2>
          <h2 className={`${styles.memeText} ${styles.bottom}`}>
            {meme.bottomText}
          </h2>
          <img src={meme.randomImg} alt={meme.memeImageAlt} />
        </div>
      </div>
    </main>
  );
}
