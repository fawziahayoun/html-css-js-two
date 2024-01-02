
//linkes section
let linkSection = document.querySelectorAll(".links a");
let otherLinkSection = document.querySelectorAll(".other-links li");
function secrollToSomewhere(elements){
    elements.forEach(el =>{
        el.addEventListener("click", (e) => {
            e.preventDefault();
        
        
                document.querySelector(e.target.dataset.section).scrollIntoView({
                    behavior: 'smooth'
                            });
        
            });

    });
};
secrollToSomewhere(linkSection);
secrollToSomewhere(otherLinkSection);

//open toggle manu
toggle =document.querySelector(".toggle-manu");
links = document.querySelector(".links"); 
linkso = document.querySelectorAll(".links li");
toggle.onclick = function () {
   links.classList.toggle("open");
   othrLinks.classList.remove("open");
   this.classList.toggle("active");
   toggle.classList.remove("deraction");    

     };     
linkso.forEach((li) => {
    li.onclick = function () {
        links.classList.remove("open");
        toggle.classList.remove("active");
         }   
});
other = document.querySelector(".other");
othrLinks = document.querySelector(".other-links");
lo = document.querySelectorAll(".other-links li");
other.onclick = function () {
    othrLinks.classList.toggle("open");
    toggle.classList.add("deraction");    
};

lo.forEach((link) => {
    link.onclick = function () {
        othrLinks.classList.remove("open");
        toggle.classList.remove("deraction");    
    }
});
/**/


 //progress and  up button
 let spanelemnt =document.querySelector(".up");
 var skills = document.querySelector(".skills");
 window.onscroll = function () {
    if(this.scrollY >= 1000){
        spanelemnt.classList.add("show");
            }else{
                spanelemnt.classList.remove("show");
          
            }
    let skillsOffsetTop = skills.offsetTop;
    let skillsOutHeight = skills.offsetHeight;
    let windowHeight  = this.innerHeight;
    let windowScroolTop = this.pageYOffset;
    if(windowScroolTop > (skillsOffsetTop + skillsOutHeight - windowHeight)){
        var allSkills = document.querySelectorAll(".skills .prog span");
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.progress;
            skill.style.display = 'block';
        }); 
    };
    spanelemnt.onclick = function(){
        window.scrollTo({
       top:0,
       behavior: "smooth",
        });
     }
 };
 //form information
 var form = document.querySelector(".form");
var submit = document.querySelector(".submit");
submit.onclick = function(e) {
    e.preventDefault();  
}
submit.addEventListener('click', (e) => {
    var name = document.querySelector(".name");
    var phone = document.querySelector(".phone");
    var email = document.querySelector(".email");
    var adea = document.querySelector(".adea");
    name = name.value;
    localStorage.setItem('name', name);
    phone = phone.value;
    localStorage.setItem('phone',phone);
    email = email.value;
    localStorage.setItem('email', email);
    adea = adea.value;
    localStorage.setItem('adea', adea);
});
 //input maxlenght
 let myText = document.querySelector('.my-text');
 let Myspan = document.getElementById('my-span');
 myText.onkeyup = function(){
    Myspan.textContent = 80 - this.value.length;
    if(Myspan.textContent <= 0){
        Myspan.style.color = '#f00';
    }else{
        Myspan.style.color = '#000';
    }
 };
 //start  photograph
 var ourGallery = document.querySelectorAll(".pho img");
