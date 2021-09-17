import React from "react";
import { useParams } from "react-router-dom";
import useStore from "../../store";

export default function Facts() {
  const myths = useStore((state) => state.myths);
  const newmyths = Object.values(myths);

  const { factsID } = useParams();

  const filtermyths = newmyths[0].filter((item) => item.id == factsID);

  const facts = filtermyths.map((item) => [
    <div>
      {item.facts.map((fact) => {
        return (
          <p style={{ color: "white", textAlign: "center" }}>
            {fact.truth_statement}
          </p>
        );
      })}
    </div>,
  ]);

  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>
        The Facts
      </h1>
      {facts}
    </div>
  );
}
