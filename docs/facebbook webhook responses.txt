{"fulfillmentText": "this text is displayed visually",
                             "payload": {
                               //example facebook messenger response, you can only have one response type (quick reply, audio, card) per facebook payload
                                "facebook": {
   
    //simple facebook text response example                            
   //"text": "Hello, perseus you fucking epic stud you!"
   //,
    
    //simpe facebook audio response example
    // "attachment": {
    //   "type": "audio",
    //   "payload": {
    //     "url": "https://ia802508.us.archive.org/5/items/testmp3testfile/mpthreetest.mp3"
    //   }
    // }


    //simple facebook quick reply text w/color example
     "text": "What do you think?",
         "quick_replies": [
            {
               "content_type": "text",
               "title": "Short",
               "payload": "red"
            },
            {
               "content_type": "text",
               "title": "Tall",
               "payload": "green"
            }
         ]

          //end facebook text quick reply example

    }
  }}