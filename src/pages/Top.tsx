import { Container } from "@material-ui/core";
import React, { FC } from "react";
import { AudioPlayer } from "../components/AudioPlayer";

const Top: FC = () => {
  return (
    <>
      <Container maxWidth="sm">
        <h1>こんばんは</h1>
        <h2>音楽再生プレイヤーを作成中</h2>
        <h2>Firebaseにアップロードを検討中</h2>

        <AudioPlayer></AudioPlayer>
      </Container>
    </>
  );
};

export default Top;
