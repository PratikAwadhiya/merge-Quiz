import { Component, OnInit, } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, doc, documentId, Firestore, firestoreInstance$, query, QuerySnapshot, setDoc, updateDoc} from '@angular/fire/firestore';
// import { QuizQuestion } from 'src/app/interface/quiz-question';
import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import { Router } from '@angular/router';



@Component({
  selector: 'app-coverpage',
  templateUrl: './coverpage.component.html',
  styleUrls: ['./coverpage.component.css']
})
export class CoverpageComponent implements OnInit {
  
  imageurl: any;
  path!: any;
  title : string = '';
  date : any;
  af: any;
  coverPicture!: File
  File:any
  url:any
//variable for storing cllction id in sub-collection filed 
 collectionId : any;
  options: any;
  // router: any;
 
  // quizQuestions: QuizQuestion[] = [];
  ngOnInit(): void {
      
  }


  displayImage(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (e: any) => {
      this.imageurl = e.target.result;
    };
  
    reader.readAsDataURL(file);
  }



  // subcollection : any[] = [];
  //Type Declare
  questiondescription : any;
  answer1 : any;
  answer2 : any;
  answer3 : any;
  answer4 : any;
  
 answerDescription: any;
  
  //declare variable for storing an id in firebase
   docId : any;


// Array to hold the questions
questions: any[] = []; 
  // collectionId: any;
// Multiple time add question
  addQuestion() {
    this.questions.push({
      question: '',
      options: ['', '', '', ''],
      answerDescription: '',
      // correctAnswer: 0
    });
    console.log(this.questions)
  }

  onFileSelected(event: any) {
    this.coverPicture = event.target.files[0];

  }

upload($event:any){
    this.path = $event.target.files[0];
  }

uploadImage(){
    console.log(this.path)
    this.Image();
  }

  // uploadImage() {
  //   console.log('Image uploaded!');
  // }

// change the variable name//
  title1: string = '';
  description: string = '';
  date2:any;
  quizid: any
  // questions = [];
  // coverPic: any;
  constructor(private firestore: Firestore, private router:Router){
  }
  onSubmit1() {
    // Handle form submission logic here
    console.log('Title:', this.title);
    console.log('Description:', this.description);
    console.log('date:', this.date);
    // console.log('Cover Pic:', this.coverPic);
    // Add a new document with a generated id.
    
    const docRef:any =  collection(this.firestore, "quiz")
    
    // 'navxj1TwZwcV6hWHeD4k'
     let formData = {
      title:this.title,
      description: this.description,
      date:this.date,
      collection: ''
      // coverPic:this.coverPic,
    }
     addDoc(docRef,formData).then((doc)=>{
     console.log('dataadd')
     console.log("Document written with ID: ", doc.id);
     this.docId=doc.id;
      formData.collection = doc.id
     updateDoc(doc,formData).then(()=>{
      console.log('Collection id update')
     }).catch((error)=>{
      console.log('Error updating collection ID:', error)
     })
    })    

  }
  // paste the titlepage function for generating subcollection with collection id//
   onSubmit()
  {
    // Handle, Form submission Logic
    // console.log('Question:',this.questiondescription)
    // console.log('Answer1:',this.answer1)
    // console.log('Answer2:',this.answer2)
    // console.log('Answer3:',this.answer3)
    // console.log('Answer4:',this.answer4)
    // console.log('AnswerDescription:',this.answerDescription)
    // console.log('QuestionId:',this.questionid)
    
  
    //pass the -> "this.docId" ,(new) declare the top side
    // part of Subcollection
    let docref = collection(this.firestore,'quiz' , this.docId , 'questions')
  
  // for storing data in subcollection
    for(let i=0; i<this.questions.length; i++){
      //data object mein store kr rha hai
      console.log(this.questions[i])

    let formData ={
      
      questionText:this.questions[i]['question'] ,
     //  store data in array 
       answer: this.questions[i]['options'],
      answerDescription:this.questions[i]['answerDescription'],
      questionid: '',
      collectionId:this.docId ,
      correctanswer:[this.questions[i]['options'][0]]
      
   };
   console.log(formData)
   addDoc(docref,formData).then((doc)=>{
    console.log('dataadd')
    console.log("Document written with ID: ", doc.id);
    formData.questionid = doc.id
    updateDoc(doc,formData).then(()=>{
      console.log('Subcollection ID updated')
    }).catch((error)=>{
      console.log('Error updating subcollection ID:', error)
    });
  });
  }

}

// Image Uploading code
Image(){

  // const metadata = {
  //   contentType: 'image/png',
  // };

  const storage = getStorage();
  const storageRef = ref(storage, `image/${this.path.name}`);
  
  const uploadTask = uploadBytesResumable(storageRef, this.path);
  
  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on('state_changed', 
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (_error) => {
      // Handle unsuccessful uploads
    }, 
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        this.url = downloadURL ;
        
      });
    }
  ); 
    
  // this.item.imageUrl = getDownloadURL;
  // console.log(this.item.imageUrl)
  
}


goToMyContent(): void {
  this.router.navigate(['/preview']);
}

gotohomePage()
{
  this.router.navigate(['/home'])
}

}
  

