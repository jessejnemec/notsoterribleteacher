// Opens and closes navigation bar

function showMenu(id){
        document.getElementById(id).style.visibility = 'visible';
};

function hideMenu(id){
        document.getElementById(id).style.visibility = 'hidden';
};

// Array of teaching ideas for generator, selector, and search
var myIdeas = [
	{
    name:"Organizers",
    image:"img/xideas/organizers.jpg",
    grade:[3, 5, 8],
    theory:"Theory:" + "<br>" + "Approximately 65% of all students are visual learners. As a result, it's important to create a visual framework for students to ground new abstract concepts.",
    tags:["ESL", "LITERACY", "EXECUTION", "VISUAL", "ENGAGEMENT"]
  },
	{
    name:"Choral",
    image:"img/xideas/choral.jpg",
    grade:[1, 9, 9],
    theory:"Theory:" + "<br>" + "Verablization increases internalization and thus a choral response works exceptionally well at creating synonmous connections between vocabulary terms and operations.",
    tags:["CFU", "LITERACY", "ENGAGEMENT"]
  },
	{
    name:"Highlighters",
    image:"img/xideas/highlighters.jpg",
    grade:[2, 2, 3],
    theory:"Theory:" + "<br>" + "Learning how to take detailed and organized notes is an essential skill in life. Highlighter practice gives students a visual and kinesthetic action for drawing connections between content.",
    tags:["DIFFERENTIATION", "VISUAL", "KINESTHETIC"]
  },
  {
    name:"Popsicle Sticks",
    image:"img/xideas/popsiclesticks.jpg",
    grade:[8, 8, 8],
    theory:"Theory:" + "<br>" + "Random checks for understanding with popsicle sticks keeps the entire class on-task in anticipation for a question and in turn improves focus and learning.",
    tags:["CFU", "CHECK FOR UNDERSTANDING", "ENGAGEMENT"]
  },
	{
    name:"Socratic Seminar",
    image:"img/xideas/socraticseminar.jpg",
    grade:[7, 6, 6],
    theory:"Theory:" + "<br>" + "Conversation between peers increases class accountability and provides a healthy outlet for disagreements. Use higher-order questions to keep the dialogue moving.",
    tags:["RIGOR", "BLOOMS", "COMMUNICATION", "DEBATE"]
  },
  {
    name:"Exam Format",
    image:"img/xideas/examformat.jpg",
    grade:[8, 7, 8],
    theory:"Theory:" + "<br>" + "A 2014 Childline National Exam Survey revealed that over 96% of students surveyed experience intense anxiety over testing. Reduce student stress with simplified formatting.",
    tags:["EXECUTION", "ORGANIZATION", "ESL", "ASSESSMENT"]
  },
  {
    name:"3-2-1",
    image:"img/xideas/3-2-1.jpg",
    grade:[9, 2, 1],
    theory:"Theory:" + "<br>" + "Increase student buy-in with a 3-2-1 assessment that allows students to explain their own understanding with a few basic parameters.",
    tags:["ASSESSMENT", "CFU", "CHOICE", "DIFFERENTIATION"]
  },
  {
    name:"Objective Tracking",
    image:"img/xideas/objectivetracking.jpg",
    grade:[9, 5, 1],
    theory:"Theory:" + "<br>" + "Visually tracking averages and precise objective data allows teachers and students to more clearly chart a path towards success and mastery.",
    tags:["DATA", "RIGOR", "DIFFERENTIATION"]
  },
  {
    name:"Body Language",
    image:"img/xideas/bodylanguage.jpg",
    grade:[8, 7, 7],
    theory:"Theory:" + "<br>" + "In any social interaction your body language has a major effect on how people perceive you. As the teacher, you need to project a firm and loving persona with positive BTW from day one.",
    tags:["LEADERSHIP", "DISCIPLINE"]
  },
  {
    name:"Attention Getter",
    image:"img/xideas/attentiongetter.jpg",
    grade:[8, 7, 7],
    theory:"Theory:" + "<br>" + "Before speaking, always get 100% silence from students. What you say as the teacher has value - show that value by never teaching over students activity.",
    tags:["ENGAGEMENT", "DISCIPLINE"]
  },
  {
    name:"Expectations",
    image:"img/xideas/expectations.jpg",
    grade:[5, 5, 1],
    theory:"Theory:" + "<br>" + "Expectations are like the consitution of the United States in that they set ideals and boundaries for behavior. Without clear reference points, students will create their own version of what is right and wrong in the classroom.",
    tags:["LEADERSHIP", "DISCIPLINE"]
  },
	{
    name:"Consequences",
    image:"img/xideas/consequences.jpg",
    grade:[5, 4, 4],
    theory:"Theory:" + "<br>" + "Consequences are the steps taken when students don't meet an expectation. Assignment of consequences should always occur privately to avoid further argument.",
    tags:["LEADERSHIP", "DISCIPLINE"]
  },
  {
    name:"Step by Step",
    image:"img/xideas/stepbystep.jpg",
    grade:[5, 5, 7],
    theory:"Theory:" + "<br>" + "Smooth execution is dependent on clear direction. Whenever designing a new routine, always break it down to the most fundamental steps and number those steps on a slide or poster.",
    tags:["ORGANIZATION", "DISCIPLINE"]
  },
  {
    name:"Behavior Tracking",
    image:"img/xideas/behaviortracking.jpg",
    grade:[8, 8, 7],
    theory:"Theory:" + "<br>" + "A physical paper trail creates more authenticity for students and increases the likelihood of behavioral changes.",
    tags:["DATA", "DISCIPLINE"]
  },
  {
    name:"Objective",
    image:"img/xideas/objective.jpg",
    grade:[8, 7, 7],
    theory:"Theory:" + "<br>" + "Similar to a short-term goal, the objective sets the tone for the lesson in student-friendly language. Consider adding the days activity to the tail end of the objective to create a kinesthetic tie for students.",
    tags:["DATA", "RIGOR", "BLOOMS"]
  },
  {
    name:"SMART Goal",
    image:"img/xideas/smartgoal.jpg",
    grade:[8, 7, 7],
    theory:"Theory:" + "<br>" + "Throughout their research on goal-setting and achievement, social scientist's Locke and Latham found significant progress only occurs with clarity. As a result, they developed the SMART goal framework.",
    tags:["DATA", "RIGOR", "ENGAGEMENT"]
  },
  {
    name:"Word Wall",
    image:"img/xideas/wordwall.jpg",
    grade:[3, 9, 8],
    theory:"Theory:" + "<br>" + "Words walls have been found to increase high-frequency word recognition by solidfying definitions throughout the school year. Word walls are an easy supplement for a station activity.",
    tags:["ESL", "LITERACY", "VISUAL", "STATIONS"]
  },
	{
    name:"College Corner",
    image:"img/xideas/collegecorner.jpg",
    grade:[10, 10, 8],
    theory:"Theory:" + "<br>" + "By 2018 its estimated that over 80% of jobs in the U.S. will require some form of post-secondary education. Whether you highlight apprenticeships, technical schools, or universities, students need to be informed.",
    tags:["ENGAGEMENT", "INVESTMENT", "JOY"]
  },
  {
    name:"Parking Lot",
    image:"img/xideas/parkinglot.jpg",
    grade:[5, 7, 4],
    theory:"Theory:" + "<br>" + "Coming Soon.",
    tags:["CFU", "DATA", "DIFFERENTIATION"]
  },
  {
    name:"Timeline",
    image:"img/xideas/timeline.jpg",
    grade:[8, 7, 7],
    theory:"Theory:" + "<br>" + "Coming Soon.",
    tags:["ENGAGEMENT", "VISUAL", "ORGANIZATION"]
  },
  {
    name:"Class Pet",
    image:"img/xideas/classpet.jpg",
    grade:[9, 9, 3],
    theory:"Theory:" + "<br>" + "Coming Soon.",
    tags:["ENGAGEMENT", "INVESTMENT", "JOY"]
  }
];

