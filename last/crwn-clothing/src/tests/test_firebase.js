import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

//get doc
firestore.collection('users').doc('7uuwI3qbbv3MJ9QVzke1').collection('cartItems').doc('VXrI1hr6cH6XmsRJj9Yy')

//get doc other way
firestore.doc('/users/7uuwI3qbbv3MJ9QVzke1/cartItems/VXrI1hr6cH6XmsRJj9Yy')
//get collection
firestore.collection('/users/7uuwI3qbbv3MJ9QVzke1/cartItems')