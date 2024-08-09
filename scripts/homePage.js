document.querySelector('.getRatesButton').addEventListener('click',()=>{
    openChooseCityWidget()
})

function openChooseCityWidget(){
    document.querySelector('.heroMain').classList.add('heroSectionHide');
    document.querySelector('.chooseCityOverlayMain').classList.add('snipOverlay');
    document.querySelector('.chooseCityWidget').style.display='flex'
    document.querySelector('.chooseCityOverlay').style.display='block'
}