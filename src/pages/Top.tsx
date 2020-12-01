import { Container } from "@material-ui/core";
import React, { FC } from "react";
import { AudioPlayer } from "../components/AudioPlayer";

const Top: FC = () => {
  return (
    <>
      <Container maxWidth="sm">
        <h1>こんばんは</h1>
        <h2>音楽再生プレイヤーを作成中</h2>
        <p>作れるかはわからないっす</p>
        <p>prettierが効いてないようで四苦八苦中</p>

        <AudioPlayer></AudioPlayer>
      </Container>
    </>
  );
};

export default Top;
