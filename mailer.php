<?php

/**
 * Send form's information to mail
 * By shellai_dev
 */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

date_default_timezone_set('Europe/Kiev');

header('Content-Type: application/json; charset=utf-8');

$requiredFields = ['email', 'phone', 'name'];   // All required fields
$errorMessages = [];

foreach($requiredFields as $field){
    if( !isset($_POST[$field]) ) array_push($errorMessages, "Field [{$field}] cannot be empty");
}
if( !empty($errorMessages) ) dieWithJson($errorMessages); // Die with error-messages

if ( filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) === false) dieWithJson('Bad email');
if( !preg_match('/^\+?\d{1,3}[\s.-]?\(?\d{2,3}\)?[\s.-]?\d{2,4}[\s.-]?\d{2,4}$/', $_POST['phone']) ) dieWithJson('Bad phone');
if( mb_strlen( trim($_POST['name']) ) < 1 ) dieWithJson('Bad name');

$comment = isset($_POST['comment']) ? trim($_POST['comment']) : '-';
$date = date('d.m.Y H:i:s');

// SMTP Settings
$settings = [
    'from_addr' => 'code.helfer@gmail.com', // SMTP account
    'from_name' => 'Code Helfer',   // Displayed title (FROM)
    'secret' => 'xtrcspuwvkeqksdw', // SMTP account's pass
    'to_addr' => 'info@code-helfer.de' // Email-receiver
];

$mail = new PHPMailer(true);
try {
    //Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = $settings['from_addr'];                     //SMTP username
    $mail->Password   = $settings['secret'];                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($settings['from_addr'], $settings['from_name']);
    $mail->addAddress($settings['to_addr']);               //Name is optional

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'New Lead';
    $mail->Body = "You have just received a new lead!<br><br>";
    $mail->Body .= "Fullname: <b>{$_POST['name']}</b><br>";
    $mail->Body .= "Email: <b>{$_POST['email']}</b><br>";
    $mail->Body .= "Phone: <b>{$_POST['phone']}</b><br>";
    $mail->Body .= "Comment: <b>{$comment}</b><br><br>";
    $mail->Body .= "Created at: <b>{$date}</b>";

    $mail->send();
    //dieWithJson('Message has been sent');
    header('Location: thanks.html');
} catch (Exception $e) {
    dieWithJson("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
}

//////////////////////////////////////////////////////////////////

function dieWithJson($message){
    echo json_encode($message, JSON_UNESCAPED_UNICODE);
    exit;
}

?>