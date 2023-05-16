// import { Component } from '@angular/core';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Firestore, addDoc, collection, firestoreInstance$ } from '@angular/fire/firestore';

@Component({
  selector: 'app-titlepage',
  templateUrl: './titlepage.component.html',
  styleUrls: ['./titlepage.component.css']
})
export class TitlepageComponent {
  
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

  constructor(private firestore : Firestore){ }

  onSubmit()
  {
    // Handle, Form submission Logic
    console.log('Question:',this.questiondescription)
    console.log('Answer1:',this.answer1)
    console.log('Answer2:',this.answer2)
    console.log('Answer3:',this.answer3)
    console.log('Answer4:',this.answer4)
    console.log('AnswerDescription:',this.answerDescription)


    // Add new Document with random generate id 
    // const docref:any= collection(this.firestore,"mergequiz","mergequestion")
    
    const docref = collection(this.firestore,'mergequiz','WRjblF6Uc9XGUDwmnA6P','subcollection')

    let formData ={
     questiondescription:this.questiondescription ,
     answer1 : this.answer1,
     answer2: this.answer2,
     answer3:this.answer3,
     answer4: this.answer4,
    //  id: this.id,
     answerDescription:this.answerDescription
     
  }

    addDoc(docref,formData).then((doc)=>{
      
      console.log('dataadd')
      console.log("Document written with ID: ", doc.id);
    })
  
      .catch(function(error){
        console.log("Error creating:",error)
      })
   
  }

}
