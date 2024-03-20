/*
/// -------------------------------------------------------------------------------------------------------
/// :: Brinquedo e Mania - Developed by Agência Star | 10/01/2022 - 18:30.
/// :: WARNING: This computer program is protected by copyright law and international treaties.
/// :: Unauthorized duplication or distribution of this program, or any portion of it, may result
/// :: in severe civil or criminal penalties, and will be prosecuted to the maximum extent possible
/// :: under the law.
/// ::
/// :: v.1.0 - 10/01/2022 - Implementation.
/// -------------------------------------------------------------------------------------------------------
*/

function tirarOffset() {
    if (x.matches) {
        $('.container .col-xl-3').removeClass('offset-1');
        $('.container .col-xl-4').removeClass('offset-1');
    }
    else {
        // do nothing
    }
}

let x = window.matchMedia("(max-width:768px)")
tirarOffset(x)