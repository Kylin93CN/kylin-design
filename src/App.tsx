import React from "react";
import Button, { ButtonType, ButtonSize } from "./components/Botton/button";
import './App.css'

function App() {
  return (
    <div className="App">
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        xxxxxx
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled>
        xxxxxx
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Large}
        href="https://www.baidu.com/"
      >
        LINK
      </Button>
      <Button
        btnType={ButtonType.Link}
        size={ButtonSize.Large}
        href="https://www.baidu.com/"
        disabled
      >
        LINK
      </Button>
    </div>
  );
}

export default App;
