import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, setDoc, updateDoc, deleteDoc, CollectionReference, DocumentData, getDocs, query, getDoc,} from '@angular/fire/firestore';

import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from '@angular/cdk/dialog';
import { DialogExampleComponent } from 'src/app/dialog-example/dialog-example.component';
// import { getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";



@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent {
  title: any;
  discription: any;
  date: any;
  quiz!: Observable<any>
  // questions!: Observable<any[]>;
  docId: any;
  imageurl:any
  // selectedCards: any[] = [];
  mergedCardData: any;
  selectedPreviewItem: any;
  isDataFetched: boolean | undefined;
  
  selectedQuestions: any[] = [];
  questions: any[] = [];

  // db:any;
  // subcollectionData$: any;
  constructor(private firestore:Firestore,private router: Router,public dialog: MatDialog){
    this.getData();
  }

  openDialog()
  {
    this.dialog.open(DialogExampleComponent);
  }
    


  getData() {
    // this.userData=[]
    const collectionInstance = collection(this.firestore, 'quiz');
   this.quiz = collectionData(collectionInstance, { idField: 'id' })
     this.quiz.subscribe(val => {
        console.log(val);
      })

    // this.quiz= collectionData(collectionInstance, { idField: 'id' });
    // console.log(this.quiz)
    // this.getData()
   
  }

  toggleCardExpansion(item: any) {
    item.expanded = !item.expanded;
  }
  
  goTocoverPage(): void {
    this.router.navigate(['/cover']);
  }  

  goTopriviewpage(docId:any) {
    console.log("Previewing document with ID:", docId);

    // this.router.navigateByUrl(['/previewpage']);

    let url = '/previewpage?docId='+docId
    this.router.navigateByUrl(url);
   
  }
  BacktohomePage(){
    this.router.navigate(['/Home']);
  }

  // toggleSelection(item: any) {
  //   item.selected = !item.selected;
  // }

  
  toggleSelection(event: any, cardId: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (event.target && event.target.checked) {
        console.log('Selected card ID:', cardId);
        resolve(cardId);
      } else {
        reject('Checkbox is unchecked.');
      }
    });
  }

// Selected questions
selectedquestion(event: any, isCheck: any) {
  console.log('isCheck', isCheck );
 
  if (isCheck) { 
    if (!this.selectedQuestions.includes(event)) { 
      this.selectedQuestions.push(event); 
    }
    console.log('getquestions', this.selectedQuestions);
  } else {
    var id = event.collection;
    var list = this.selectedQuestions
    var lists = list.filter(x => {
      return x.collection != id;
    })
    this.selectedQuestions = lists

    console.log('getquestions', this.selectedQuestions);
  }
}

//main function 
// mergeQuizzes(){
//   console.log('getquestions', this.selectedQuestions);
//   this.selectedQuestions.forEach((Doc1)=>{
//   const quizData = Doc1;
//   console.log( quizData)
//   const questionsRef = collection(this.firestore, 'quiz', quizData.collection , 'questions');
     
//   const questionsQuery = query(questionsRef);
//   getDocs(questionsQuery).then((questionsSnapshot) => {
//   questionsSnapshot.forEach((Doc) => {
         
//   const questionData = Doc.data();
  
//   //  console.log(doc.id, '=>', doc.data());3
//   this.questions.push([questionData]);
//   console.log( 'question Data add',questionData)
//   console.log( "quetionss",this.questions)
//   });
  
//   });
//   })

  
// }

mergeQuizzes() {

  console.log('getquestions', this.selectedQuestions);
    this.selectedQuestions.forEach((Doc1) => {
      const quizData = Doc1;
      console.log(quizData);
      const questionsRef = collection(this.firestore, 'quiz', quizData.collection, 'questions');
      const questionsQuery = query(questionsRef);
    
      getDocs(questionsQuery).then((questionsSnapshot) => {
        questionsSnapshot.forEach((Doc) => {
          const questionData = Doc.data();
          this.questions.push([questionData]);
          console.log('question Data add', questionData);
          console.log('questions', this.questions);
        });
      });
    });
    
    // const dialogRef = this.dialog.open(DialogExampleComponent, {
    //   width: '400px'
    // });


  const title = prompt("Enter the title of the new quiz:");
  const description = prompt("Enter the description of the new quiz:");
  const coverImage = prompt("Enter the cover image URL of the new quiz:");
  const date = prompt("Enter the date of the new quiz (format: YYYY-MM-DD):");

  if (title && description && coverImage && date) {
    const newQuizData = {
      title: title,
      description: description,
      coverImage: coverImage,
      date: date
    };

    addDoc(collection(this.firestore, 'quiz'), newQuizData).then((newQuizRef) => {
      const newQuizId = newQuizRef.id;

      this.selectedQuestions.forEach((quizData) => {
        const questionsRef = collection(this.firestore, 'quiz', quizData.collection, 'questions');
        const questionsQuery = query(questionsRef);

        getDocs(questionsQuery).then((questionsSnapshot) => {
          questionsSnapshot.forEach((questionDoc) => {
            const questionData = questionDoc.data();
            const mergedQuestionData = {
              ...questionData,
              quizData: newQuizId
            };

            addDoc(collection(this.firestore, 'quiz', newQuizId, 'questions'), mergedQuestionData)
              .then((questionRef) => {
                console.log("Merged question data", mergedQuestionData);
                console.log("Question reference document ID ", questionRef.id);
                // Do something with the questionRef if needed
              });
          });
        });
      });

      // Update the new quiz's title and description
      updateDoc(doc(this.firestore, 'quiz', newQuizId), {
        title: title,
        description: description
      }).then(() => {
        console.log("New quiz title and description updated successfully");
      }).catch((error) => {
        console.error("Error updating new quiz title and description", error);
      });
    }).catch((error) => {
      console.error("Error creating new quiz", error);
    });
  }
}

goTohomePage()
{
  this.router.navigate(['/home'])
}

}

