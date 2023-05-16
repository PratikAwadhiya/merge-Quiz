// import { Component } from '@angular/core';
// import { MergeService } from 'src/app/shared/merge.service';

// import { Firestore, doc, setDoc ,collection, addDoc} from '@angular/fire/firestore';

import { Component, } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { addDoc, collection, Firestore, firestoreInstance$, getDocs, query} from '@angular/fire/firestore';



@Component({
  selector: 'app-coverpage',
  templateUrl: './coverpage.component.html',
  styleUrls: ['./coverpage.component.css']
})
export class CoverpageComponent {
  
  imageUrl: any;
  title : string = '';
  date : any;


  //Type Declare
  questiondescription : any;
  answer1 : any;
  answer2 : any;
  answer3 : any;
  answer4 : any;
  // id : any;
  answerDescription : any;

  //declare variable for storing an id in firebase
   docId : any;
  

  onFileSelected(event:any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imageUrl = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  uploadImage() {
    
    console.log('Image uploaded!');
  }

// change the variable name//
  title1: string = '';
  description: string = '';
  date2:any;
  questions = [];
  // coverPic: any;
  constructor(private firestore: Firestore){
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
      date:this.date
      // coverPic:this.coverPic,
    }
     addDoc(docRef,formData).then((doc)=>{
     console.log('dataadd')
     console.log("Document written with ID: ", doc.id);
     this.docId=doc.id;
    })

    .catch(function(error) {
      console.error("Error creating: ", error);
  });
   
  }
  // paste the titlepage function for generating subcollection with collection id//
  onSubmit()
  {
    // Handle, Form submission Logic
    console.log('Question:',this.questiondescription)
    console.log('Answer1:',this.answer1)
    console.log('Answer2:',this.answer2)
    console.log('Answer3:',this.answer3)
    console.log('Answer4:',this.answer4)
    console.log('AnswerDescription:',this.answerDescription)


    //pass the -> "this.docId" ,(new) declare the top side
    // part of Subcollection
  
    const docref = collection(this.firestore,'quiz' , this.docId , 'questions')
    
    
    let formData ={

     questiondescription:this.questiondescription ,
    //  store data in array 
      answer: [ this.answer1,
        this.answer2,
        this.answer3,
        this.answer4,
       ] ,
      //  id: this.id,
     answerDescription:this.answerDescription
     
  };
 addDoc(docref,formData).then((doc)=>{
    
      console.log('dataadd')
      console.log("Document written with ID: ", doc.id);
      
    })
  
      .catch(function(error){
        console.log("Error creating:",error)
      })
      
       
  }
  
}

// function addQuestion() {
//   throw new Error('Function not implemented.');
// }

