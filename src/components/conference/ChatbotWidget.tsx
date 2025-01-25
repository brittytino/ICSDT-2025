import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Loader2, Bot, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Message = {
  type: "user" | "bot";
  content: string;
};

const predefinedResponses: Record<string, string> = {
  // Conference-specific responses
  "registration": "To register for ICSDT 2025, visit our registration portal. Early bird registration is available until June 1, 2025. The registration fee includes access to all conference sessions, materials, and refreshments.",
  "deadline": "The paper submission deadline is May 2, 2025. Early submissions are encouraged to allow time for thorough review.",
  "format": "Papers should follow the IEEE conference format. Full papers should be 12-15+ pages, and short papers 6-11 pages.",
  "venue": "The conference will be held at INTI UNIVERSITY, Nilai, Malaysia on August 6, 2025.",
  "topics": "Key topics include Computing, Education, Engineering, Innovation, Technology, Interdisciplinary approaches, Sustainability, and Business transformation.",
  "accommodation": "We have partnered with several hotels near the venue. Details about accommodation options will be provided upon registration.",
  "contact": "For any queries, please contact the conference secretariat at icsdt2025@example.com",
  "schedule": "The conference begins at 9:00 AM on August 6, 2025. A detailed schedule is available on our website.",
  
  // Casual conversation responses
  "hi": "Hello! 👋 I'm your ICSDT 2025 conference assistant. How can I help you today?",
  "hello": "Hi there! 😊 Welcome to ICSDT 2025. What would you like to know about the conference?",
  "hey": "Hey! 👋 Ready to help you with any conference-related questions!",
  "who are you": "I'm the ICSDT 2025 AI assistant, here to help you with conference information, registration, and paper submissions! 🤖",
  "what can you do": "I can help you with conference registration, paper submission guidelines, venue details, schedules, and much more! What would you like to know? 📚",
  "thanks": "You're welcome! 😊 Let me know if you need anything else!",
  "thank you": "You're welcome! 🌟 Feel free to ask more questions!",
  "bye": "Goodbye! Have a great day! 👋",
  "good morning": "Good morning! 🌅 How can I assist you with ICSDT 2025 today?",
  "good afternoon": "Good afternoon! ☀️ How may I help you?",
  "good evening": "Good evening! 🌙 How can I assist you?",
  "help": "I can help you with:\n1. Registration details\n2. Paper submission guidelines\n3. Conference schedule\n4. Venue information\n5. Accommodation\nWhat would you like to know about?",
  "when": "ICSDT 2025 will be held on August 6, 2025 at INTI UNIVERSITY, Nilai, Malaysia. 📅",
  "where": "The conference will take place at INTI UNIVERSITY, Nilai, Malaysia. 🏛️",
  "cost": "Early bird registration: $300\nRegular registration: $400\nStudent registration: $200\nAll fees include access to all sessions and materials. 💰",
  "paper format": "Papers should follow IEEE format:\n- Full papers: 12-15+ pages\n- Short papers: 6-11 pages\n📄 Need more details?",
};

const suggestedQuestions = [
  "When is the registration deadline?",
  "What is the paper format?",
  "Where is the venue?",
  "What are the conference topics?",
  "Tell me about accommodation",
];

export const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      content: "Hello! 👋 I'm your ICSDT 2025 assistant. Here are some things you can ask me about:",
    },
    {
      type: "bot",
      content: "• Registration and deadlines\n• Paper submission guidelines\n• Venue and accommodation\n• Conference schedule\n• Topics and themes",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const findBestMatch = (input: string): string => {
    const inputLower = input.toLowerCase();
    let bestMatch = "I apologize, but I don't have specific information about that. Please try asking about registration, paper submission, venue, or schedule. 🤔";
    
    for (const [key, value] of Object.entries(predefinedResponses)) {
      if (inputLower.includes(key)) {
        bestMatch = value;
        break;
      }
    }
    return bestMatch;
  };

  const simulateTyping = async (response: string) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setMessages((prev) => [...prev, { type: "bot", content: response }]);
    setIsTyping(false);
    
    // Show next suggested question after bot response
    setCurrentSuggestionIndex((prev) => (prev + 1) % suggestedQuestions.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setInput("");

    const response = findBestMatch(userMessage.toLowerCase());
    simulateTyping(response);
  };

  const handleSuggestedQuestion = (question: string) => {
    setMessages((prev) => [...prev, { type: "user", content: question }]);
    const response = findBestMatch(question.toLowerCase());
    simulateTyping(response);
  };

  return (
    <div className={`fixed ${isMobile ? "bottom-4 right-4 left-4" : "bottom-8 right-8"} z-50`}>
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      ) : (
        <Card className={`${isMobile ? "w-full" : "w-[400px]"} shadow-xl`}>
          <div className="p-4 border-b flex justify-between items-center bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <h3 className="font-semibold">ICSDT 2025 Assistant</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary/90"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <ScrollArea className="h-[400px] p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[80%] ${
                      message.type === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === "user" ? "bg-primary" : "bg-secondary"
                    }`}>
                      {message.type === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.type === "user"
                          ? "bg-primary text-primary-foreground rounded-tr-none"
                          : "bg-secondary/10 rounded-tl-none"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="max-w-[80%] p-3 rounded-lg bg-secondary/10 rounded-tl-none">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Suggested Questions */}
            {!isTyping && (
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-500">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => handleSuggestedQuestion(question)}
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </ScrollArea>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isTyping} className="bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </div>
  );
};