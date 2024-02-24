// // // alert ("hai hai")


//  let npm = 23312041
//  let nama = "Dehendy Wijaya"
//  let kelas = "IF 23"
// let masuk = "masa"

// // if(masuk == "masal"){
// //     masuk = "Berangkat"
// // }else {
// //     masuk = "Libur"
// // }

// switch (masuk){
// case "masal":
//     masuk = "Berangkat"
// break
// case "masa":
//     masuk = "Tidak Berangkat"
// break
// default:
//     masuk = "Libur"
// break
// }



//  alert(`Nama saya adalah ${nama} dengan NPM ${npm} dan saya kelas ${kelas} dan hari ini saya ${masuk}`)











// // ARRAY

// // let aray = ['npm', "nama", "kelas"]
// // aray.push ('rumah') // menambahkan aray
// // aray.shift() // menghapus urutan 1
// // Array.pop()// menghapus paling terakhir

// // let arayy = []

// // arayy[0] = "npm"
// // arayy[1] = "kelas"

// // alert (arayy)



// //LOOPING
// //for lop

// // for (let j = 0; j<10; j++){
// //     console.log ("mabar") // yang biasa
// // }


// const mabar = ["npm", "kelas"]

// for (let i = 0; i<mabar.length; i++){
//     console.log (mabar[i]) // yang biasa
// }






//DOM (coding html menggunkan java)

// document.title = 'mancur ekbew'
const body = document.body
// console.log (document.body )




// const h1 = document.createElement ("h1")
// h1.textContent = 'Anjay Mabar'

// const br2 = document.createElement ("B")
// br2.innerHTML = "Anzay Mabar"

// const br3 = document.createElement ("p")
// br3.innerText = "Mabar Anajay"

// body.append (br2)
// body.append (br3)
// body.append (h1)
    

//BUTTOn

// const btn1 = document.getElementById ("btn1")
// const btn2 = document.querySelector(".btn2")
// const btn3 = document.querySelector (".btn3")

// const defaultText = "Klik 2"
// btn2.textContent = defaultText

// console.log ("btn1")
// btn1.style.border = "none"
// btn1.style.padding = "8px"
// btn1.style.fontSize = "24px"
// btn1.style.background = "red"

// function gantiWarna(){
//     btn1.style.background = "yellow"
//     const newText = document.createElement ("p")
//     newText.textContent = "HALO KAWAN"
//     body.append (newText)

// }

// function kepencet(){
//     btn2.textContent = 'tes'

// }

// function gaJadi () {
//     btn2.textContent = defaultText

// }

// const textBtn3 = "Klik Saya King"


// function masuk(){ 
//     const TextMasuk = document.createElement ("b")
//     TextMasuk.innerHTML= "Tes"
//     TextMasuk.style.color = "red"
//     body.append (TextMasuk)
// }

// function keluar(){
//     if (TextMasuk){
//     TextMasuk.style.color = "black"
//     }
// }

//araybelajar

// const arrayKita = ["alpukat", "semangka", 'nanas']

// const tesBuah = arrayKita.includes ("semangka")

// if(tesBuah){
//     const posisi = arrayKita.indexOf("semangka")
//     const indexBefore = posisi - 1
//     const indexAfter = posisi + 1 
//     const before = arrayKita [indexBefore]
//     const after = arrayKita [indexAfter]

//     console.log(`buah sebelum semangka adalah ${before}`)
//     console.log(`buah seteleah semangka adalah ${after}`)
    
//     const buahAwal = arrayKita.shift()
//     const buahAkhir = arrayKita.pop()

//     console.log (`Buah awal adalah ${buahAwal}`)
//     console.log (`Buah akhir adalah ${buahAkhir}`)

// }else {
//     console.log ("saya kurang tahu")
// }


// menggabung array

// const array1 = ["padim", "hehe"]
// const array2 = ["sini", "aja"]
// const MergeArray = array1.concat(array2)

// for(list of MergeArray) console.log(list) // of / in
// MergeArray.map((value, index) => console.log(value, index))


// const datas = [{
//     'name' : 'Dehendy',
//     'stack' : 'c++',
//     'age' : '18',
// },
// {
//     'name' : 'jabran',
//     'stack' : 'py',
//     'age' : '19',
// },
// {
//     'name' : 'wijaya',
//     'stack' : 'c',
//     'age' : '38',
// },
// {
//     'name' : 'lusuma',
//     'stack' : 'css',
//     'age' : '28',
// }
// ]

//datas.map ((value , index) => {console.log(value.name, value.stack)})

//datas.sort((a,b) => a.age - b.age).map ((values) => console.log (values))


//datas
// .filter ((x) => x.age < 30)
// .map ((values) => console.log(values))

// datas
// .sort ((a,b) => a.age - b.age)
// .filter((x)=> x.age <30)
// .map ((values) => console.log (values))




// pembuatan function

const sum1 = new Function ('x', 'y ', 'console.log(x+y)')

function sum2(x, y ) {
    console.log (x + y)
}

const sum3 = (x ,y ) => {
    console.log (x + y)
}

sum1(1 , 2)
sum2(2 , 3)
sum3(3 ,3)



function luasLing (x, y){
    console.log (x * y * y)
}
luasLing(3.14, 12)  

const LuasSegitiga = (x, y ,z) => {
    console.log(x*y*z)
}
LuasSegitiga(1/2, 4, 5)


function totalGaji (namaKaryawan , gajiPerhari , jumlahMasuk,){
    const gaji = gajiPerhari * jumlahMasuk
    console.log (`${namaKaryawan} Masuk selama ${jumlahMasuk} hari, karena 1 hari dia mendapatkan upah sebesar ${gajiPerhari} ribu maka gajih perbulan beliau adalah ${gaji} ribu  `) 
}

totalGaji ("Dehendy" , "1000" , 30)