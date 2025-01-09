
// const apikey = "AIzaSyD85MjY0mxC3PUxHbZ2_1HGPyRapwucGb0";
// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } from "@google/generative-ai";
  
//   const apiKey = process.env.GEMINI_API_KEY;

//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash-exp",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//   async function run(prompt) {
//     const chatSession = model.startChat({
//       generationConfig,
//       history: [
//       ],
//     });
  
//     const result = await chatSession.sendMessage(prompt);
//     console.log(result.response.text());
//   }

  
//    export default run;



import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  // **Correct way to define and use the API key:**
  const apiKey = "AIzaSyD85MjY0mxC3PUxHbZ2_1HGPyRapwucGb0"; 
  // OR, if using environment variables:
  // const apiKey = process.env.GEMINI_API_KEY; 
  
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    console.log(result.response.text());
    return response.text();
  }
  
 export default run;