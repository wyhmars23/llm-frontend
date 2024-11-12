import { CozeAPI, COZE_COM_BASE_URL, ChatEventType, RoleType } from '@coze/api';

// Initialize client with your Personal Access Token
const client = new CozeAPI({
  token: 'your_pat_token', // Get your PAT from https://www.coze.com/open/oauth/pats
  baseURL: COZE_COM_BASE_URL,
});

// Simple chat example

async function streamChat() {
  const stream = await client.chat.stream({
    bot_id: 'your_bot_id',
    additional_messages: [{
      role: RoleType.User,
      content: 'Hello!',
      content_type: 'text',
    }],
  });

  for await (const part of stream) {
    if (part.event === ChatEventType.CONVERSATION_MESSAGE_DELTA) {
      process.stdout.write(part.data.content); // Real-time response
    }
  }
}

export default streamChat;