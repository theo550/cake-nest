import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase-config';

export const getUser = async(id: string) => {
  const docRef = doc(db, 'users', id);
  const docSnapshot = await getDoc(docRef);
  console.log(docSnapshot.exists());
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    console.log(userReceived);
    return userReceived;
  }
}

export const createUser = (userId: string) => {
  const docRef = doc(db, 'users', userId);
  const data = {
    user_name: userId,
    menu: [
      {
        id: 1,
        imageSource: "/images/cupcake-item.png",
        title: "BerryJoy",
        price: 3.598,
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
      }
    ]
  }
  setDoc(docRef, data);
}
