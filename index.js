let ip;
$.getJSON("https://api.ipify.org?format=json", function (data) {
    ip = data.ip;
})



const submitData = () => {



  let email = $("#email").val();
  let comment = $("#comment").val();

  if (!email.match(/^\w+@\w+.\w+$/g)) {
    $("#label_email").css("display", "block");
    return;
    
  }else {
    $("#label_email").css("display", "none");
  }
  if (comment.trim() === '') {
    $("#label_comment").css("display", "block");
    return;
    
  }else {
    $("#label_comment").css("display", "none");
  }

  $.ajax({
      type: 'GET',
      url: 'index.php',
      data: {email: email, comment:comment, ip:ip},
      success: function(data) { 
              window.location.href = `index.php?email=${email}&comment=${comment}&ip=${ip}`
      },
      error: function(xhr, ajaxOptions, thrownerror) { }
  });
}