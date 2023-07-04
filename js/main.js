let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');


// let topic;
let intro = ["Hello, I am AI Chatbot", "Hi, I am Chatbot", "Hello, My name is AI Chatbot"];
let help = ["How may i assist you?", "How can i help you?", "What i can do for you?"];
let greetings = ["i am fine, what about you", "i am good, what about you"];
let hobbies = ["i love to talk with humans", "i like to make friends like you"];
let thank = ["Most welcome", "Not an issue", "Its my pleasure", "Mention not"];
let closing = ['Ok bye-bye', 'As you wish, bye take-care', 'Bye-bye, see you soon..']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg) {
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg) {
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, I can't understand try again";
    if (message.includes('hi')) {
        let finalresult = `Hello, how can I help you.`;
        speech.text = finalresult;
    }
    if (message.includes('hello')) {
        let finalresult = `Hi, how can I help you.`;
        speech.text = finalresult;
    }
    if (message.includes('how are you' || 'how are you doing today')) {
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if (message.includes('I am fine')) {
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if (message.includes('tell me something about you' || 'tell me something about yourself')) {
        let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = finalresult;
    }
    if (message.includes('what you can do' || 'what you can do for me')) {
        let finalresult = `I can tell you how to purchase product from e-marketplace`;
        speech.text = finalresult;
    }
    if (message.includes('give me some example' || 'give me some example')) {
        let finalresult = `Try "Stepbystep"`;
        speech.text = finalresult;
    }
    if (message.includes('what are the categories you have')) {
        let finalresult = `You may refer to the 'How to use' section.`;
        speech.text = finalresult;
    }
    if (message.includes('thank you' || 'thank you so much')) {
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if (message.includes('ok bye' || 'bye')) {
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }

    //step by step
    if (message.includes('step by step')) {
        let finalresult = `Here are the steps`;
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = `Step 1 : Search for a product using Google shopping.`;
        speech.text = finalresult_1;
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_2 = `Step 2 : Find an item you like using Google shopping. If you click on one of the suggested items you will see product details as well as details of the sellers available..`;
        speech.text = finalresult_2;
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_3 = `Step 3 : Search via Google.  Choose one of these websites and click on the link. `;
        speech.text = finalresult_3;
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_4 = `Step 4 : Searching for and buying a product from a website. `;
        speech.text = finalresult_4;
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_5 = `Step 5 : Adding a product to your basket. `;
        speech.text = finalresult_5;
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_6 = `Step 6 : Checkout and pay. `;
        speech.text = finalresult_6;
    }
    if (message.includes('steps')) {
        let finalresult = `Here are the steps`;
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = `First : Search for a product using Google shopping.`;
        speech.text = finalresult_1;
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_2 = `Second : Find an item you like using Google shopping. If you click on one of the suggested items you will see product details as well as details of the sellers available..`;
        speech.text = finalresult_2;
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_3 = `Third : Search via Google.  Choose one of these websites and click on the link. `;
        speech.text = finalresult_3;
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_4 = `Forth : Searching for and buying a product from a website. `;
        speech.text = finalresult_4;
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_5 = `Fifth : Adding a product to your basket. `;
        speech.text = finalresult_5;
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_6 = `Sixth : Checkout and pay. `;
        speech.text = finalresult_6;
    }

    //how to search for a product
    if (message.includes('how to search product')) {
        let finalresult = `Type the name of the item you want to buy into the search box of a search engine such as Google, for example, Printer and click Search or press enter.`;
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = `You will see a range of websites, such as Amazon. You can also ask only for results available in shops near to you by clicking on 'Available nearby'.
        Shopping option on Google itself, this will give you items available based on product reviews and price. `;
        speech.text = finalresult_1;
    }
    if (message.includes('search')) {
        let finalresult = `First, type the name of the item you want to buy into the search box of a search engine such as Google, for example, Printer and click Search or press enter.`;
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = `Then,you will see a range of websites, such as Amazon. You can also ask only for results available in shops near to you by clicking on 'Available nearby'.
        Shopping option on Google itself, this will give you items available based on product reviews and price. `;
        speech.text = finalresult_1;
    }
    if (message.includes('search product')) {
        let finalresult = `Type the name of the item you want to buy into the search box of a search engine such as Google, for example, Printer and press enter.`;
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = `You will see a range of websites, such as Shopee. You can also ask only for results available in shops near to you by clicking on 'Available nearby'.
        Shopping option on Google itself, this will give you items available based on product reviews and price. `;
        speech.text = finalresult_1;
    }

    //how to add a product to cart
    if (message.includes('how to add product to cart')) {
        let finalresult = `There are two boxes next to the image one to choose the quantity that you want to buy and one to choose the colour that you want. Then, click on ADD TO CART.`;
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = `By click ADD TO CART, the details of this item will be save until you are ready to buy it. `;
        speech.text = finalresult_1;

    }
    if (message.includes('add product to cart')) {
        let finalresult = `You can see two boxes next to the image one to choose the quantity that you want to buy and one to choose the colour that you want. Then, click on ADD TO CART.`;
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = `By click ADD TO CART, the details of this item will be save. `;
        speech.text = finalresult_1;
    }
    if (message.includes('add product')) {
        let finalresult = `You will see two boxes next to the image one to choose the quantity that you want to buy and one to choose the colour that you want. Then, click on ADD TO CART.`;
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = `Click ADD TO CART, the details of this item will be save. `;
        speech.text = finalresult_1;
    }
    if (message.includes('to cart')) {
        let finalresult = `Two boxes next to the image, one to choose the quantity that you want to buy and one to choose the colour that you want. Then, click on ADD TO CART.`;
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = `By click ADD TO CART, the details of this item will be save until you are ready to buy it. `;
        speech.text = finalresult_1;
    }

    //how to checkout and pay 
    if (message.includes('how to pay')) {
        let finalresult = `To pay for your item click on the Checkout button. Then, finalise the checking out details.`;
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = `You need to complete all the fill in boxes such as your email, name and address.Enter your credit or debit card details and any other information required. `;
        speech.text = finalresult_1;
    }
    if (message.includes('how to check out')) {
        let finalresult = `Before to pay for your item then you need to click on the Checkout button.`;
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = `Then, you need to complete all the boxes such as your email, name and address.Enter your credit or debit card details and any other information required. `;
        speech.text = finalresult_1;
    }
    if (message.includes('check out')) {
        let finalresult = `Click on the Checkout button to proceed the payment.`;
        speech.text = finalresult;
        window.speechSynthesis.speak(speech);
        chatareamain.appendChild(showchatbotmsg(speech.text));
        let finalresult_1 = `After that, you need to fill in your information such as your email, name and address.Enter your credit or debit card details and any other information required. `;
        speech.text = finalresult_1;
    }

    //how to create an account
    if (message.includes(' how to create an account')) {
        let finalresult = `Click Create An Account button and fill in the details.`;
        speech.text = finalresult;
    }
    if (message.includes('create an account')) {
        let finalresult = `You see 'Create An Account' button then click that button and you will need to fill in the details.`;
        speech.text = finalresult;
    }

    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult = function(e) {
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    // let res = transcript.split(" ");
    // topic = res[0];
    // console.log(topic);
    chatbotvoice(transcript);
    console.log(transcript);
}

recognition.onend = function() {
    mic.style.background = "#ff3b3b";
}

mic.addEventListener("click", () => {
    mic.style.background = '#39c81f';
    recognition.start();
    console.log("Activated");
});