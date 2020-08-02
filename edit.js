window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
     navbar.style.backgroundColor="#dbdbdb"
    navbar.classList.add("sticky")
   
  } else {
    navbar.style.backgroundColor="transparent";
    navbar.classList.remove("sticky");
    
  }
}
function rotateImage() {
  var img = document.getElementById('myLogo');
  img.style.transform = 'rotate(180deg)';
}

// Firebase configs
var firebaseConfig = {
  apiKey: "AIzaSyCXhPEF8OTZCiU-I5g_C63xo8tAooWnYJ0",
  authDomain: "website-resume-c8412.firebaseapp.com",
  databaseURL: "https://website-resume-c8412.firebaseio.com",
  projectId: "website-resume-c8412",
  storageBucket: "website-resume-c8412.appspot.com",
  messagingSenderId: "1095565816028",
  appId: "1:1095565816028:web:8d18df43d6adc8aa7a8419",
  measurementId: "G-700F8FETDB"
};

  firebase.initializeApp(firebaseConfig);
//firebase.analytics();
// Initialize Firebase
  //var defaultProject = firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  db.collection("educations").get().then(function(snapshot){
    snapshot.forEach(function(doc){
      readEducation(doc);
        })
});
 
    function readEducation(doc){

      let parent = document.getElementById("schoolsContainer");
      let data = doc.data();
      
      let school = document.createElement("div");
      school.classList.add("school")
      
      let img1 = document.createElement("img");
      let div2 = document.createElement("div");
      div2.setAttribute("class", "schoolInfo");
      let span1 = document.createElement("span");
      span1.setAttribute("id", "schoolName");
      let span2 = document.createElement("span");
      span2.setAttribute("id", "course");
      let span3 = document.createElement("span");
      span3.setAttribute("id", "schoolYear");
      let p1 = document.createElement("p");
      p1.setAttribute("id", "awards");
      p1.classList.add("awards")
      let del = document.createElement("button")
      del.classList.add("ui")
      del.classList.add("inverted")
      del.classList.add("red")
      del.classList.add("button")
      del.setAttribute("id", "delButton");
      del.innerHTML = "delete";
      del.setAttribute("onClick", "deleteSchool('" + doc.id + "')");

      if(data.imgFile == null)
      {
        img1.setAttribute("src", "img/school.png");
      }
      else{
        img1.setAttribute("src", "img/" + data.imgFile);
      }
      
      span1.innerHTML = data.school
      span2.innerHTML = data.degree
      span3.innerHTML = data.startYear + "-" + data.endYear
      p1.innerHTML = data.award

      console.log(span1)
      console.log(span2)
      console.log(span3)
      console.log(p1)
      
      console.log("image src: " + img1.src);
      school.appendChild(img1)
      console.log("img1")
     
      console.log("div2")
      div2.appendChild(span1)
     
      div2.appendChild(span2)
      div2.appendChild(span3)
      div2.appendChild(p1)
      console.log("p1")
      school.appendChild(div2)
      school.appendChild(del)
      console.log(div2)
      parent.appendChild(school)
      
    }
  
    db.collection("organizations").get().then(function(snapshot){
      snapshot.forEach(function(doc){
        readOrganization(doc);
          })
  });
   
      function readOrganization(doc){
  
        let parent = document.getElementById("orgContainer");
        let data = doc.data();
  
        let org = document.createElement("div");
        org.classList.add("org")
        
        let img1 = document.createElement("img");
        let div2 = document.createElement("div");
        div2.setAttribute("class", "orgInfo");
        let span1 = document.createElement("span");
        span1.setAttribute("id", "orgName");
        let span2 = document.createElement("span");
        span2.setAttribute("id", "position");
        let span3 = document.createElement("span");
        span3.setAttribute("id", "schoolYear");
        let p1 = document.createElement("p");
        p1.setAttribute("id", "description");
        let del = document.createElement("button")
        del.classList.add("ui")
        del.classList.add("inverted")
        del.classList.add("red")
        del.classList.add("button")
        del.setAttribute("id", "delButton");
        del.innerHTML = "delete";
        del.classList.add("delOrg")
        del.setAttribute("onClick", "deleteOrg('" + doc.id + "')");
       
        if(data.imgFile == null)
      {
        img1.setAttribute("src", "img/org.png");
      }
      else{
        img1.setAttribute("src", "img/" + data.imgFile);
      }
        
        span1.innerHTML = data.name
        span2.innerHTML = data.position
        span3.innerHTML = data.year_start + "-" + data.year_end
        p1.innerHTML = data.description
  
        console.log(span1)
        console.log(span2)
        console.log(span3)
        console.log(p1)
        
        console.log("image src: " + img1.src);
        org.appendChild(img1)
        console.log("img1")
       
        console.log("div2")
        div2.appendChild(span1)
       
        div2.appendChild(span2)
        div2.appendChild(span3)
        div2.appendChild(p1)
        console.log("p1")
        org.appendChild(div2)
        org.appendChild(del)
        console.log(div2)
        parent.appendChild(org)
        
      }
    
      db.collection("others").get().then(function(snapshot){
        snapshot.forEach(function(doc){
         readAboutMe(doc);
            })
    });
     
        function readAboutMe(doc){
    
          let parent = document.getElementById("intro");
          let data = doc.data();
    
          let aboutMe= document.createElement("div");
          aboutMe.classList.add("section")
          aboutMe.classList.add("container")
          aboutMe.setAttribute("id", "aboutMe");
          
          let h3 = document.createElement("h3");
          h3.classList.add("text-center")

          let intro = document.createElement("div")
          intro.setAttribute("id","introHeading");
          
    
          let p = document.createElement("p");
          p.setAttribute("id","aboutMeContent");
          p.classList.add("text")
          let edit0 = document.createElement("button")
          edit0.classList.add("ui")
          edit0.classList.add("inverted")
          edit0.classList.add("brown")
          edit0.classList.add("button")
          edit0.setAttribute("id", "editSoc");
          edit0.innerHTML = "Edit";
          edit0.setAttribute("onClick", "openForm('Intro')");
          
        
          let img = document.createElement("img");
         

          let socMeds = document.createElement("div")
          socMeds.classList.add("socMeds");
          let div1 = document.createElement("div")
          div1.classList.add("socmedGroup")
          let div2 = document.createElement("div")
          div2.classList.add("socmedGroup")
          let div3 = document.createElement("div")
          div3.classList.add("socmedGroup")

          let li = document.createElement("a")
          let i1 = document.createElement("i")
          let git = document.createElement("a")
          let i2 = document.createElement("i")
          let fb = document.createElement("a")
          let i3 = document.createElement("i")

          i1.classList.add("linkedin")
          i1.classList.add("icon")
          i1.classList.add("huge")
          
          i2.classList.add("github")
          i2.classList.add("icon")
          i2.classList.add("huge")
                   
          i3.classList.add("facebook")
          i3.classList.add("f")
          i3.classList.add("icon")
          i3.classList.add("huge")

          let edit1 = document.createElement("button")
          edit1.classList.add("ui")
          edit1.classList.add("inverted")
          edit1.classList.add("brown")
          edit1.classList.add("button")
          edit1.setAttribute("id", "editSoc");
          edit1.innerHTML = "Edit";
          edit1.setAttribute("onClick", "openForm('Linkedin')");

          let edit2 = document.createElement("button")
          edit2.classList.add("ui")
          edit2.classList.add("inverted")
          edit2.classList.add("brown")
          edit2.classList.add("button")
          edit2.setAttribute("id", "editSoc");
          edit2.innerHTML = "Edit";
          edit2.setAttribute("onClick", "openForm('Git')");

          let edit3 = document.createElement("button")
          edit3.classList.add("ui")
          edit3.classList.add("inverted")
          edit3.classList.add("brown")
          edit3.classList.add("button")
          edit3.setAttribute("id", "editSoc");
          edit3.innerHTML = "Edit";
          edit3.setAttribute("onClick", "openForm('Fb')");

          h3.innerHTML = data.name
          p.innerHTML = data.aboutMe
          img.setAttribute("src", "img/myPic.png");
          li.setAttribute("href", data.linkedin)
          git.setAttribute("href", data.github)
          fb.setAttribute("href", data.facebook)
         
         
          aboutMe.appendChild(h3)

          intro.appendChild(p)
          intro.appendChild(edit0)

          aboutMe.appendChild(intro)

          li.appendChild(i1)
          div1.appendChild(li)
          div1.appendChild(edit1)

          git.appendChild(i2)
          div2.appendChild(git)
          div2.appendChild(edit2)

          fb.appendChild(i3)
          div3.appendChild(fb)
          div3.appendChild(edit3)
          
          socMeds.appendChild(div1)
          socMeds.appendChild(div2)
          socMeds.appendChild(div3)
          aboutMe.appendChild(socMeds)
          aboutMe.appendChild(img)
     
          console.log(aboutMe)
     
          parent.appendChild(aboutMe)
          // parent.appendChild(socMeds)
          
        }

        db.collection("hobbies").get().then(function(snapshot){
          snapshot.forEach(function(doc){
            readHobbies(doc);
              })
      });
       
          function readHobbies(doc){
      
            let parent = document.getElementById("hobbiesContainer");
            let data = doc.data();
            
            let hobby= document.createElement("div");
            hobby.classList.add("hobby")
            
            let div1 = document.createElement("div");
            div1.classList.add("hobbiesIcons")
            let i1 = document.createElement("i");
            i1.classList.add("icon");
            i1.classList.add("huge");
            let span = document.createElement("span");
            span.classList.add("hobbiesName");
            let del = document.createElement("button")
            del.classList.add("ui")
            del.classList.add("inverted")
            del.classList.add("red")
            del.classList.add("button")
            del.setAttribute("id", "delHobby");
            del.innerHTML = "delete";
            del.setAttribute("onClick", "deleteHobby('" + doc.id + "')");

            if (data.icon == null)
            {
              div1.setAttribute("id", "defaultHobby");
              i1.classList.add("smile");
              i1.classList.add("outline");
            }
            else if(data.icon == "basketball")
            {
              div1.setAttribute("id", data.hobby);
              i1.classList.add(data.icon);
              i1.classList.add("ball");
            }
            else{
              div1.setAttribute("id", data.hobby);
              i1.classList.add(data.icon);
            }
            span.innerHTML = data.hobby
           
            div1.appendChild(i1)
          
            
            hobby.appendChild(div1)
            hobby.appendChild(span)
            hobby.appendChild(del)
            parent.appendChild(hobby)
            console.log(hobby)
          }

        db.collection("works").get().then(function(snapshot){
            snapshot.forEach(function(doc){
              readProjects(doc);
                })
        });
         
            function readProjects(doc){
        
              let parent = document.getElementById("projectsContainer");
              let data = doc.data();
              
              let project= document.createElement("div");
              project.classList.add("project")
              
              let img = document.createElement("img")
              let span = document.createElement("span")
              span.setAttribute("id", "projectName")
              let span1 = document.createElement("span")
              span1.classList.add("description");
              span1.setAttribute("id","projectDescription");
              let del = document.createElement("button")
              del.classList.add("ui")
              del.classList.add("inverted")
              del.classList.add("red")
              del.classList.add("button")
              del.setAttribute("id", "delProject");
              del.innerHTML = "delete";
              del.setAttribute("onClick", "deleteProject('" + doc.id + "')");
              if(data.imgFile == null)
              {
                img.setAttribute("src", "img/project.png")
              }
              else{
                img.setAttribute("src", "img/" + data.imgFile)
              }
              span.innerHTML = data.name
              span1.innerHTML = data.description
              let br = document.createElement("br")

              project.appendChild(img)
              project.appendChild(span)
              project.appendChild(span1)
              project.appendChild(br)
              project.appendChild(del)
              parent.appendChild(project)
              console.log(project)
            }
    /*
    //adding into organizations

    db.collection("organizations").add({
        name: "lamb",
        position: "docupub",
        year_end: 2019,
        year_start: 2018
    })
  
    .then(function(docRef) {
        console.log("Item added with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        
    });
//  firebase.analytics();
    
    */

    // deleting organizations
    function deleteSchool(docId){
      
      console.log("DOCUMENT ID: " + docId)
      db.collection("educations").doc(docId).delete().then(function(){
        console.log("School deleted");
      }).catch(function(err){                     
        console.log("error in deleting item: " + err);
      }); 
      
    };

    function deleteOrg(docId){
      
      
      db.collection("organizations").doc(docId).delete().then(function(){
        console.log("Org deleted");
      }).catch(function(err){                     
        console.log("error in deleting item: " + err);
      }); 
      
    };
   
    function deleteHobby(docId){
      
      
      db.collection("hobbies").doc(docId).delete().then(function(){
        console.log("Hobby deleted");
      }).catch(function(err){                     
        console.log("error in deleting item: " + err);
      }); 
      
    };

    function deleteProject(docId){
      
      
      db.collection("works").doc(docId).delete().then(function(){
        console.log("Project deleted");
      }).catch(function(err){                     
        console.log("error in deleting item: " + err);
      }); 
      
    };
    
    
     
   
    // var email = 'courtney.ngo@dlsu.edu.ph';
    // var password = 'abcd1234'; 
    // firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
    //     console.log("user signed in");
        
    //     var user = firebase.auth().currentUser;
    //     if(user != null){
    //         console.log(user.email)
            
    //     }
    // }).catch(function(err){
    //     if(err.code == "auth/wrong-password"){
    //         alert("wrong password")
    //     }
    //         else{
    //             alert(err.message);
    //         }
    // });


    function openForm(formName) {
      
      // document.getElementById("body").classList.add("blur");
      // document.getElementById("addProject").classList.add("unblur");
      
      document.getElementById("addForm").style.display="block";
      document.getElementById("add" + formName).style.display = "block";
    }

    function closeForm(formName){
      console.log(formName)
      
      document.getElementById("addForm").style.display="none";
      document.getElementById("add" + formName).style.display = "none";
      document.getElementById("body").classList.add("unblur");
    }
    
    function submitEducation() {
      document.getElementById("addEducation").style.display = "none";
      document.getElementById("addForm").style.display="none";
      console.log("closing educaiton form..")
      var name = document.getElementById("schoolName2").value;
      var degree = document.getElementById("degree2").value;
      var yearStart = document.getElementById("yearStart2").value;
      var endYearvar = document.getElementById("yearEnd2").value;
      var award2 = document.getElementById("award2").value;
      db.collection("educations").add({
        school: name,
        degree: degree,
        startYear: yearStart,
        endYear: endYearvar,
        award: award2
        })
  
    .then(function(docRef) {
        console.log("School added with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        
    });
    };
    
    
    function submitProject() {
      document.getElementById("addProject").style.display = "none";
      document.getElementById("addForm").style.display="none";
      var title = document.getElementById("projTitle").value;
      var desc = document.getElementById("projDesc").value;

      // console.log(title + desc)
      db.collection("works").add({

        name: title,
        description: desc
      })
  
    .then(function(docRef) {
        console.log("Project added with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        
    });
    };

    function submitOrg() {
      document.getElementById("addOrganization").style.display = "none";
      document.getElementById("addForm").style.display="none";

      var name = document.getElementById("orgName2").value;
      var position = document.getElementById("position2").value;
      var yearStart = document.getElementById("yearStart").value;
      var endYearvar = document.getElementById("yearEnd").value;
      var description  = document.getElementById("description2").value;

      db.collection("organizations").add({
        name: name,
        position: position,
        year_start: yearStart,
        year_end: endYearvar,
        description: description
        })
      .then(function(docRef) {
        console.log("Project added with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        
    });
    };

    
    

    
    function submitHobby() {
      document.getElementById("addHobby").style.display = "none";
      document.getElementById("addForm").style.display="none";
      var hobby = document.getElementById("hobbyName").value;
            // console.log(title + desc)
      db.collection("hobbies").add({
         hobby: hobby
      })
  
    .then(function(docRef) {
        console.log("Hobby added with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
        
    });
    };

    function editIntro() {
      document.getElementById("addIntro").style.display = "none";
      document.getElementById("addForm").style.display="none";
      var intro1 = document.getElementById("aboutIntro").value;
            // console.log(title + desc)
      db.collection("others").doc('intro').update({
        aboutMe: intro1
      })
  
    .then(function(docRef) {
        console.log("About me updated with ID: ");
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
        
    });
    };

    function editLinkedin() {
      document.getElementById("addLinkedin").style.display = "none";
      document.getElementById("addForm").style.display="none";
      var linkedin1 = document.getElementById("linkedin").value;
            // console.log(title + desc)
      db.collection("others").doc('intro').update({
        linkedin: linkedin1
      })
  
    .then(function(docRef) {
        console.log("Linkedinupdated");
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
        
    });
    };

    function editGit() {
      document.getElementById("addGit").style.display = "none";
      document.getElementById("addForm").style.display="none";
      var git = document.getElementById("github").value;
            // console.log(title + desc)
      db.collection("others").doc('intro').update({
        github: git
      })
  
    .then(function(docRef) {
        console.log("Github nupdated");
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
        
    });
    };

    function editFacebook() {
      document.getElementById("addFb").style.display = "none";
      document.getElementById("addForm").style.display="none";
      var fb = document.getElementById("facebook").value;
            // console.log(title + desc)
      db.collection("others").doc('intro').update({
        facebook: fb
      })
  
    .then(function(docRef) {
        console.log("Facebook nupdated");
    })
    .catch(function(error) {
        console.error("Error updating document: ", error);
        
    });
    };
