<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $device = $_POST["device"];
    $service = $_POST["service"];
    $description = isset($_POST["description"]) ? $_POST["description"] : "";

    // Compose the email message
    $subject = "New Form Submission";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Device: $device\n";
    $message .= "Service Needed: $service\n";
    $message .= "Description: $description\n";

    // Set up the email headers
    $headers = "From: webmaster@example.com"; // Set your own email address

    // Send the email
    mail("anthonynelson059@gmail.com", $subject, $message, $headers);

    // Redirect back to the form or a thank you page
    header("Location: /thank_you.html");
    exit();
}
?>
