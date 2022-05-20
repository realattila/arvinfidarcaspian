<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');



  // send email Variable
  $to = 'avand.fidar.caspian@gmail.com';  

  $subject = 'سفارش جدید از طریق آوند فیدار کاسپین';
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
      <h1 style="text-align: center; margin: 0">شما یک سفارش دارید</h1>
      <div style="text-align: right; padding: 12px 0">
        <h3 style="margin-bottom: 8px; margin: 0">نام</h3>
        <p style="margin: 0">';


  $emailMessage .= $_POST['name'];
  $emailMessage .= '</p>
  </div>
  <div style="text-align: right; padding: 12px 0">
    <h3 style="margin-bottom: 8px; margin: 0">شماره تلفن</h3>
    <p style="margin: 0">';
  $emailMessage .=  $_POST['number'] ;
  $emailMessage .= '</p>
  </div>
  <div style="text-align: right; padding: 12px 0">
    <h3 style="margin-bottom: 8px; margin: 0">ایمیل</h3>
    <p style="margin: 0">';
  $emailMessage .= $_POST['email'] ;
  $emailMessage .= '</p>
  </div>
  <div style="text-align: right; padding: 12px 0">
    <h3 style="margin-bottom: 8px; margin: 0">توضیحات اضافی</h3>
    <p style="margin: 0">';
  $emailMessage .= $_POST['description'] ;
  $emailMessage .= '</p>
  </div>
  <div style="text-align: right; padding: 12px 0">
    <h3 style="margin-bottom: 8px; margin: 0">اجناس سفارش داده شده</h3>';


 
if(!empty($_POST['product0'])) {
  $emailMessage .='<p style="margin: 0">نام کالا : ';
  $emailMessage .= $_POST['product0'];
  $emailMessage .= '<span>&nbsp; تعداد سفارش داده شده: ';
  $emailMessage .=$_POST['product0amount'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد در بسته: ';
  $emailMessage .=$_POST['product0number'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد کل سفارش داده شده: ';
  $emailMessage .=intval($_POST['product0number']) * intval($_POST['product0amount']);
  $emailMessage .= '</span>';
  $emailMessage .= '</p>';
}

if(!empty($_POST['product1'])) {
  $emailMessage .='<p style="margin: 0">نام کالا : ';
  $emailMessage .= $_POST['product1'];
  $emailMessage .= '<span>&nbsp; تعداد سفارش داده شده: ';
  $emailMessage .=$_POST['product1amount'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد در بسته: ';
  $emailMessage .=$_POST['product1number'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد کل سفارش داده شده: ';
  $emailMessage .=intval($_POST['product1number']) * intval($_POST['product1amount']);
  $emailMessage .= '</span>';
  $emailMessage .= '</p>';

}

if(!empty($_POST['product2'])) {
  $emailMessage .='<p style="margin: 0">نام کالا : ';
  $emailMessage .= $_POST['product2'];
  $emailMessage .= '<span>&nbsp; تعداد سفارش داده شده: ';
  $emailMessage .=$_POST['product2amount'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد در بسته: ';
  $emailMessage .=$_POST['product2number'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد کل سفارش داده شده: ';
  $emailMessage .=intval($_POST['product2number']) * intval($_POST['product2amount']);
  $emailMessage .= '</span>';
  $emailMessage .= '</p>';

}

if(!empty($_POST['product3'])) {
  $emailMessage .='<p style="margin: 0">نام کالا : ';
  $emailMessage .= $_POST['product3'];
  $emailMessage .= '<span>&nbsp; تعداد سفارش داده شده: ';
  $emailMessage .=$_POST['product3amount'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد در بسته: ';
  $emailMessage .=$_POST['product3number'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد کل سفارش داده شده: ';
  $emailMessage .=intval($_POST['product3number']) * intval($_POST['product3amount']);
  $emailMessage .= '</span>';
  $emailMessage .= '</p>';

}

if(!empty($_POST['product4'])) {
  $emailMessage .='<p style="margin: 0">نام کالا : ';
  $emailMessage .= $_POST['product4'];
  $emailMessage .= '<span>&nbsp; تعداد سفارش داده شده: ';
  $emailMessage .=$_POST['product4amount'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد در بسته: ';
  $emailMessage .=$_POST['product4number'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد کل سفارش داده شده: ';
  $emailMessage .=intval($_POST['product4number']) * intval($_POST['product4amount']);
  $emailMessage .= '</span>';
  $emailMessage .= '</p>';

}

if(!empty($_POST['product5'])) {
  $emailMessage .='<p style="margin: 0">نام کالا : ';
  $emailMessage .= $_POST['product5'];
  $emailMessage .= '<span>&nbsp; تعداد سفارش داده شده: ';
  $emailMessage .=$_POST['product5amount'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد در بسته: ';
  $emailMessage .=$_POST['product5number'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد کل سفارش داده شده: ';
  $emailMessage .=intval($_POST['product5number']) * intval($_POST['product5amount']);
  $emailMessage .= '</span>';
  $emailMessage .= '</p>';

}

if(!empty($_POST['product6'])) {
  $emailMessage .='<p style="margin: 0">نام کالا : ';
  $emailMessage .= $_POST['product6'];
  $emailMessage .= '<span>&nbsp; تعداد سفارش داده شده: ';
  $emailMessage .=$_POST['product6amount'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد در بسته: ';
  $emailMessage .=$_POST['product6number'];
  $emailMessage .= '</span>';
  $emailMessage .= '<span>&nbsp; تعداد کل سفارش داده شده: ';
  $emailMessage .=intval($_POST['product6number']) * intval($_POST['product6amount']);
  $emailMessage .= '</span>';
  $emailMessage .= '</p>';

}







$emailMessage .= 
'</div>
</div>
</body>
</html>
';

  // this is send mail


  if( mail( $to, $subject, $emailMessage, $headers )) {
        echo json_encode(
      array('message' => 'order Compelete')
    );
  }
  else {
    echo json_encode(
      array('message' => 'order Not Compelete')
    );
  }

