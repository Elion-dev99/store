html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #111;
  color: #fff;
  font-family: monospace;
}

#app {
  width: 100vw;     /* 画面幅いっぱい */
  height: 100vh;    /* 画面高さいっぱい */
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
}

#enemy {
  font-size: 24px;
}

#log {
  flex: 1;                /* 残り全部をログに使う */
  margin-top: 12px;
  background: #222;
  padding: 10px;
  border-radius: 8px;
  overflow-y: auto;
  font-size: 14px;
}
