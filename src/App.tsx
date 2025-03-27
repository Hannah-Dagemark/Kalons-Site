import { useState } from "react";
import "./App.css";
import Background from "./components/background";
import Commission from "./components/page/commission";
import Link from "./components/page/link";
import Refsheet from "./components/page/refsheet";
import LinkRow from "./components/linkrow";
import { Button } from "./components/common/Button";

function App() {
  console.log("Loading app");
  const [page, setPage] = useState("Links");
  const changePage = (page: string) => {
    setPage(page);
  };
  return (
    <>
      <Background>
        <header>
          <h1>Kalon the Bee</h1>
          <LinkRow>
            <Button label="Links" onClick={() => changePage("Links")} />
            <Button
              label="Commission"
              onClick={() => changePage("Commission")}
            ></Button>
            <Button
              label="Refsheet"
              onClick={() => changePage("Refsheet")}
            ></Button>
          </LinkRow>
        </header>
        {page === "Links" ? (
          <Link />
        ) : page === "Commission" ? (
          <Commission />
        ) : page === "Refsheet" ? (
          <Refsheet />
        ) : (
          <div>
            <p>Error, no page found</p>
          </div>
        )}
      </Background>
    </>
  );
}

export default App;
