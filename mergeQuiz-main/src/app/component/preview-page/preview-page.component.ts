import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, setDoc, updateDoc, deleteDoc, getDocs, query, where } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview-page',
  templateUrl: './preview-page.component.html',
  styleUrls: ['./preview-page.component.css']
})
export class PreviewPageComponent implements OnInit{

  
  quiz:any
 
    title: any;
    discription: any;
    date: any;
    // quiz!: Observable<any>
    answer1:any;
    answer2:any;
    answer3:any;
    answer4:any;
    answerDescription:any;
    questionText:any;
    correctAnswer:any
    docId: any;
    selectedDocId: any;
    documentData: any;
    getDocumentData: any;
    quizDetail: any;

  
    constructor(private firestore: Firestore,private router: Router){
      // this.getData();
    }
  
    questions: any[] = [];

    ngOnInit() {
  
        
      let urllink =  window.location.href; 
      let docId:any =  urllink.split('=')
      console.log('doc id get',docId)
  
      docId = docId[1]
      console.log(urllink)
      console.log(docId[1])
      
      
      const quizdidatl = query(collection(this.firestore, "quiz"  ) ,where("collection", "==", docId));    
      getDocs(quizdidatl).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const quizData = doc.data();
          this.quizDetail = quizData
          console.log('question data', this.quizDetail);
  
        });
      })
  
      const quizRef = collection(this.firestore, 'quiz');
      const quizqu = query(quizRef);
       
      console.log( 'quiz data refer',quizqu)
      getDocs(quizqu).then((_querySnapshot) => {
     
  
        const questionsRef = collection(this.firestore, 'quiz', docId , 'questions');
       
        const questionsQuery = query(questionsRef);
        getDocs(questionsQuery).then((questionsSnapshot) => {
          
           questionsSnapshot.forEach((Doc) => {
              const questionData = Doc.data();
             //  console.log(doc.id, '=>', doc.data());
                this.questions.push(questionData);
               console.log( 'question Data add',questionData)
              });
              
               });
  
           });
        }
         goToCreateQuiz(): void {
          this.router.navigate(['/preview']);
        }
  
        BacktohomePage(){
          this.router.navigate(['/preview']);
        }

        
}
