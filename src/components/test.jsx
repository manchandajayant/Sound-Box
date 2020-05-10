import React, { useState } from "react";

import Player from "../components/Players";

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisabelle", score: 42 },
  ]);

  //const playersCopy3 = [...players];
  //  const playerScores = players.map(player => player.score);
  //  console.log("scores",playerScores)
  // const [numberScore, setnumberScore] = useState(playerScores);

  const playersCopy = [...players];
  const compare_score = playersCopy.sort(compare_numbers);
  function compare_numbers(player_a, player_b) {
    return player_b.score - player_a.score;
  }
  const [sort_by, set_sort_by] = useState("score");
  const playersCopy2 = [...players];
  const compare_name = playersCopy2.sort((a, b) =>
    a.name.localeCompare(b.name, "fr", { ignorePunctuation: true })
  );

  const change_sorting = (event) => {
    set_sort_by(event.target.value);
  };
  const playersSorted = sort_by === "name" ? compare_name : compare_score;

  const incrementScore = (id) => {
    setnumberScore(
      players.map((player) => {
        if (player.id === id) {
          return { ...player, score: player.score + 1 };
        } else {
          return player;
        }
      })
    );
  };

  return (
    <div>
      <p>
        Sort by:{" "}
        <select onChange={change_sorting}>
          <option value="score"> score</option>
          <option value="name"> name</option>
        </select>
      </p>
      {playersSorted.map((player) => {
        return (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        );
      })}
    </div>
  );
}
