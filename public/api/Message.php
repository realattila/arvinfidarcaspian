<?php 
  class Message {
    // DB stuff
    private $conn;
    private $table = 'messages';

    // messages Properties
    public $id;
    public $name;
    public $email;
    public $subject;
    public $message;
    public $author;
    public $created_at;

    // Constructor with DB
    public function __construct($db) {
      $this->conn = $db;
    }

    // Get messages
    public function read() {
      // Create query
      $query = 'SELECT * FROM ' . $this->table ;
      
      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Execute query
      $stmt->execute();

      return $stmt;
    }


    // Create messages
    public function create() {
          // Create query
          $query = 'INSERT INTO ' . $this->table . ' SET name = :name, email = :email, subject = :subject, message = :message';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->name = htmlspecialchars(strip_tags($this->name));
          $this->email = htmlspecialchars(strip_tags($this->email));
          $this->subject = htmlspecialchars(strip_tags($this->subject));
          $this->message = htmlspecialchars(strip_tags($this->message));

          // Bind data
          $stmt->bindParam(':name', $this->name);
          $stmt->bindParam(':email', $this->email);
          $stmt->bindParam(':subject', $this->subject);
          $stmt->bindParam(':message', $this->message);

          // Execute query
          if($stmt->execute()) {
            return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
    }


  }