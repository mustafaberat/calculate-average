import Head from "next/head";
import MyHeader from "../components/myheader";
import MyBox from "../components/mybox";

export default function Home() {
  function calculateNotes(e) {
    // Line1 taking informations
    var midterm1note = parseFloat(document.getElementById("midterm1note").value);
    var midterm1percentage = parseFloat(document.getElementById("midterm1percentage").value);
    var midterm2note = parseFloat(document.getElementById("midterm2note").value);
    var midterm2percentage = parseFloat(document.getElementById("midterm2percentage").value);
    var midterm3note = parseFloat(document.getElementById("midterm3note").value);
    var midterm3percentage = parseFloat(document.getElementById("midterm3percentage").value);
    var midterm4note = parseFloat(document.getElementById("midterm4note").value);
    var midterm4percentage = parseFloat(document.getElementById("midterm4percentage").value);
    var midterm5note = parseFloat(document.getElementById("midterm5note").value);
    var midterm5percentage = parseFloat(document.getElementById("midterm5percentage").value);
    var midterm6note = parseFloat(document.getElementById("midterm6note").value);
    var midterm6percentage = parseFloat(document.getElementById("midterm6percentage").value);
    var midterm7note = parseFloat(document.getElementById("midterm7note").value);
    var midterm7percentage = parseFloat(document.getElementById("midterm7percentage").value);
    var midterm8note = parseFloat(document.getElementById("midterm8note").value);
    var midterm8percentage = parseFloat(document.getElementById("midterm8percentage").value);
    var midterm9note = parseFloat(document.getElementById("midterm9note").value);
    var midterm9percentage = parseFloat(document.getElementById("midterm9percentage").value);
    var midterm10note = parseFloat(document.getElementById("midterm10note").value);
    var midterm10percentage = parseFloat(document.getElementById("midterm10percentage").value);
    var midterm11note = parseFloat(document.getElementById("midterm11note").value);
    var midterm11percentage = parseFloat(document.getElementById("midterm11percentage").value);
    var midterm12note = parseFloat(document.getElementById("midterm12note").value);
    var midterm12percentage = parseFloat(document.getElementById("midterm12percentage").value);


    // Checkhing total percentage
    let totalPercentage = 0;
    isNaN(midterm1percentage) ||midterm1percentage < 0 ? null : (totalPercentage += midterm1percentage);
    isNaN(midterm2percentage) ||midterm2percentage < 0 ? null : (totalPercentage += midterm2percentage);
    isNaN(midterm3percentage) ||midterm3percentage < 0 ? null : (totalPercentage += midterm3percentage);
    isNaN(midterm4percentage) ||midterm4percentage < 0 ? null : (totalPercentage += midterm4percentage);
    isNaN(midterm5percentage) ||midterm5percentage < 0 ? null : (totalPercentage += midterm5percentage);
    isNaN(midterm6percentage) ||midterm6percentage < 0 ? null : (totalPercentage += midterm6percentage);
    isNaN(midterm7percentage) ||midterm7percentage < 0 ? null : (totalPercentage += midterm7percentage);
    isNaN(midterm8percentage) ||midterm8percentage < 0 ? null : (totalPercentage += midterm8percentage);
    isNaN(midterm9percentage) ||midterm9percentage < 0 ? null : (totalPercentage += midterm9percentage);
    isNaN(midterm10percentage) ||midterm10percentage < 0 ? null : (totalPercentage += midterm10percentage);
    isNaN(midterm11percentage) ||midterm11percentage < 0 ? null : (totalPercentage += midterm11percentage);
    isNaN(midterm12percentage) ||midterm12percentage < 0 ? null : (totalPercentage += midterm12percentage);


    if (totalPercentage != 100) {
      document.getElementById('alertId').classList.remove('hide')
    } else {
      // Checking the all student gradas to between 0 and 100
      let trueStudentGrade = 0;
      midterm1note > 100 || midterm1note < 0 ? null : (trueStudentGrade += 1);
      midterm2note > 100 || midterm2note < 0 ? null : (trueStudentGrade += 1);
      midterm3note > 100 || midterm3note < 0 ? null : (trueStudentGrade += 1);
      midterm4note > 100 || midterm4note < 0 ? null : (trueStudentGrade += 1);
      midterm5note > 100 || midterm5note < 0 ? null : (trueStudentGrade += 1);
      midterm6note > 100 || midterm6note < 0 ? null : (trueStudentGrade += 1);
      midterm7note > 100 || midterm7note < 0 ? null : (trueStudentGrade += 1);
      midterm8note > 100 || midterm8note < 0 ? null : (trueStudentGrade += 1);
      midterm9note > 100 || midterm9note < 0 ? null : (trueStudentGrade += 1);
      midterm10note > 100 || midterm10note < 0 ? null : (trueStudentGrade += 1);
      midterm11note > 100 || midterm11note < 0 ? null : (trueStudentGrade += 1);
      midterm12note > 100 || midterm12note < 0 ? null : (trueStudentGrade += 1);

      // Check with border
      midterm1note > 100 ||midterm1note < 0? (document.getElementById("midterm1note").style ="border: 2px solid red"): (document.getElementById("midterm1note").style ="border: 2px solid white");
      midterm2note > 100 ||midterm2note < 0? (document.getElementById("midterm2note").style ="border: 2px solid red"): (document.getElementById("midterm2note").style ="border: 2px solid white");
      midterm3note > 100 ||midterm3note < 0? (document.getElementById("midterm3note").style ="border: 2px solid red"): (document.getElementById("midterm3note").style ="border: 2px solid white");
      midterm4note > 100 ||midterm4note < 0? (document.getElementById("midterm4note").style ="border: 2px solid red"): (document.getElementById("midterm4note").style ="border: 2px solid white");
      midterm5note > 100 ||midterm5note < 0? (document.getElementById("midterm5note").style ="border: 2px solid red"): (document.getElementById("midterm5note").style ="border: 2px solid white");
      midterm6note > 100 ||midterm6note < 0? (document.getElementById("midterm6note").style ="border: 2px solid red"): (document.getElementById("midterm6note").style ="border: 2px solid white");
      midterm7note > 100 ||midterm7note < 0? (document.getElementById("midterm7note").style ="border: 2px solid red"): (document.getElementById("midterm7note").style ="border: 2px solid white");
      midterm8note > 100 ||midterm8note < 0? (document.getElementById("midterm8note").style ="border: 2px solid red"): (document.getElementById("midterm8note").style ="border: 2px solid white");
      midterm9note > 100 ||midterm9note < 0? (document.getElementById("midterm9note").style ="border: 2px solid red"): (document.getElementById("midterm9note").style ="border: 2px solid white");
      midterm10note > 100 ||midterm10note < 0? (document.getElementById("midterm10note").style ="border: 2px solid red"): (document.getElementById("midterm10note").style ="border: 2px solid white");
      midterm11note > 100 ||midterm11note < 0? (document.getElementById("midterm11note").style ="border: 2px solid red"): (document.getElementById("midterm11note").style ="border: 2px solid white");
      midterm12note > 100 ||midterm12note < 0? (document.getElementById("midterm12note").style ="border: 2px solid red"): (document.getElementById("midterm12note").style ="border: 2px solid white");

      if (trueStudentGrade == 12) {
        // Calculate the student average
        let studentAverage = 0;
        isNaN(midterm1note ) || isNaN(midterm1percentage )? null: (studentAverage += (midterm1note  * midterm1percentage) / 100);
        isNaN(midterm2note ) || isNaN(midterm2percentage )? null: (studentAverage += (midterm2note  * midterm2percentage) / 100);
        isNaN(midterm3note ) || isNaN(midterm3percentage )? null: (studentAverage += (midterm3note  * midterm3percentage) / 100);
        isNaN(midterm4note ) || isNaN(midterm4percentage )? null: (studentAverage += (midterm4note  * midterm4percentage) / 100);
        isNaN(midterm5note ) || isNaN(midterm5percentage )? null: (studentAverage += (midterm5note  * midterm5percentage) / 100);
        isNaN(midterm6note ) || isNaN(midterm6percentage )? null: (studentAverage += (midterm6note  * midterm6percentage) / 100);
        isNaN(midterm7note ) || isNaN(midterm7percentage )? null: (studentAverage += (midterm7note  * midterm7percentage) / 100);
        isNaN(midterm8note ) || isNaN(midterm8percentage )? null: (studentAverage += (midterm8note  * midterm8percentage) / 100);
        isNaN(midterm9note ) || isNaN(midterm9percentage )? null: (studentAverage += (midterm9note  * midterm9percentage) / 100);
        isNaN(midterm10note) || isNaN(midterm10percentage)? null: (studentAverage += (midterm10note * midterm10percentage) / 100);
        isNaN(midterm11note) || isNaN(midterm11percentage)? null: (studentAverage += (midterm11note * midterm11percentage) / 100);
        isNaN(midterm12note) || isNaN(midterm12percentage)? null: (studentAverage += (midterm12note * midterm12percentage) / 100);
        document.getElementById("youraveragenote").innerHTML = studentAverage.toFixed(2);
        document.getElementById('alertId').classList.add('hide')
      }
    }
  }
  var title = "Calculate Average";
  var alertMsg = "Average must be 100";

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap"
          rel="stylesheet"
        />
        <script text="text/index.js" src="index.js"></script>
        <meta name="description" content={title} />
        <link rel="icon" href="/calculator.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
          crossorigin="anonymous"
        />
      </Head>

      <main className="main">
          <div className="container">
            <MyHeader title={title} />
            <div id = "alertId" className="hide alert alert-primary" role="alert">{alertMsg}</div>
            <div className="row">
              <div className="col"><MyBox title="Exam 1" id="midterm1note" pid="midterm1percentage"/></div>
              <div className="col"><MyBox title="Exam 2" id="midterm2note" pid="midterm2percentage"/></div>
            </div>
            <div className="row">
              <div className="col"><MyBox title="Exam 3" id="midterm3note" pid="midterm3percentage"/></div>
              <div className="col"><MyBox title="Exam 4" id="midterm4note" pid="midterm4percentage"/></div>
            </div>
            <div className="row">
              <div className="col"><MyBox title="Exam 5" id="midterm5note" pid="midterm5percentage"/></div>
              <div className="col"><MyBox title="Exam 6" id="midterm6note" pid="midterm6percentage"/></div>
            </div>
            <div className="row">
              <div className="col"><MyBox title="Exam 7" id="midterm7note" pid="midterm7percentage"/></div>
              <div className="col"><MyBox title="Exam 8" id="midterm8note" pid="midterm8percentage"/></div>
            </div>
            <div className="row">
              <div className="col"><MyBox title="Exam 9" id="midterm9note" pid="midterm9percentage"/></div>
              <div className="col"><MyBox title="Exam 10" id="midterm10note" pid="midterm10percentage"/></div>
            </div>
            <div className="row">
              <div className="col"><MyBox title="Exam 11" id="midterm11note" pid="midterm11percentage"/></div>
              <div className="col"><MyBox title="Exam 12" id="midterm12note" pid="midterm12percentage"/></div>
            </div>
            <div className="col result">
              <div className="col"><h4 id="youraveragenote">0</h4></div>
              <div className="col mt-2"><button type="button" onClick={calculateNotes} className="btn col-12">Calculate</button></div>
            </div>
          </div>
      </main>
    </div>
  );
}
