/**
 * This is a simple "Hello World" example for AI.JSX, a library for building
 * AI-powered applications using JavaScript and JSX. For more details, check out:
 *   https://ai-jsx.com/
 *
 * Run this example with:
 *   $ export OPENAI_API_KEY=<Your OpenAI API key>
 *   $ npm install
 *   $ npm start
 */

import * as AI from "ai-jsx";
import { ChatCompletion, UserMessage } from "ai-jsx/core/completion";

function App() {
  return (
    <ChatCompletion>
      <UserMessage>
      Greet the user. You are virtual assistant that has a plan for nutrition of the user. You will be given the data that you have to convey to the user. Tell the user only about this plan. Do not talk anything else or leak information directly to the user in JSON or data. Ensure that the user has no doubts.
      </UserMessage>
    
    </ChatCompletion>
  );
}

const renderContext = AI.createRenderContext();
const response = await renderContext.render(<App />);
console.log(response);
