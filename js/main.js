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

});