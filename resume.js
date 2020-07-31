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

//   db.collection("educations").get().then(function(snapshot){
//     snapshot.forEach(function(doc){
//                      console.log(doc.data());
//                      })
// });

  var database = firebase.firestore();
  var ref = database.ref('others');
  ref.on('value', gotData, errData);

  function gotData(data){
    console.log(data.val());
  }

  function errData(err){
    console.log('ERROR:' + err);
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
    
    
    //deleting organizations
    db.collection("organizations").doc("C0Ht0iDI7ezFQMN6PCzx").delete().then(function(){
        console.log("Item deleted");
    }).catch(function(err){                     
        console.log("error in deleting item: " + err);
    }); */
    
    
     
   
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
    
  