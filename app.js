import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@supabase/supabase-js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use(express.static(path.join(__dirname, 'public')))
const supabase = createClient(

'https://wxvpvaojgrmhdzqvpkdf.supabase.co',

'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4dnB2YW9qZ3JtaGR6cXZwa2RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5NzM0MzYsImV4cCI6MjA5MDU0OTQzNn0.6SxcNcv8oWb2LRMlsLkilBscIN-Ov3_7PuaadkJEV5Q' )


app.get('/', (req, res) => {
res.sendFile(path.join(__dirname,'public' ,'index.html'))
})



app.post('/usuario', async (req, res) => {
const { nome,celular,email } = req.body

const { data, error } = await supabase
.from('usuario')
.insert([{ nome,celular,email }])

res.send("Enviado para o banco")

if (error) {
  return res.status(500).json({ error: error.message })
}

})

export default app