// Generates random teaching idea w/ associated image and grade protocol
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

// Links navigation bar content to teaching idea, average grade, theory, and tags
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
	    document.getElementById("gradespace").innerHTML = ('Average Visitor Grade:' + '<img src=img/nstt_grading_Aactive.png height=30px>' + '<br><br>' + myIdeas[ideaNum]["theory"] + '<br><br>' + 'Tags:' + '<br>' + myIdeas[ideaNum]["tags"].join(", "));
    } else if (((mean(myIdeas[ideaNum]["grade"]))) >= 6 && (mean(myIdeas[ideaNum]["grade"])) < 8) {
      document.getElementById("gradespace").innerHTML = ('Average Visitor Grade:' + '<img src=img/nstt_grading_Bactive.png height=30px>' + '<br><br>' + myIdeas[ideaNum]["theory"] + '<br><br>' + 'Tags:' + '<br>' + myIdeas[ideaNum]["tags"].join(", "));
    } else if (((mean(myIdeas[ideaNum]["grade"]))) >= 4 && (mean(myIdeas[ideaNum]["grade"])) < 6) {
      document.getElementById("gradespace").innerHTML = ('Average Visitor Grade:' + '<img src=img/nstt_grading_Cactive.png height=30px>' + '<br><br>' + myIdeas[ideaNum]["theory"] + '<br><br>' + 'Tags:' + '<br>' + myIdeas[ideaNum]["tags"].join(", "));
    } else if (((mean(myIdeas[ideaNum]["grade"]))) >= 2 && (mean(myIdeas[ideaNum]["grade"])) < 4) {
      document.getElementById("gradespace").innerHTML = ('Average Visitor Grade:' + '<img src=img/nstt_grading_Dactive.png height=30px>' + '<br><br>' + myIdeas[ideaNum]["theory"] + '<br><br>' + 'Tags:' + '<br>' + myIdeas[ideaNum]["tags"].join(", "));
    } else if (((mean(myIdeas[ideaNum]["grade"]))) >= 0 && (mean(myIdeas[ideaNum]["grade"])) < 2) {
      document.getElementById("gradespace").innerHTML = ('Average Visitor Grade:' + '<img src=img/nstt_grading_Factive.png height=30px>' + '<br><br>' + myIdeas[ideaNum]["theory"] + '<br><br>' + 'Tags:' + '<br>' + myIdeas[ideaNum]["tags"].join(", "));
    }

  }

};

// Searches tags within each idea and returns list of relevant ideas
function findIdeasWithTag () {
  var ideasWithTag = [];
  var tag = prompt("Enter a keyword below (data, CFU, rigor, etc.) and you'll get a list of relevant teaching ideas!").toUpperCase();

  myIdeas.forEach(function(idea) {
    if (idea.tags.indexOf(tag) > -1) {
      ideasWithTag.push(idea.name);
    }
  });

  if (ideasWithTag.length === 0) {
    alert("Sorry. No matches were found. Please try again.");
  } else {
    alert("Try " + ideasWithTag.join(", ") + ".");
  }

};

// Google API School Mapping
function schoolFinder() {

  document.getElementById('logo').style.visibility = 'hidden';

  var mapOptions = {
    center: new google.maps.LatLng(37.7831,-122.4039),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  new google.maps.Map(document.getElementById('map'), mapOptions)

};
