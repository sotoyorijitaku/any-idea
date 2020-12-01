import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Slider,
} from "@material-ui/core";
import { Pause, PlayArrow } from "@material-ui/icons";
import React, { FC, useCallback, useEffect, useState } from "react";

export const AudioPlayer: FC = () => {
  const [audio] = useState<HTMLAudioElement>(new Audio("./sample.mp3"));
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [doLoop, setDoLoop] = useState<boolean>(true);

  const handleClickPlay = useCallback(() => {
    audio.play();
  }, []);

  const handleClickPause = useCallback(() => {
    audio.pause();
  }, []);

  const handleChangeLoop = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      audio.loop = checked;
      setDoLoop(checked);
    },
    []
  );

  const handleChangeSlider = useCallback((e, value) => {
    audio.currentTime = Math.round(value);
    setCurrentTime(value);
  }, []);

  useEffect(() => {
    audio.addEventListener("timeupdate", () => {
      setCurrentTime((audio.currentTime / audio.duration) * 100);
    });
  }, []);

  return (
    <>
      <IconButton onClick={handleClickPlay}>
        <PlayArrow></PlayArrow>
      </IconButton>
      <IconButton onClick={handleClickPause}>
        <Pause></Pause>
      </IconButton>
      <FormControlLabel
        control={
          <Checkbox
            checked={doLoop}
            onChange={handleChangeLoop}
            value="Loop"
          ></Checkbox>
        }
        label="Loop"
      ></FormControlLabel>
      <Slider
        value={currentTime}
        onChange={handleChangeSlider}
        min={0}
        step={0.00001}
        max={audio.duration}
      ></Slider>
      <p>
        <span>
          {Math.floor(audio.currentTime / 60)}分
          {Math.floor(audio.currentTime % 60)}秒
        </span>
        <span>/</span>
        <span>
          {Math.floor(audio.duration / 60)}分{Math.floor(audio.duration % 60)}秒
        </span>
      </p>
    </>
  );
};
