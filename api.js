const express = require('express') //importo express
const app = express() //inizializzo express istanza assegnata alla variabile app
const PORT = process.env.PORT || 3000 // server  con una variabile di sistema e porta del sistema,se la variabile di sistema non è definita allora server locale risponde alla porta 3000
 
var courses_offered = [{id: 21, name: 'HCI'},
{id: 28, name:'sweng'}]
app.get('/', (req, res) => res.send('Hello World!')) 
 
app.get('/courses', (req, res) => {
   res.json(courses_offered)
})
 
app.listen(PORT, () => console.log('Example app listening on port' + PORT)) //fa partire il server e una funzione senza parametri invcata quando parte il server
