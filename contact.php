<?php
// variable setting
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$message = $_POST['message'];

// check input fields
if (isset($_POST['name'] && (isset($_POST['submit']
                                       {
                                           echo "Please fill all the fields";
                                       }
                                       else
                                       {
                                           mail("mitalignvr3@gmail.com", $message , "From: $name $company $phone <$email>");
                                           echo "<script type='text/javascript'>alert('your message has been sent successfully');
                                           window.history.log(-1);
                                           </script>";
                                       }
?>