//& PROMISE

// let check = true;

// function createPromise() {
//   return new Promise((resolve, reject) => {
//     if (check) {
//       resolve("duzgun calisti");
//     } else {
//       reject("nese qeyneme var");
//     }
//   });
// }
// createPromise()
//   .then((response) => {
//     console.log("Success:", response);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

//& PROMISE XHR
// function readStudents(url) {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     try {
//       xhr.addEventListener("readystatechange", () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         }
//       });
//     } catch (error) {
//       reject(error);
//     }
//     xhr.open("GET", url);
//     xhr.send();
//   });
// }

// readStudents("student.json")
//   .then((res) => console.log("Success:", res))
//   .catch((err) => console.log("Error:", err));

//& ASYNC AWAIT

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", async () => {
//   const resComments = await (
//     await fetch("https://jsonplaceholder.typicode.com/comments")
//   ).json();
//   let dynamicId = resComments[1].id;

//   const postId = await (
//     await fetch(
//       `https://jsonplaceholder.typicode.com/comments?postId=${dynamicId}`
//     )
//   ).json();
//   console.log(postId);
// });

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", async () => {
//   try {
//     // Yorumları çek
//     const resComments = await (
//       await fetch("https://jsonplaceholder.typicode.com/comments")
//     ).json();

//     if (!resComments.ok) {
//       throw new Error(
//         `Bir sehv yarandi:${resComments.status} - ${resComments.statusText}`
//       );
//     }

//     // postId'si 1 olan yorumları filtrele
//     const filteredComments = resComments.filter(
//       (comment) => comment.postId === 1
//     );

//     // HTML'de bir liste oluşturalım
//     const commentList = document.getElementById("commentList");
//     commentList.innerHTML = ""; // Önce listeyi temizleyelim

//     // Filtrelenmiş yorumları ekranda göster
//     filteredComments.forEach((comment) => {
//       const li = document.createElement("li");
//       li.textContent = `${comment.name}: ${comment.body}`;
//       commentList.appendChild(li);
//     });
//   } catch (error) {
//     console.error("Bir hata oluştu:", error);
//   }
// });

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", async () => {
//   try {
//     const resComments = await fetch(
//       "https://jsonplaceholder.typicode.com/comments"
//     );

//     if (!resComments.ok) {
//       throw `Bir sehv yarandi: ${resComments.status} - ${resComments.statusText}`;
//     }
//     const comments = await resComments.json();

//     const filteredComments = comments.filter((comment) => comment.postId === 1);

//     const firstId = filteredComments[0]?.id;
//     if (firstId !== undefined) {
//       console.log("Ilk Id:", firstId);
//     } else {
//       console.log("Id tapilmadi");
//     }
//   } catch (error) {
//     console.error("Bir hata oluştu:", error);
//   }
// });

// const btn = document.querySelector("#btn");

// btn.addEventListener("click", async () => {
//   try {
//     const resComments = await fetch(
//       "https://jsonplaceholder.typicode.com/comments"
//     );

//     if (!resComments.ok) {
//       throw `Bir sehv yarandi: ${resComments.status} - ${resComments.statusText}`;
//     }

//     const comments = await resComments.json();

//     // postId'si 1 olan yorumları filtrele
//     const filteredComments = comments.filter((comment) => comment.postId === 1);

//     const checkId = filteredComments.find((comm) => comm.id === 1);
//     if (checkId) {
//       const { name, email, body } = checkId;
//       console.log(name, email, body);
//     }
//   } catch (error) {
//     console.error("Bir hata oluştu:", error);
//   }
// });

// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   setTimeout(() => {
//     if (success) {
//       resolve("İşlem başarıyla tamamlandı!");
//     } else {
//       reject("İşlem başarısız oldu!");
//     }
//   }, 1000);
// });

// myPromise
//   .then((result) => {
//     console.log(result); // Eğer işlem başarılı olursa, burada çalışır
//   })
//   .catch((error) => {
//     console.log(error); // Eğer işlem başarısız olursa, burada çalışır
//   })
//   .finally(() => {
//     console.log("Temizlik işlemi yapılıyor...");
//     // Bu kod her durumda çalışacak
//   });
