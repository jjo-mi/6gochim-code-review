// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// function getScore(a, b, c) {
//   alert((a + b + c) / 3);
// }

const scores = prompt("세 과목의 점수를 입력해보세용").split(" ");
// scores =  ['val1', 'val2', 'val3'];
let sum = 0;
scores.forEach((score) => {
  sum += Number(score);
});

const average = sum / scores.length;

alert(average);
