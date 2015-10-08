// Opens and closes navigation bar

function showMenu(id){
        document.getElementById(id).style.visibility = 'visible';
};

function hideMenu(id){
        document.getElementById(id).style.visibility = 'hidden';
};

// Array of teaching ideas for generator and selector
var myIdeas = [
	{name:"Organizers", image:"img/xideas/organizers.jpg", grade:[3, 5, 8], theory:"Theory:" + "<br>" + "Approximately 65% of all students are visual learners. As a result, it's important to create a visual framework for students to ground new abstract concepts."},
	{name:"Choral", image:"img/xideas/choral.jpg", grade:[1, 9, 9], theory:"Theory:" + "<br>" + "Coming Soon."},
	{name:"Highlighters", image:"img/xideas/highlighters.jpg", grade:[2, 2, 3], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Popsicle Sticks", image:"img/xideas/popsiclesticks.jpg", grade:[8, 8, 8], theory:"Theory:" + "<br>" + "Coming Soon."},
	{name:"Socratic Seminar", image:"img/xideas/socraticseminar.jpg", grade:[7, 6, 6], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Exam Format", image:"img/xideas/examformat.jpg", grade:[8, 7, 8], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"3-2-1", image:"img/xideas/3-2-1.jpg", grade:[9, 2, 1], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Objective Tracking", image:"img/xideas/objectivetracking.jpg", grade:[9, 5, 1], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Body Language", image:"img/xideas/bodylanguage.jpg", grade:[8, 7, 7], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Attention Getter", image:"img/xideas/attentiongetter.jpg", grade:[8, 7, 7], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Expectations", image:"img/xideas/expectations.jpg", grade:[5, 5, 1], theory:"Theory:" + "<br>" + "Coming Soon."},
	{name:"Consequences", image:"img/xideas/consequences.jpg", grade:[5, 4, 4], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Step by Step", image:"img/xideas/stepbystep.jpg", grade:[5, 5, 7], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Behavior Tracking", image:"img/xideas/behaviortracking.jpg", grade:[8, 8, 7], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Objective", image:"img/xideas/objective.jpg", grade:[8, 7, 7], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"SMART Goal", image:"img/xideas/smartgoal.jpg", grade:[8, 7, 7], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Word Wall", image:"img/xideas/wordwall.jpg", grade:[3, 9, 8], theory:"Theory:" + "<br>" + "Coming Soon."},
	{name:"College Corner", image:"img/xideas/collegecorner.jpg", grade:[10, 10, 8], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Parking Lot", image:"img/xideas/parkinglot.jpg", grade:[5, 7, 4], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Timeline", image:"img/xideas/timeline.jpg", grade:[8, 7, 7], theory:"Theory:" + "<br>" + "Coming Soon."},
  {name:"Class Pet", image:"img/xideas/classpet.jpg", grade:[9, 9, 3], theory:"Theory:" + "<br>" + "Coming Soon."}
];

// Generates random teaching idea image and grading request
function ideaGenerator() {

	function mean(arr) {
				var sum = 0;
				for (var i = 0; i < arr.length; i++) {
						sum += arr[i];
				}
		return Math.floor(sum / arr.length);
	};

	var randomNum = Math.floor((Math.random()*20));

	var image = document.getElementById("logo");

		if (image.src.match("logo")) {
		    image.src = myIdeas[randomNum]["image"];
		} else {
		  	image.src = "img/nstt_logo.jpg";
				var score = prompt('How helpful was this tip on a scale from 1 to 10?');
				myIdeas[randomNum]["grade"].push('score');
		}

  document.getElementById("gradespace").style.visibility = 'hidden';

};

// Navigation bar linking to teaching idea image, average grade, and information
function ideaSelector(ideaNum) {

  function mean(arr) {
				var sum = 0;
				for (var i = 0; i < arr.length; i++) {
						sum += arr[i];
				}
		return Math.floor(sum / arr.length);
	};

	var image = document.getElementById("logo");

	if (image.src.match("logo") != myIdeas[ideaNum]["image"]) {
		image.src = myIdeas[ideaNum]["image"];
    document.getElementById("gradespace").style.visibility = 'visible';

    if (((mean(myIdeas[ideaNum]["grade"]))) >= 8) {
	    document.getElementById("gradespace").innerHTML = ('Average Visitor Grade:' + '<img src=img/nstt_grading_Aactive.png height=30px>' + '<br>' + myIdeas[ideaNum]["theory"]);
    } else if (((mean(myIdeas[ideaNum]["grade"]))) >= 6 && (mean(myIdeas[ideaNum]["grade"])) < 8) {
      document.getElementById("gradespace").innerHTML = ('Average Visitor Grade:' + '<img src=img/nstt_grading_Bactive.png height=30px>' + '<br>' + myIdeas[ideaNum]["theory"]);
    } else if (((mean(myIdeas[ideaNum]["grade"]))) >= 4 && (mean(myIdeas[ideaNum]["grade"])) < 6) {
      document.getElementById("gradespace").innerHTML = ('Average Visitor Grade:' + '<img src=img/nstt_grading_Cactive.png height=30px>' + '<br>' + myIdeas[ideaNum]["theory"]);
    } else if (((mean(myIdeas[ideaNum]["grade"]))) >= 2 && (mean(myIdeas[ideaNum]["grade"])) < 4) {
      document.getElementById("gradespace").innerHTML = ('Average Visitor Grade:' + '<img src=img/nstt_grading_Dactive.png height=30px>' + '<br>' + myIdeas[ideaNum]["theory"]);
    } else if (((mean(myIdeas[ideaNum]["grade"]))) >= 0 && (mean(myIdeas[ideaNum]["grade"])) < 2) {
      document.getElementById("gradespace").innerHTML = ('Average Visitor Grade:' + '<img src=img/nstt_grading_Factive.png height=30px>' + '<br>' + myIdeas[ideaNum]["theory"]);
    }

  }

};
