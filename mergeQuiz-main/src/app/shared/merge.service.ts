import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc ,collection, addDoc} from '@angular/fire/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
// import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class MergeService {
  title: any;
  discription: any;
  date: any;
  image:any;

  constructor(private firestore:Firestore) { }

  // onSubmit(form: NgForm) {
  //   this.firestore.collection('quizzes').add({
  //     title: form.value.title,
  //     description: form.value.description,
  //     date: form.value.date,
  //     image: form.value.image
  //   })
  //   .then(res => {
  //     console.log('Quiz added successfully!');
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // }

//   addData(f: any) {
//     if(f.valid){
//       alert("Are You sure" )
//     }
//     else{
//       alert("please fill the form")
//     }
//     const id = Math.random().toString(36).substring(2, 10 + 2);
//     f.value['id'] = id
//     let taskRef: any = doc(this.firestore, 'Quizes', f.value["id"]); //add
//     setDoc(taskRef, f.value)
//       .then(() => {
//         console.log('Data saved Successfully')
//       })
//       .catch((err) => {
//         console.log(err)
//       })
// }


}
