

window.onload = function() {
    
        const engLanguage = document.getElementById('Eng')
        const ukrLanguage = document.getElementById('Ukr')
   

        let buttonForChangeLanguage = document.getElementById('buttonLanguageChangerEng')
        buttonForChangeLanguage.addEventListener("click", () => {
            changeLanguageToUkr()
            console.log('you have clicked the mouse on EngButton')
        })
        
        

        function changeLanguageToUkr() {
            engLanguage.style.display = 'none'
            ukrLanguage.style.display = 'flex'
            imageOfFaceUkr.classList.remove('scaled');
            imageOfFaceUkr.classList.remove('unscaled');
            imageOfFace.classList.remove('unscaled');
            imageOfFace.classList.remove('scaled');
            
        }
        
        let buttonForChangeLanguageToEng = document.getElementById('buttonLanguageChangerUkr')
        buttonForChangeLanguageToEng.addEventListener("click", () => {
            changeLanguageToEng()
            console.log('you have clicked the mouse on UkrButton')
        })

            

        function changeLanguageToEng() {
            
            engLanguage.style.display = 'flex'
            ukrLanguage.style.display = 'none'
            console.log((ukrLanguage.style.display == 'none') + ' check is style none')
            imageOfFaceUkr.classList.remove('scaled');
            imageOfFaceUkr.classList.remove('unscaled');
            imageOfFace.classList.remove('unscaled');
            imageOfFace.classList.remove('scaled');
            
        }



        const elementsByClass = document.getElementsByClassName('photo')

        console.log(elementsByClass)
    
        const imageOfFace = document.getElementsByClassName("photo")[0]

        console.log(imageOfFace)

        imageOfFace.addEventListener("click", () => {
            if (imageOfFace.classList.contains('scaled')) {
                imageOfFace.classList.remove('scaled');
                imageOfFace.classList.add('unscaled')
            } else  {
                imageOfFace.classList.remove('unscaled');
                imageOfFace.classList.add('scaled')
            }
        })

        imageOfFace.addEventListener("click", () => {
            console.log('you have clicked on image')
        } )

        const imageOfFaceUkr = document.getElementsByClassName("photo")[1]

        console.log(imageOfFaceUkr)

        imageOfFaceUkr.addEventListener("click", () => {
            if (imageOfFaceUkr.classList.contains('scaled')) {
                imageOfFaceUkr.classList.remove('scaled');
                imageOfFaceUkr.classList.add('unscaled')
            } else  {
                imageOfFaceUkr.classList.remove('unscaled');
                imageOfFaceUkr.classList.add('scaled')
            }
        })

        // reset photo properties 

       

                
            
        

        
        console.log(ukrLanguage)
        imageOfFaceUkr.addEventListener("click", () => {
            console.log('you have clicked on image')
        } )
    

        console.log('page are fully loaded')
    
    
}


