import fetch from 'node-fetch';
import axios from 'axios';
import fs from 'fs/promises'

// URLs
// Frases: https://api.adviceslip.com/advice
// Rick and Morty: https://rickandmortyapi.com/api/character/25
// Traducoes divertidas: https://api.funtranslations.com/translate/yoda

/* 
                -- API Advices -- 

async function buscaDadosApisFrasesComFetch() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const dados = await response.json()
    console.log(dados)
}

async function buscaDadosApisFrasesComAxios() {
    const response = await axios.get('https://api.adviceslip.com/advice')
    console.log(response.data)
}

buscaDadosApisFrasesComAxios()
*/

/*
                -- API Rick and Morty --

async function buscaDadosApisFrasesComFetch() {
    const response = await fetch('https://rickandmortyapi.com/api/character/25')
    const dados = await response.json()
    console.log(dados)
}*/

async function buscaDadosApisFrasesComAxios() {
    const id = 25
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    console.log(Object.keys(response.data))
    try {
        const content = response.data;
        await fs.writeFile('arquivo.csv', JSON.stringify(content));
      } catch (err) {
        console.log(err);
      }
}

buscaDadosApisFrasesComAxios() 

/*async function solicitaTraducaoTextoParaLinguaYodaFetch() {
    const body = { text: 'Hello my friend!'}

    const response = await fetch('https://api.funtranslations.com/translate/yoda', {
        method: 'POST', 
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
    const data = await response.json()

    console.log(data)
}

solicitaTraducaoTextoParaLinguaYodaFetch()*/


/*async function solicitaTraducaoTextoParaLinguaYodaAxios() {
    const body = { text: 'Hello my friend!'}
    const response = await axios.post('https://api.funtranslations.com/translate/yoda', body)
    console.log(response)
}

solicitaTraducaoTextoParaLinguaYodaAxios() */


/* var data = [
    {
        name: 'Armothy',
        status: 'Dead',
        species: 'Unknown',
        type: 'Self-aware arm',
        gender: 'Male',
        created: '2017-11-05',
        image: 'https://rickandmortyapi.com/api/character/avatar/25.jpeg'
    },
]; */

/* const options: Options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Rick and Morty',
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,

    filename: 'arquivo'
};

const csvExporter = new ExportToCsv(options); */


/*const fs = require('fs/promises');

async function example() {
  try {
    const content = 'Rick and Morty';
    await fs.writeFile('arquivo.csv', content);
  } catch (err) {
    console.log(err);
  }
}

example();*/
