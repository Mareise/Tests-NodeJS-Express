const express=require('express')
const app=express()
app.use(express.static('public'))
app.listen(3000,function() {
console.log('listening on port 3000')
})

app.get('/hello', function (req, res) {
res.send('Hello World!')
})


app.get('/api/students/:studentId',
function (req,res) {
	if(req.params.studentId==1234){
	res.status(404).send('Uuups!')}
	else {
	res.send('Hallo');}
}
})
