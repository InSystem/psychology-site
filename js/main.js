//Подсветить активный таб
function makeTabActive ( tabLink, tabLinkActiveClass) {
    return function (event) {
        var elems = document.querySelectorAll(tabLink);
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove(tabLinkActiveClass);
        }
        this.classList.add(tabLinkActiveClass);
    }
}

//Показать-скрыть контент 
function showContent (contentTab) {
    return function (event) {
        var contentTabs = document.querySelectorAll(contentTab);
        for (var j = 0; j < contentTabs.length; j++) {
                contentTabs[j].style.display = 'none';
            }
        
         var showContentTab = this.getAttribute('href').substr(1); 
         document.getElementById(showContentTab).style.display = 'block';
    }
}

//Изменение размера окна ( для варианты, услуги)
    function sizeChange ( contentTab, tabLinkActiveClass ) {
        
        return function (mq) {
           var contents = document.querySelectorAll(contentTab);
        
        if (mq.matches) {
            for (var j = 0; j < contents.length; j++) {
                contents[j].style.display = 'none';
            }
            
           var contentId = document.querySelector(tabLinkActiveClass).getAttribute('href').substr(1);
           document.getElementById(contentId).style.display = 'block';
            
        } else {
            for (var j = 0; j < contents.length; j++) {
                contents[j].style.display = 'block';
            }               
        }  
        }
        
    }

//Изменение размера окна (для направления работы)
 function sizeChangeDirections() {

        if (mq.matches) {
            var tabsTarget = document.querySelectorAll('.tabs__target');
            for (var j = 0; j < tabsTarget.length; j++) {
                tabsTarget[j].style.display = 'none';
            }
        }
    }

//Переменные для функий open и close 
var overlay = document.getElementById("overlay");
var body = document.body;
var wrapperTargets = document.getElementById('tabs-content');
var targets = document.querySelectorAll('.tabs__target');



//Открыть окно
    function openModal() {
        var targetId = this.getAttribute('href').substr(1);
        var target = document.getElementById(targetId);
        var button = target.querySelector('.btn-close');
        
        
        if (mq.matches) {
            overlay.style.display = "block";
            body.style.overflow = 'hidden';
            target.classList.add('tabs__target_fixed');
            target.style.display = 'block';
            button.style.display = 'block';
            wrapperTargets.classList.add('tabs__content_fixed');
        } 
        
        else {
            for (var j = 0; j < targets.length; j++) {
                targets[j].style.display = 'none';
            }
            target.style.display = 'block';
        }
    }

//Закрыть окно
    function closeModal() {
        var overlay = document.getElementById("overlay");
        var body = document.body;
        var modalWindow = this.parentNode;
        var wrapperTargets = document.getElementById('tabs-content');
        var targets = document.querySelectorAll('.tabs__target');
        
        overlay.style.display = "none";
        body.style.overflow = 'auto';
        modalWindow.classList.remove('tabs__target_fixed');
        wrapperTargets.classList.toggle('tabs__content_fixed');
        
        for (var j = 0; j < targets.length; j++) {
            targets[j].style.display = 'none';
        }
    }

  
//Направления работы - активация табов, открыть модальное окно, 
var tabLinks = document.querySelectorAll('.tabs__links a');
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener('click', makeTabActive('.tabs__links a','tab__link_active'));
        tabLinks[i].addEventListener('click', openModal);
    }

//Направления работы - закрыть модальное окно
var btns = document.querySelectorAll('.btn-close');
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', closeModal);
    };
    
//Направления работы - запуск sizeChangeDirections
var mq = window.matchMedia("(max-width: 801px)");
mq.addListener(sizeChangeDirections);
sizeChangeDirections(mq);


//Варианты работы - активация табов, показать контент, случай ресайза
var variantLinks = document.querySelectorAll('.varmenu');

    if (mq.matches) {
     for (var i = 0; i < variantLinks.length; i++) {
            variantLinks[i].addEventListener('click', makeTabActive('.varmenu','varmenu_active'));
            variantLinks[i].addEventListener('click', showContent('.variant__target'));
        }
        
    }

mq.addListener(sizeChange('.variant__target','.varmenu_active'));
sizeChange(mq);


//Услуги - активация табов, показать контент, случай ресайза
var serviecesLinks = document.querySelectorAll('.servieces__link');

    if (mq.matches) {
     for (var i = 0; i < serviecesLinks.length; i++) {
            serviecesLinks[i].addEventListener('click', makeTabActive('.servieces__link','servieces__link_active'));
            serviecesLinks[i].addEventListener('click', showContent('.servieces__target'));
        }
        
    };

mq.addListener(sizeChange('.servieces__target','.servieces__link_active'));
sizeChange(mq);


//Показать, скрыть бургер меню 
    function unChecked() {

        var mq = window.matchMedia("(max-width: 769px)");
        if (mq.matches) {
            var burgerInput = document.getElementById('hamburger__toggle');
            burgerInput.checked = false;
        }
    }


        var menuLinks = document.querySelectorAll('.menu a');

        for (var i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', unChecked);
        }



//Отзывы - активация табов 
var reviewsLinks = document.querySelectorAll('.carousel__indicator');
    for (var i = 0; i < reviewsLinks.length; i++) {
        reviewsLinks[i].addEventListener('click', makeTabActive('.carousel__indicator','carousel__indicator_dark'));
    }

//Скролл-эффекты
    function myFunction() {
        if (document.body.scrollTop > 330 || document.documentElement.scrollTop > 330) {
//            document.body.className = "body_white";
            document.querySelector('.main').classList.add("body_white");
        } else {
              document.querySelector('.main').classList.remove("body_white");
//            document.body.className = "body_green";
        }

        var mq = window.matchMedia("(max-width: 769px)");
        if (mq.matches) {
            if (document.body.scrollTop > 330 || document.documentElement.scrollTop > 330) {
                var burgerInput = document.getElementById('hamburger__toggle');
                burgerInput.checked = false;
            }
        }
    }

    window.onscroll = function () {
        myFunction()
    };

//Отправка формы
(function () {
        document.addEventListener("DOMContentLoaded", function(){
        	document.forms["contact-form"].addEventListener("submit", postData);
        });
        
        function postData(formsubmission){
        
        	var userName = encodeURIComponent(document.getElementById("username").value);
        	var email = encodeURIComponent(document.getElementById("email-address").value);
        	var phone = encodeURIComponent(document.getElementById("phone-number").value);
            var day = encodeURIComponent(document.getElementById("datepicker").value);
        	var message = encodeURIComponent(document.getElementById("message").value);
        
        	// Checks if fields are filled-in or not, returns response "<p>Please enter your details.</p>" if not.
        	if(userName == "" || phone == ""){
        		document.getElementById("response").innerHTML = "<p>Пожалуйста, введите ваши данные</p>";
        		return;
        	}
        
        	// Parameters to send to PHP script. The bits in the "quotes" are the POST indexes to be sent to the PHP script.
        	var params = "username=" + userName + "&email=" + email + "&phone=" + phone + "&day=" + day  + "&message=" + message;
        
        	var http = new XMLHttpRequest();
        	http.open("POST","send.php",true);
        
        	// Set headers
        	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        	http.onreadystatechange = function(){
        		if(http.readyState == 4 && http.status == 200){
                    if (http.responseText ==='Error') {
                    document.getElementById("response").className('error');
                } else if (http.responseText ==='Success'){
                    document.getElementById("response").className('sucsses');
        		}
        	}
        	http.send(params);
        	formsubmission.preventDefault();
        }
}
})();






