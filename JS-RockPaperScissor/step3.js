if (hasPlayerWonTheRound(userOption, computerResult)) {
  playerScore++;
  return `Player wins! ${userOption} beats ${computerResult}`;
} else if (computerResult === userOption) {
  return `It's a tie! Both chose ${userOption}`;
} else {
  computerScore++;
  return `Computer wins! ${computerResult} beats ${userOption}`;
}
