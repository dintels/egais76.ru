$(function () {

});

var PozvonimcomWidgetConfig = {
    ready: function () {
        $('.callback').click(DoCallback);
    }
};

function DoCallback(event) {
    event.preventDefault();
    if (PozvonimcomWidget) {
        PozvonimcomWidget.api.show();
    }
    return false;
}


var _FDFeedBack = {
    formId: 37973,
    text: 'Заказать',
    background: '#e74c3c',
    color: '#ffffff',
    fontSize: '14px',
    borderRadius: 5,
    buttonSide: 'right',
    buttonAlign: 'center',
    popup: {
        hideCloseBtn: false,
        host: 'formdesigner.ru',
        overlay: {
            background: '#000000',
            opacity: 0.1
        }
    }
};
(function () {
    var fd = document.createElement('script'); fd.type = 'text/javascript'; fd.async = true;
    fd.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//formdesigner.ru/js/widgets/feedback.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(fd, s);
})();


function DoOrder() {
    FDPopup.open(37973,
        { 'hideCloseBtn': false, 
        'host': 'formdesigner.ru', 
        'overlay': { 'background': '#000000', 'opacity': 0.1 } }); 
    return false;
}