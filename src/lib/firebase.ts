import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBkq3UtECnSmISdX0rHVt5m9Hf_rKabBDw',
	authDomain: 'fireship-svelte-df3ac.firebaseapp.com',
	projectId: 'fireship-svelte-df3ac',
	storageBucket: 'fireship-svelte-df3ac.appspot.com',
	messagingSenderId: '201337120049',
	appId: '1:201337120049:web:bb5c8d5d049ee0f073bc10'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
