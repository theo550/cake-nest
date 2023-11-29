import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase-config';
import { MenuType } from '../types/menu';
import { fakeMenu2 } from '../data/fakeMenu';

export const getUser = async(id: string) => {
  const docRef = doc(db, 'users', id);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    return userReceived;
  } else {
    createUser(id, fakeMenu2);
  }
}

export const createUser = (userId: string, menu: MenuType[]) => {
  const docRef = doc(db, 'users', userId);
  const data = {
    user_name: userId,
    menu: menu
  }
  setDoc(docRef, data);
}

export const updateUser = async(userId: string, menu: MenuType[]) => {
  const docRef = doc(db, 'users', userId);
  await updateDoc(docRef, { menu });
}
