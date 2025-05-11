var boxes =document.getElementById('boxes')
var box1 =document.getElementById('box1')
var box2 =document.getElementById('box2')
var box3 =document.getElementById('box3')
var box4 =document.getElementById('box4')
var task1 =document.getElementById('task1')
var task2 =document.getElementById('task2')
var task3 =document.getElementById('task3')
var task4 =document.getElementById('task4')
var task5 =document.getElementById('task5')
var task6 =document.getElementById('task6')
var task7 =document.getElementById('task7')
var task8 =document.getElementById('task8')


task1.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'task1'))
task2.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'task2'))
task3.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'task3'))
task4.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'task4'))
task5.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'task5'))
task6.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'task6'))
task7.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'task7'))
task8.addEventListener('dragstart' , (e) => e.dataTransfer.setData('text' , 'task8'))


box1.addEventListener('dragover' , (e) => e.preventDefault())
box2.addEventListener('dragover' , (e) => e.preventDefault())
box3.addEventListener('dragover' , (e) => e.preventDefault())
box4.addEventListener('dragover' , (e) => e.preventDefault())

box1.addEventListener('drop' , (e) =>{
    var id= e.dataTransfer.getData('text')
    var element= document.getElementById(id)
    box1.appendChild(element)
})
box2.addEventListener('drop' , (e) =>{
    var id= e.dataTransfer.getData('text')
    var element= document.getElementById(id)
    box2.appendChild(element)
})
box3.addEventListener('drop' , (e) =>{
    var id= e.dataTransfer.getData('text')
    var element= document.getElementById(id)
    box3.appendChild(element)
})
box4.addEventListener('drop' , (e) =>{
    var id= e.dataTransfer.getData('text')
    var element= document.getElementById(id)
    box4.appendChild(element)
})

task1.addEventListener('dblclick' , () => {
    box1.appendChild(task1)
})
task2.addEventListener('dblclick' , () => {
    box1.appendChild(task2)
})
task3.addEventListener('dblclick' , () => {
    box1.appendChild(task3)
})
task4.addEventListener('dblclick' , () => {
    box2.appendChild(task4)
})
task5.addEventListener('dblclick' , () => {
    boxe2.appendChild(task5)
})
task6.addEventListener('dblclick' , () => {
    boxe3.appendChild(task6)
})
task7.addEventListener('dblclick' , () => {
    box4.appendChild(task7)
})
task8.addEventListener('dblclick' , () => {
    box4.appendChild(task8)
})