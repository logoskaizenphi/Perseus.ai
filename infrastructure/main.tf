resource "aws_lambda_function" "writetodynamodb2" {
  function_name = "writetodynamodb2"
  # create file ../guestbook.zip
  filename         = "../guestbook.zip"

  source_code_hash = "${base64sha256(file("../guestbook.zip"))}"
  # The bucket name as created earlier with "aws s3api create-bucket"
 # s3_bucket = "write-to-dynamodb"
 # s3_key    = "guestbook"

  # "main" is the filename within the zip file (main.js) and "handler"
  # is the name of the property under which the handler function was
  # exported in that file.
  handler = "main.handler"
  runtime = "nodejs8.10"

  
  role = "arn:aws:iam::721804932440:role/write-to-dynamodb_lambda_function"
}

