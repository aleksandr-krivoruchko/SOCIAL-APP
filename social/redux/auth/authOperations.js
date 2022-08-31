// import { auth } from "../../firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

// export async function signUp({ email, password }) {
//   try {
//     const user = await auth.createUserWithEmailAndPassword(email, password);
//     console.log("user", user);
//   } catch (error) {
//     console.log(error.message);
//     throw error;
//   }
// }
export async function signIn(dispatch, getState) {}
export async function signOut(dispatch, getState) {}

export function signUp({ email, password }) {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
