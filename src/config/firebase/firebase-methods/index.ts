import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export let fbSignUp = (body: any) => {
  return new Promise((resolve, reject) => {
    if (!body.email) {
      reject('Email  are Required');
      return;
    }
    if (!body.password) {
      reject(' Password are Required');
      return;
    } else {
      auth()
        .createUserWithEmailAndPassword(body.email, body.password)
        .then(res => {
          let id = res.user.uid;

          body.id = id;
          database()
            .ref(`users/${id}`)
            .set(body)
            .then(() => {
              resolve('User successfully created and data set');
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(error => {
          reject(error);
        });
    }
  });
};

export let fbLogin = (body: any) => {
  return new Promise((resolve, reject) => {
    if (!body.email) {
      reject('Email  are Required');
      return;
    }
    if (!body.password) {
      reject(' Password are Required');
      return;
    } else {
      auth()
        .signInWithEmailAndPassword(body.email, body.password)
        .then(res => {
          let id = res.user.uid;
          database()
            .ref(`users/${id}`)
            .once('value', data => {
              if (data.exists()) {
                resolve(data.val());
              } else {
                reject('No Data Found');
              }
            });
        })
        .catch(err => {
          reject(err);
        });
    }
  });
};

export let fbAuth = () => {};

export let fbSignout = () => {
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  // return signOut(auth);
};

export let fbAdd = (nodeName: string, body?: any) => {
  return new Promise((resolve, reject) => {
    body.id = database().ref(nodeName).push().key;
    database()
      .ref(`${nodeName}/${body.id}`)
      .set(body)
      .then(() => {
        resolve(body);
      });
  });
};

export let fbGet = (nodeName: string, id?: any) => {
  return new Promise((resolve, reject) => {
    database()
      .ref(`${nodeName}/${id ? id : ''}`)
      .once('value', data => {
        if (data.exists()) {
          resolve(Object.values(data.val()));
        } else {
          reject('No Data Found');
        }
      });
  });
};

export let fbEdit = (nodeName: string, id?: any, body?: any) => {
  return new Promise((resolve, reject) => {
    database()
      .ref(`${nodeName}/${id ? id : ''}`)
      .set(body)
      .then(() => {
        resolve(body);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export let fbDelete = (nodeName: string, id?: any) => {
  return new Promise((resolve, reject) => {
    database()
      .ref(`${nodeName}/${id ? id : ''}`)
      .remove()
      .then(res => {
        resolve('Data Delete Successfully');
      })
      .catch(err => {
        reject(err);
      });
  });
};

// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { getDatabase, ref, set, onValue, push } from "firebase/database";
// import { app } from "../firebase-config";
// import { getStorage } from "firebase/storage";

// let auth = getAuth(app);
// let db = getDatabase(app);
// let imgDB = getStorage(app);

// export let fbLogin = (body: any) => {
//   return new Promise((resolve, reject) => {
//     if (!body.email || !body.password) {
//       reject("Email and Password is Required");
//     } else {
//       signInWithEmailAndPassword(auth, body.email, body.password)
//         .then((res) => {
//           let id = res.user.uid;

//           const referece = ref(db, `users/${id}`);

//           onValue(referece, (data) => {
//             if (data.exists()) {
//               resolve(data.val());
//             } else {
//               reject("No Data Found");
//             }
//           });
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//   });
// };

// export let fbSignUp = (body: any) => {
//   return new Promise((resolve, reject) => {
//     if (!body.email || !body.password) {
//       reject("Email and Password is Required");
//     } else {
//       createUserWithEmailAndPassword(auth, body.email, body.password)
//         .then((res) => {
//           let id = res.user.uid;

//           body.id = id;
//           const referece = ref(db, `users/${id}`);
//           set(referece, body)
//             .then((user) => {
//               resolve("User Created Succefully");
//             })
//             .catch((error) => {
//               reject(error);
//             });
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//   });
// };

// export let fbAuth = () => {
//   return new Promise((resolve, reject) => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         const uid = user.uid;
//         resolve(uid);
//         // ...
//       } else {
//         // User is signed out
//         // ...
//       }
//     });
//   });
// };
// export let fbAdd = (nodeName: string, body: any, id?: string) => {
//   return new Promise((resolve, reject) => {
//     const id = push(ref(db, `${nodeName}/`)).key;
//     body.id = id;
//     const referece = ref(db, `${nodeName}/${body.id}`);
//     set(referece, body)
//       .then((res) => {
//         resolve("Data Send Successfully");
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// };
// export let fbGet = (nodeName: string, id?: any) => {
//   return new Promise((resolve, reject) => {
//     const referece = ref(db, `${nodeName}/${id ? id : ""}`);

//     onValue(referece, (data) => {
//       if (data.exists()) {
//         resolve(Object.values(data.val()));
//       } else {
//         reject("No Data Found :(");
//       }
//     });
//   });
// };
// export let fbAddUser = (body: any) => {
//   return new Promise((resolve, reject) => {
//     if (!body.email || !body.password) {
//       reject("Email and Password is Required");
//     } else {
//       signInWithEmailAndPassword(auth, body.email, body.password)
//         .then((res) => {
//           let id = res.user.uid;

//           const referece = ref(db, `users/${id}`);

//           onValue(referece, (data) => {
//             if (data.exists()) {
//               resolve(data.val());
//             } else {
//               reject("No Data Found");
//             }
//           });
//         })
//         .catch((err) => {
//           reject(err);
//         });
//     }
//   });
// };

// export let fbSignout = () => {
//   return signOut(auth);
// };

// export let fbDelete = (nodeName: string, id: string) => {
//   return new Promise((resolve, reject) => {
//     const reference = ref(db, `${nodeName}/${id}`);
//     set(reference, null)
//       .then(() => {
//         resolve("Data deleted successfully");
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// export let fbEdit = (nodeName: string, id: string, body: any) => {
//   return new Promise((resolve, reject) => {
//     const reference = ref(db, `${nodeName}/${id}`);
//     set(reference, body)
//       .then(() => {
//         resolve("Data updated successfully");
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// export let fbGetById = (nodeName: string, id: string) => {
//   return new Promise((resolve, reject) => {
//     const reference = ref(db, `${nodeName}/${id}`);
//     onValue(reference, (data) => {
//       if (data.exists()) {
//         resolve(data.val());
//       } else {
//         reject("Data not found for the specified ID");
//       }
//     });
//   });
// };

// export { imgDB };
