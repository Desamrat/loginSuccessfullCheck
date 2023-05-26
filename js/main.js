"user strict"

function memberData(memberId, memberAge) {
    return funName(memberId , memberAge) ;
}
function funName(memberId , memberAge) {
    if (memberId == "1234" && memberAge >= 18) {
        return true ;
    } ;
    return false ;
}
let memberLogin = memberData("1234" , 18);

    if (memberLogin) {
        alert("Login Successfully!")
    } else {
        alert("Login failed!")
    } ;
