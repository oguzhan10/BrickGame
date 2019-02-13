export function detectCollision(ball, gameObject) {
  const bottomOfBall = ball.position.y + ball.size;
  const topOfTheBall = ball.position.y;

  const topOfGameObject = gameObject.position.y;
  const leftSideOfGameObject = gameObject.position.x;
  const rightSideOfGameObject = gameObject.position.x + gameObject.width;
  const bottomOfTheObject = gameObject.position.y + gameObject.height;

  if (
    bottomOfBall >= topOfGameObject &&
    topOfTheBall <= bottomOfTheObject &&
    ball.position.x >= leftSideOfGameObject &&
    ball.position.x + ball.size <= rightSideOfGameObject
  ) {
    return true;
  } else {
    return false;
  }
}
