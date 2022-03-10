$(function(){

    // common element form
    const $fields = $('.request-field'),
          $input = $fields.find('input'),
          $select = $fields.find('select'),
          $textarea = $fields.find('textarea');
    
    $input.add($select).add($textarea).click(function(){
        $fields.removeClass('active');
        $(this).parent().addClass('active');
    });

    // isotope filter
    const portFolio = document.querySelector('.portfolio');
    if(!portFolio === false) { // 필터 적용시킬 대상 확인 조건문
        const iso = new Isotope( portFolio, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
    
        const filtersElem = document.querySelector('.portfolio-filter');
        
        filtersElem.addEventListener( 'click', function( event ) {
            // only work with buttons
            if ( !matchesSelector( event.target, 'button' ) ) {
                return;
            }
            const filterValue = event.target.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });
        });
    }
});