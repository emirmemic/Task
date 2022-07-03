import React, { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Modal from "./components/modal";
import Row from "./components/row";

function App() {
  const [modalData, setModalData] = useState();
  const [data, setData] = useState([
    {
      position: 1,
      name: "Item1",
      score: 0,
    },
    {
      position: 2,
      name: "Item2",
      score: 0,
    },
    {
      position: 3,
      name: "Item3",
      score: 0,
    },
    {
      position: 4,
      name: "Item4",
      score: 0,
    },
    {
      position: 5,
      name: "Item5",
      score: 0,
    },
    {
      position: 6,
      name: "Item6",
      score: 0,
    },
  ]);

  const handleScoreSubmit = (v1, v2) => {
    let temp = modalData;
    let tempData = data;
    let itemToUpdate;
    let indexOfItemToUpdate;

    if (v1 === v2) {
      handleNextPair();
      setData(tempData);
      return;
    }
    if (v1 > v2) {
      indexOfItemToUpdate = tempData.indexOf(temp["1"]);
      temp["1"].score++;
      itemToUpdate = tempData.filter((e) => e.position === temp["1"].position);
    } else {
      indexOfItemToUpdate = tempData.indexOf(temp["2"]);
      temp["2"].score++;
      itemToUpdate = tempData.filter((e) => e.position === temp["2"].position);
    }
    tempData[indexOfItemToUpdate] = itemToUpdate[0];
    handleNextPair();
    setData([...tempData]);
  };

  const handleNextPair = () => {
    let item1 = modalData["1"];
    let item2 = modalData["2"];
    let i1index = data.indexOf(item1);
    let i2index = data.indexOf(item2);

    if (i1index === data.length - 1 && i2index === data.length - 2) {
      setModalData();
    } else {
      if (i1index === i2index + 1) {
        i2index++;
      }
      if (i2index < data.length - 1) {
        i2index++;
      } else {
        i1index++;
        i2index = 0;
      }
      setModalData({ 1: data[i1index], 2: data[i2index] });
    }
  };
  return (
    <div className="App">
      <div className="table-wrapper">
        {data &&
          data.map((e, i) => {
            return <Row key={e.position + i + "-" + i} item={e} />;
          })}
      </div>
      <Button onClick={() => setModalData({ 1: data[0], 2: data[1] })}>
        Start
      </Button>
      {modalData && (
        <Modal
          close={() => setModalData()}
          submit={handleScoreSubmit}
          label1={modalData["1"].name}
          label2={modalData["2"].name}
        />
      )}
    </div>
  );
}

export default App;
