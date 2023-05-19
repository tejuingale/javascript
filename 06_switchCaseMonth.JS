function monthOfYear(monthNum) {
  switch (monthNum) {
    case 1:
      console.log(` Janewary as month number : ${monthNum}`);
      break;
    case 2:
      console.log(` February as month number : ${monthNum}`);
      break;
    case 3:
      console.log(` March as month number : ${monthNum}`);
      break;
    case 4:
      console.log(` April as month number : ${monthNum}`);
      break;
    case 5:
      console.log(` May as month number : ${monthNum}`);
    case 6:
      console.log(` June as month number : ${monthNum}`);
      break;
    case 7:
      console.log(` July as month number : ${monthNum}`);
      break;
    case 8:
      console.log(` August as month number : ${monthNum}`);
      break;
    case 9:
      console.log(` September as month number : ${monthNum}`);
      break;
    case 10:
      console.log(` Octomber as month number : ${monthNum}`);
      break;
    case 11:
      console.log(` November as month number : ${monthNum}`);
      break;
    case 12:
      console.log(` December as month number : ${monthNum}`);
      break;
    default:
        console.log(`Invalid Input : ${monthNum}`);
      break;
  }
}
monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);
monthOfYear(null);
monthOfYear(undefined);
monthOfYear(NaN);
//monthOfYear(15);
//monthOfYear(200);

