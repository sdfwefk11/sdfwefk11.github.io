const quotes = [
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "a",
        korean: "아",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "b",
        korean: "파",
    },
    {
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years.", 
        author: "c",
        korean: "타",
    },
    {
        quote: "Life is either a daring adventure or nothing at all. – Helen Keller", 
        author: "d",
        korean: "다",
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up", 
        author: "e",
        korean: "카",
    },
    {
        quote: "Life is either a great adventure or nothing.", 
        author: "f",
        korean: "자",
    },
    {
        quote: "If you spend too much time thinking about a thing, you’ll never get it done.", 
        author: "g",
        korean: "바",
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.", 
        author: "h",
        korean: "사",
    },
    {
        quote: "Despite the forecast, live like it’s spring.", 
        author: "i",
        korean: "마",
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.", 
        author: "j",
        korean: "나",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");
const koreanLanguege = document.querySelector("#quote span:last-child")


const todayQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todayQuote.quote;