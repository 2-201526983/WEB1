function onCbChange(login_ch) {
    var b = document.getElementById(login_ch).checked;

    var confirmBox = confirm('로그인을 유지하시겠습니까?');

    if (confirmBox == true) {
        if (b) {
            document.getElementById('login_ch').checked = true;
        } else {
            document.getElementById('login_ch').checked = false;
        }
    } else {
        document.getElementById('login_ch').checked = false;
        // document.getElementById(login_ch).checked = !b;
    };

}
 
