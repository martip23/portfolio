<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $email_to = "patrickmartinez77@gmail.com";
    $email_subject = "Email from portfolio";

    $first_name = $_POST['firstname']; // required
    $last_name = $_POST['lastname']; // required
    $email_from = $_POST['email']; // required
    $telephone = $_POST['phone']; // not required
    $comments = $_POST['message']; // required

    $email_message = "For details below.\n\n";

    $email_message .= "First Name: ".$first_name."\n";
    $email_message .= "Last Name: ".$last_name."\n";
    $email_message .= "Email: ".$email_from."\n";
    $email_message .= "Telephone: ".$telephone."\n";
    $email_message .= "Comments: ".$comments."\n";

    mail($email_to, $email_subject, $email_message);
?>

Thank you for reaching out! I will be in touch with you very soon.<br><br>
You will now be redirected to the homepage.

<?php
header ("refresh:7;url=../index.html")
?>
