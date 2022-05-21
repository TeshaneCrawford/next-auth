import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import { initializeApp, getApp, getApps } from "firebase/app";
import {
  getFirestore, collection,
  query, getDocs, where,
  limit, doc, getDoc,
  addDoc, updateDoc, deleteDoc, runTransaction
} from "firebase/firestore";

import clientPromise from "lib/mongodb"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlkH9ybloN5z_dDkz5q9JJNsVDLdnr-tg",
  authDomain: "next-auth-8d7f0.firebaseapp.com",
  projectId: "next-auth-8d7f0",
  storageBucket: "next-auth-8d7f0.appspot.com",
  messagingSenderId: "262157665164",
  appId: "1:262157665164:web:81e46fa94d09c78a418ca9"
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  adapter: new FirebaseAdapter({
    db, collection,
    query, getDocs, where,
    limit, doc, getDoc, addDoc,
    updateDoc, deleteDoc, runTransaction
  }),
  // Configure one or more authentication providers
  Providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
  ],
})