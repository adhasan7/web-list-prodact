// const mahasiswa =
//   {
//     nama: "Ziah",
//     nrp: "0188299",
//     email: "ziah@gmail.com",
//   },
//   {
//     nama: "Zim",
//     nrp: "018829dd9",
//     email: "zim@gmail.com",
//   },

// const data = JSON.stringify(mahasiswa);
// console.log(data);

const mahasiswa = [
  {
    username: "Sammy Shark",
    location: "Indian Ocean",
    online: true,
    followers: 987,
    hobby: ["coding", "gaming"],
    pembimbing: {
      pembimbing1: "anonim satu",
      pembimbing2: "anonim dua",
    },
  },

  {
    username: "Jesse Octopus",
    location: "Pacific Ocean",
    online: false,
    followers: 432,
    hobby: ["makan", "minum"],
    pembimbing: {
      pembimbing1: "anonim satu",
      pembimbing2: "anonim dua",
    },
  },
];

// for(let i = 0; i < mahasiswa.length; i++){
//   mahasiswa[0];
// }

// console.log(mahasiswa);
for (key in mahasiswa) {
  console.log(mahasiswa[key]);
}

const mahasiswaList = document.getElementById("mahasiswa-list");

for (const mahasiswaData of mahasiswa) {
  const mahasiswaDiv = document.createElement("div");
  mahasiswaDiv.innerHTML = `
  <hr>          
                <h2>${mahasiswaData.username}</h2>
                <p>Location: ${mahasiswaData.location}</p>
                <p>Online: ${mahasiswaData.online ? "Yes" : "No"}</p>
                <p>Followers: ${mahasiswaData.followers}</p>
                <p>Hobby: ${mahasiswaData.hobby.join(", ")}</p>
                <p>Pembimbing 1: ${mahasiswaData.pembimbing.pembimbing1}</p>
                <p>Pembimbing 2: ${mahasiswaData.pembimbing.pembimbing2}</p>
            `;
  mahasiswaList.appendChild(mahasiswaDiv);
}

//console.log(mahasiswa);
// const data = JSON.stringify(mahasiswa);
// console.log(data);

// console.log(mahasiswa[0]);

// let newMhs = mahasiswa[0].jesse;
// console.log(newMhs);
// let tampilkanMhs = ` newMhs.username;
// newMhs.location;
// newMhs.online; `

// console.log(tampilkanMhs);

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   console.log(xhr);
//   //if (xhr.readyState == 4 && xhr.status == 200) {
//   console.log(xhr.responseText);
//   console.log(xhr);
//   let mahasiswa = this.responseText;
//   console.log(mahasiswa);
//   try {
//     let parseData = JSON.parse(mahasiswa);
//     console.log(parseData);
//   } catch (error) {
//     console.log("gagal mendapatkan json");
//   }
//   console.log(mahasiswa);
// };
// //};
// xhr.open("GET", "latihan1.json", true);
// xhr.send();

//versi sandhika

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xh)
// }

// fetch("latihan1.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
