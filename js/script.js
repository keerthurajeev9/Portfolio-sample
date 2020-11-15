var clientX = -100;
var clientY = -100;
var innerCursor = document.querySelector(".cursor");

var Cursor = function initCursor() {
    // add listener to track the current mouse position
    document.addEventListener("mousemove", function (e) {
        clientX = e.clientX;
        clientY = e.clientY;
    });

    var render = function render() {
        innerCursor.style.transform = 'translate(' + clientX + 'px, ' + clientY + 'px)';
     

        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

Cursor();

const talent = document.querySelectorAll('.talent');
const visiblebutton = document.querySelectorAll('.btn2');
console.log(visiblebutton);
talent.forEach(talent=>{
    talent.addEventListener('mouseenter',()=>
    {
        console.log('added');
        talent.classList.add('hover-talent');

    });
    talent.addEventListener('mouseleave',()=>{
        talent.classList.remove('hover-talent');
    })
})

const now = new Date();
const year = now.getFullYear();
const spantag = document.getElementById('span-year');
spantag.textContent = `  ${year}`;

const modal = document.getElementById('modal-container');
const grid = document.getElementById('grid1');
const bars = document.getElementById('bars');
const li = document.querySelectorAll('li');

li.forEach(li=>{
    li.addEventListener('click',()=>{
        modal.classList.add('visibility');
        grid.classList.remove('grid2');
    })
})

//open function
function open(){
    modal.classList.remove('visibility');
}
//close function
function close(){
    modal.classList.add('visibility');
    grid.classList.remove('grid2');
}
//Modal container 
const cross = document.getElementById('cross');
cross.addEventListener('click',close);
bars.addEventListener('click',open)