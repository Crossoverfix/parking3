$(document).ready(function () {
    var $languageSelect = $("#nav-bar__language");
    var $languageSelectDropItem = $('#header__nav-bar .navigation-bar__nav__language__drop a');
    $languageSelect.on('click',function () {
        showLanguageDrop();
        return false;
    });
    $languageSelectDropItem.on('click',function () {
        selectLanguage(this);
    });
    function showLanguageDrop() {
        let $languageSelectActive = $('#header__nav-bar .navigation-bar__nav__language__active');
        let $languageSelectDrop = $('#header__nav-bar .navigation-bar__nav__language__drop');
        $languageSelectDrop.css('display','flex');
        $languageSelect.off('click');
        $languageSelect.on('click',function () {
            hideLanguageDrop();
            return false;
        });
    }
    function hideLanguageDrop() {
        let $languageSelectDrop = $('#header__nav-bar .navigation-bar__nav__language__drop');
        $languageSelectDrop.css('display','none');
        $languageSelect.on('click',function () {
            showLanguageDrop();
            return false;
        });
    }
    function selectLanguage($selectLang) {
        $languageSelect.empty();
        $($selectLang).find('picture').clone().appendTo($languageSelect);
        hideLanguageDrop();
        return false;
    }
    var $calPlace = $('#calendar-place');
    var $calFrom = $('#calendar-from');
    var $calUntil = $('#calendar-until');
    var $calSubmit = $('#calendar-submit');
    $calPlace.on('click',function () {
        alert('eventSelectPlace line=39');
        return false;
    });
    $calFrom.on('click',function () {
        alert('eventSelectFrom line=43');
        return false;
    });
    $calUntil.on('click',function () {
        alert('eventSelectUntil line=47');
        return false;
    });
    $calSubmit.on('click',function () {
        alert('eventSelectSubmit line=51');
        return false;
    });
    var $navBarCollapse = $('#collapse__nav-bar');
    $navBarCollapse.on('click',function () {
        showMobilMenu();
        return false;
    })
    function showMobilMenu() {
        $('#header__nav-bar .navigation-bar__info').css('display','flex');
        $('#header__nav-bar .navigation-bar__nav').css('display','block');
        $navBarCollapse.off('click');
        $navBarCollapse.on('click',function () {
            hideMobilMenu();
            return false;
        })
    }
    function hideMobilMenu() {
        $('#header__nav-bar .navigation-bar__info').css('display','none');
        $('#header__nav-bar .navigation-bar__nav').css('display','none');
        $navBarCollapse.off('click');
        $navBarCollapse.on('click',function () {
            showMobilMenu();
            return false;
        })
    }
})
