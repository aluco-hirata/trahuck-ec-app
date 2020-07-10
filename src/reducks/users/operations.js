import { auth, FirebaseTimestamp, db } from "../../firebase/index"
import { push, goBack } from "connected-react-router"



export const signUp = (userName, email, password, confirmPassword) => {
  return async (dispatch) => {
    if(userName === "" || email === "" || password === "" || confirmPassword === ""){
      alert("必須項目が未入力です")
      return false
    }

    if(password !== confirmPassword){
      alert("パスワードが一致しません")
      return false
    }

    return auth.createUserWithEmailAndPassword(email, password)
      .then(result => {
        const user = result.user

        if(user){
          const uid = user.uid
          const timestamp = FirebaseTimestamp.now()

          const userInitialData = {
            created_at: timestamp,
            email: email,
            role: "customer",
            uid: uid,
            updated_at: timestamp,
            userName: userName
          }

          db.collection("users").doc(uid).set(userInitialData)
            .then(() => {
              dispatch(push('/'))
            })
        }
      })
  }
}