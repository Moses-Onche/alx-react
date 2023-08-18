import { Seq } from 'immutable';

function printBestStudents (object) {
  const seq = Seq(object);

  const filObject = seq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  function capFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const immutableObj = filObject.toJS();

  Object.keys(immutableObj).map((key) => {
    immutableObj[key].firstName = capFirstLetter(immutableObj[key].firstName);
    immutableObj[key].lastName = capFirstLetter(immutableObj[key].lastName);
    return immutableObj[key];
  });

  console.log(immutableObj);
}

export default printBestStudents;
