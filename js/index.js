$(document).ready(function(){

    $(".tabcontent .tabbtn a").on('click',function(e){
        
        e.preventDefault();
        const targetTab = $(this).attr('href'); // #w_cont , #m_cont
        console.log(targetTab)
        $(targetTab).addClass('d-block').siblings().removeClass('d-block');
        
        
        $(this).parent('li').addClass('on').siblings().removeClass('on');
        


    })
})