ourGallery.forEach((img) => {
    img.addEventListener("click", (e) =>{
        let overlay = document.createElement("div");
        overlay.className = ' popup-overlay';
        document.body.appendChild(overlay);
        let popupBox = document.createElement("div");
        popupBox.className = 'popup-box';
        let imageHrading = document.createElement("h3");
        let imageText =  document.createTextNode(img.alt);
        imageHrading.appendChild(imageText);
        popupBox.appendChild(imageHrading)
        let popupimages = document.createElement("img");
        popupimages.src= img.src;
        popupBox.appendChild(popupimages);
        document.body.appendChild(popupBox);
        let closebutton = document.createElement("span");
        let colseText = document.createTextNode("X");
        closebutton.appendChild(colseText);
        closebutton.className = "close-button";
        popupBox.appendChild(closebutton);
    })
})
document.addEventListener("click", function(e) {
    if(e.target.classList == 'close-button'){
        e.target.parentElement.remove();
        document.querySelector(".popup-overlay").remove();
    }
});
 // start comment part 
 const submitbtn = document.querySelector(".submit_btn");
 const username = document.querySelector('#your');
 const comment = document.querySelector('#comment');
 const likeicon = document.querySelector('.heart_icon');
 const countLikes = document.querySelector('.count_like');
 const commentsCont = document.querySelector('.comments_container');
 likeicon.addEventListener("click", likePage)
 submitbtn.addEventListener("click", submitFeedback)
 feedbackArr = []
 let positiveFeedback = false
 let likesCount = 0
 function submitFeedback(e){
    const userForm = username.value
    const commentForm = comment.value
    if(userForm && commentForm){
    newfeedback = {
        "id": Math.floor((Math.random()* 1000)+1),
        "userName" : userForm,
        "userComment" : commentForm,
        "typeOfFeedback" : positiveFeedback,
    }
    feedbackArr.push(newfeedback);
    if(positiveFeedback == true){
        addLikes()
    }
 resetForm()
 addFeddback(newfeedback)
}
e.preventDefault()

 }
 function likePage(){
    likeicon.classList.toggle("liked")
    if(likeicon.classList.contains("liked")){
        likeicon.innerHTML = `<i class="fas fa-heart"></i>`
        positiveFeedback = true
    }else{
        likeicon.innerHTML = `<i class="far fa-heart"></i>`
     positiveFeedback = false
    }
 }
 function addLikes(){
    likesCount ++
    countLikes.innerHTML = likesCount
 }
function resetForm(){
    username.value = ''
    comment.value = ''
    likeicon.innerHTML =  `<i class="far fa-heart"></i>`
    positiveFeedback = false;
}
function addFeddback(items){
    const letter = (items.userName).charAt(0)
    const div = document.createElement('div')
    div.classList ='comment_card'
    div.id = items.id
   var loi = div.innerHTML = `<div class="comment-card">
    <div class="pic">
        ${letter}
    </div>
    <div class="comment-info">
        <span class="nickname">
            ${items.userName}
        </span>
        <p class="comment">
        ${items.userComment}
        </p>
        <div class="comment_button">
            <div class="heart-icons">
            ${items.typeOfFeedback ? `<i class="fas fa-heart"></i>` : `<i class="far fa-heart"></i>` }    
            </div>
            <button>
                reply
            </button>
        </div>
</div>
</div>`
localStorage.setItem("user",items.userName );
commentsCont.insertAdjacentElement('beforeend', div)
}
var commonetLast= document.querySelector(".comments_container")
 document.querySelector(".hide").onclick = function(e){
    e.preventDefault()

    commonetLast.style.display = "none"
 }
 document.querySelector(".show").onclick = function(e){
    e.preventDefault()
    commonetLast.style.display = "block"

 }

 //hide placholder
 var yourInput =document.getElementById('your');
 var yourComment =document.getElementById('comment');
 yourInput.onfocus = function(){
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '');
 };
 yourInput.onblur = function(){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '');
 };
 yourComment.onfocus = function(){
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '');
 };
 yourComment.onblur = function(){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '');
 };
 var yourPhone =document.querySelector('.email');
 var yourEmail =document.querySelector('.phone');
 var yourName =document.querySelector('.name');
 var yourAdea =document.querySelector('.my-text');
 yourPhone.onfocus = function(){
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '');
 };
 yourPhone.onblur = function(){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '');
 };
 yourEmail.onfocus = function(){
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '');
 };
 yourEmail.onblur = function(){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '');
 };
 yourName.onfocus = function(){
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '');
 };
 yourName.onblur = function(){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '');
 };
 yourAdea.onfocus = function(){
    'use strict';
    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '');
 };
 yourAdea.onblur = function(){
    'use strict';
    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '');
 };
 