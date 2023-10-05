

window.onload = function() {
    

   

        let buttonForChangeLanguage = document.getElementById('buttonLanguageChangerEng')
        buttonForChangeLanguage.addEventListener("click", () => {
            changeLanguageToUkr()
            console.log('you have clicked the mouse on EngButton')
        })
    
        function changeLanguageToUkr() {
            let engLanguage = document.getElementById('Eng')
            let ukrLanguage = document.getElementById('Ukr')
            engLanguage.style.display = 'none'
            ukrLanguage.style.display = 'flex'
            
        }
        
        let buttonForChangeLanguageToEng = document.getElementById('buttonLanguageChangerUkr')
        buttonForChangeLanguageToEng.addEventListener("click", () => {
            changeLanguageToEng()
            console.log('you have clicked the mouse on UkrButton')
        })

        function changeLanguageToEng() {
            let engLanguage = document.getElementById('Eng')
            let ukrLanguage = document.getElementById('Ukr')
            engLanguage.style.display = 'flex'
            ukrLanguage.style.display = 'none'
            
        }

        console.log('page are fully loaded')
    
        
        

    
    
}


