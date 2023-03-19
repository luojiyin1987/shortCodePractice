import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

type Videos = {
  [key: string]: string;
};

const videos: Videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};

const videoNames = Object.keys(videos);

const Home: NextPage = () => {
  const [videoSrc, setVideoSrc] = useState(videos.cat);

  function onSelectVideo(video: string) {
    const videoSrc = videos[video];
    setVideoSrc(videoSrc);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <div>
        <h1>Project 6: Video Player</h1>
        <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
        <Video videoSrc={videoSrc} />
      </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

function Menu({ onSelectVideo, videoValues }) {
  return (
    // rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <form onClick={(event) => onSelectVideo(event.target.value)}>
      {videoValues.map((value, index) => (
        // eslint-disable-next-line react/jsx-key
        <div className={styles.videoInputs}>
          {/* rome-ignore lint/suspicious/noArrayIndexKey: <explanation> */}
          <input key={index} type="radio" name="src" value={value} /> {value}
        </div>
      ))}
    </form>
  );
}

function Video({ videoSrc }:{videoSrc:string}) {
  return (
    <div  >
      <video  className= {styles.video} loop controls autoPlay muted src={videoSrc} />
    </div>
  );
}

export default Home;
