

var btn =document.getElementById('btn');
var output = document.getElementById('output');
var quote = [
       ' "The best way to predict the future is to create it." _Peter Drucker',
       '"Success is not the key to happiness. Happiness is the key to success. " _Albert Schweitzer',
       '"Your time is limited, do not waste it living someone elses life. "_Steve Jobs',
        '"The only way to do great work is to love what you do."_ Steve Jobs',
        '"If you can dream it, you can do it. "_Walt Disney" ',
       '"Be yourself; everyone else is already taken." _Oscar Wilde',
       '"I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best. "_ Marilyn Monroe',
       '"So many books, so little time. " Frank Zappa',
       '"A room without books is like a body without a soul. "_ Marcus Tullius Cicero',
       '"Be who you are and say what you feel, because those who mind do not matter, and those who matter do not mind."_ Bernard M. Baruch',
       '"You only live once, but if you do it right, once is enough."_ Mae West'
          ];
        btn.addEventListener('click',function(){
            var randomQuote = quote[Math.floor(Math.random() * quote.length)];
            output.innerHTML=randomQuote;
        });
    
