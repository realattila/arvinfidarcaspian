<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once 'Database.php';
  include_once 'Message.php';


  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $Message = new Message($db);
  // send email variables
  $to = 'avand.fidar.caspian@gmail.com';
  $subject = 'پیام از طریق فرم تماس با ما آوند فیدار کاسپین';
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";


  $emailMessage = '<html lang="fa">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div style="max-width: 500px; width: 100%; margin: 0 auto; background-color: #f6f6f6; padding: 12px; border-radius: 4px">
      <h1 style="text-align: center; margin: 0">شما یک پیام دارید</h1>
      <div style="text-align: right; padding: 12px 0">
        <h3 style="margin-bottom: 8px; margin: 0">نام</h3>
        <p style="margin: 0">';


  $emailMessage .= $_POST['name'];
  $emailMessage .= '</p>
  </div>
  <div style="text-align: right; padding: 12px 0">
    <h3 style="margin-bottom: 8px; margin: 0">ایمیل</h3>
    <p style="margin: 0">';
  $emailMessage .=  $_POST['email'] ;
  $emailMessage .= '</p>
  </div>
  <div style="text-align: right; padding: 12px 0">
    <h3 style="margin-bottom: 8px; margin: 0">موضوع</h3>
    <p style="margin: 0">';
  $emailMessage .= $_POST['subject'] ;
  $emailMessage .= '</p>
  </div>
  <div style="text-align: right; padding: 12px 0">
    <h3 style="margin-bottom: 8px; margin: 0">متن پیام</h3>
    <p style="margin: 0">';
  $emailMessage .= $_POST['message'] ;
  $emailMessage .= '</p>
  </div>
</div>
</body>
</html>
';





  if(!empty($_POST) && $_POST['name'] && $_POST['email'] && $_POST['subject'] && $_POST['message'] ) {
    $Message->name = utf8_encode($_POST['name']);
    $Message->email = utf8_encode($_POST['email']) ;
    $Message->subject =  utf8_encode($_POST['subject']);
    $Message->message = utf8_encode($_POST['message']);

    // this is send mail
     mail( $to, $subject, $emailMessage, $headers );

    if($Message->create()) {

      echo json_encode(
        array('message' => 'message Created')
      );
    }
    else {
      echo json_encode(
        array('message' => 'message Not Created')
      );
    }


  }

  else {
    echo json_encode(
      array('message' => 'message Not Created')
    );
  }

