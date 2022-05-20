<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once 'Database.php';
  include_once 'Message.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $Message = new Message($db);

  // Blog post query
  $result = $Message->read();
  // Get row count
  $num = $result->rowCount();

  // Check if any Messages
  if($num > 0) {
    // Post array
    $message_arr = array();
    // $posts_arr['data'] = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $message_item = array(
        'id' => $id,
        'name' => $name,
        'email' => $email,
        'subject' => $subject,
        'message' => $message,
      );

      // Push to "data"
      array_push($message_arr, $message_item);
      // array_push($message_arr['data'], $post_item);
    }

    // Turn to JSON & output
    echo json_encode($message_arr);

  } else {
    // No Posts
    echo json_encode(
      array('message' => 'No Posts Found')
    );
  }
