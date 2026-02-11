import { UnitData } from './types';

export const units: UnitData[] = [
  {
    id: 7,
    title: "Unit 7",
    theme: "Environment",
    description: "Learn about protecting our planet, endangered species, and sustainable energy.",
    imagePrompt: "Lush green forest with clean river, wind turbines in background, realistic style, 4k",
    sections: {
      vocabulary: [
        {
          word: "pollution",
          meaning: "Sự ô nhiễm (không khí, nước, đất...)",
          example: "Air pollution is a serious problem in big cities.",
          imageDescription: "Factory chimneys releasing dark smoke into the sky",
          aiPrompt: "Industrial factory chimneys emitting dark smoke, gray sky, contrast with green trees below, realistic style",
          altText: "Air pollution from factories"
        },
        {
          word: "conserve",
          meaning: "Bảo tồn, gìn giữ",
          example: "We must conserve water to survive the drought.",
          imageDescription: "Hands holding a small globe or plant protectively",
          aiPrompt: "Close up of human hands cupping a small green plant growing from soil, soft sunlight, bokeh background",
          altText: "Conserving nature"
        },
        {
          word: "recycle",
          meaning: "Tái chế",
          example: "Students should recycle paper and plastic bottles.",
          imageDescription: "A student putting a plastic bottle into a recycling bin",
          aiPrompt: "Teenager placing a plastic bottle into a blue recycling bin with the recycling symbol, bright colors, friendly style",
          altText: "Recycling activity"
        },
        {
          word: "endangered",
          meaning: "Có nguy cơ tuyệt chủng",
          example: "Pandas are listed as an endangered species.",
          imageDescription: "A panda sitting in a bamboo forest",
          aiPrompt: "Giant panda eating bamboo in a misty forest, highly detailed fur, national geographic style",
          altText: "Endangered panda"
        },
        {
          word: "ecosystem",
          meaning: "Hệ sinh thái",
          example: "Pollution can damage the delicate marine ecosystem.",
          imageDescription: "Cross-section of a pond showing fish, plants, and water",
          aiPrompt: "Illustration of a pond ecosystem, underwater view with fish and roots, above water with ducks and reeds, educational style",
          altText: "Pond ecosystem"
        },
        {
          word: "renewable energy",
          meaning: "Năng lượng tái tạo",
          example: "Solar power is a form of renewable energy.",
          imageDescription: "Solar panels on a roof and wind turbines",
          aiPrompt: "Modern house with solar panels on roof, wind turbines in the distance, sunny blue sky, clean energy concept",
          altText: "Renewable energy sources"
        }
      ],
      pronunciation: {
        title: "Intonation in Statements & Questions",
        description: "Focus on falling tone for statements and wh-questions, rising tone for yes/no questions.",
        rules: [
          "Falling tone (↘): Statements, Wh-questions, commands.",
          "Rising tone (↗): Yes/No questions, showing surprise."
        ],
        examples: [
          "Save the planet. (↘)",
          "What can we do? (↘)",
          "Do you recycle? (↗)"
        ]
      },
      grammar: {
        title: "Conditional Sentences Type 1 & 2",
        explanation: "Type 1: Real possibility in present/future (If + Present Simple, Will + V). Type 2: Unreal/Hypothetical in present (If + Past Simple, Would + V).",
        examples: [
          "Type 1: If it rains, I will stay home.",
          "Type 2: If I were you, I would study harder.",
          "Type 2: If humans had wings, we would fly."
        ],
        practiceQuestion: {
          question: "If we _____ cutting down trees, forests will disappear.",
          options: ["continue", "continued", "will continue", "had continued"],
          correctAnswer: 0
        }
      },
      listening: {
        title: "Protecting Our Environment",
        transcript: "Narrator: The environment is essential for our survival. However, human activities are causing pollution and destroying ecosystems. To protect our planet, we should reduce plastic waste and plant more trees. Using renewable energy like solar and wind power helps reduce carbon emissions. Everyone can make a difference by conserving water and electricity at home. Let's act now before it's too late.",
        questions: [
          {
            question: "What is essential for our survival according to the audio?",
            options: ["Money", "The environment", "Factories", "Plastic"],
            correctAnswer: 1
          },
          {
            question: "What should we reduce?",
            options: ["Trees", "Water", "Plastic waste", "Solar power"],
            correctAnswer: 2
          }
        ]
      },
      speaking: {
        topic: "Discussion on Environmental Protection",
        dialogue: [
          { speaker: "Nam", text: "What do you think is the biggest threat to our environment?" },
          { speaker: "Lan", text: "I think it's plastic pollution. It's everywhere, from the streets to the oceans." },
          { speaker: "Nam", text: "I agree. We should encourage people to use cloth bags instead of plastic ones." },
          { speaker: "Lan", text: "That's a great idea. Also, we can organize a clean-up day at school." }
        ],
        discussionPoints: [
          "Suggest 3 ways to save energy at school.",
          "Why is recycling important?",
          "How can we protect endangered animals?"
        ]
      },
      quiz: [
        {
          question: "If people _____ public transport, the air would be cleaner.",
          options: ["use", "used", "will use", "using"],
          correctAnswer: 1,
          explanation: "Type 2 conditional (Hypothetical present): If + Past Simple, ... would + V."
        },
        {
          question: "The _____ is the natural environment in which an animal or plant lives.",
          options: ["pollution", "habitat", "emission", "fuel"],
          correctAnswer: 1,
          explanation: "Habitat means the natural home of a plant or animal."
        },
        {
          question: "Solar energy is a type of _____ energy.",
          options: ["renewable", "limited", "dangerous", "expensive"],
          correctAnswer: 0,
          explanation: "Renewable energy can be replenished naturally."
        },
        {
          question: "We should avoid _____ hazardous chemicals into the river.",
          options: ["dumping", "to dump", "dump", "dumped"],
          correctAnswer: 0,
          explanation: "Avoid + V-ing."
        },
        {
          question: "Many species are _____ because of habitat loss.",
          options: ["danger", "endangered", "dangerous", "endanger"],
          correctAnswer: 1,
          explanation: "Endangered is the adjective describing species at risk."
        }
      ]
    }
  },
  {
    id: 8,
    title: "Unit 8",
    theme: "World Englishes",
    description: "Explore the varieties of English spoken around the world and how to learn effectively.",
    imagePrompt: "Map of the world with flags of English speaking countries, cartoon style, vibrant",
    sections: {
      vocabulary: [
        {
          word: "variety",
          meaning: "Sự đa dạng, thể loại",
          example: "British and American English are two varieties of the language.",
          imageDescription: "Different types of apples or flowers representing variety",
          aiPrompt: "A basket containing many different varieties of colorful fruits, close up, studio lighting",
          altText: "Variety of items"
        },
        {
          word: "bilingual",
          meaning: "Song ngữ (nói được 2 thứ tiếng)",
          example: "She is bilingual in English and Vietnamese.",
          imageDescription: "A person with two speech bubbles, one with UK flag, one with Vietnam flag",
          aiPrompt: "Silhouette of a head with two speech bubbles, one containing 'Hello' and one containing 'Xin chào', vector art style",
          altText: "Bilingual concept"
        },
        {
          word: "fluent",
          meaning: "Lưu loát",
          example: "He became fluent in French after living in Paris.",
          imageDescription: "Water flowing smoothly in a stream",
          aiPrompt: "Abstract representation of speech flowing like water, smooth blue lines, artistic",
          altText: "Fluency concept"
        },
        {
          word: "official language",
          meaning: "Ngôn ngữ chính thức",
          example: "English is an official language in Singapore.",
          imageDescription: "A government document with a stamp",
          aiPrompt: "Close up of an official document with a 'Government Official' wax seal, elegant font",
          altText: "Official document"
        },
        {
          word: "translate",
          meaning: "Dịch",
          example: "Use this app to translate the text.",
          imageDescription: "Phone screen showing translation app icon",
          aiPrompt: "Smartphone displaying a translation app interface with arrows between two languages, modern tech style",
          altText: "Translation app"
        }
      ],
      pronunciation: {
        title: "Stress in words ending in -ion and -ity",
        description: "The primary stress is usually on the syllable immediately before the suffix.",
        rules: [
          "-ion: ac'tion, de'cision, edu'cation",
          "-ity: a'bility, na'tionality, com'munity"
        ],
        examples: [
          "Pronunciation (pro-nun-ci-'a-tion)",
          "Activity (ac-'ti-vi-ty)"
        ]
      },
      grammar: {
        title: "Defining Relative Clauses",
        explanation: "Used to identify which person or thing we are talking about. We cannot remove it without changing the meaning.",
        examples: [
          "The boy who is wearing a blue shirt is my brother.",
          "The book that I borrowed is interesting.",
          "This is the house where I was born."
        ],
        practiceQuestion: {
          question: "The woman _____ lives next door is a doctor.",
          options: ["which", "who", "whom", "whose"],
          correctAnswer: 1
        }
      },
      listening: {
        title: "English Around the World",
        transcript: "Narrator: English is spoken as a first language in countries like the UK, the USA, Australia, and Canada. However, it is also a second language in many places like India and Singapore. Because of this, there are many varieties of English. For example, Australians might say 'G'day' instead of 'Hello'. Despite these differences, English helps connect people globally.",
        questions: [
          {
            question: "In which country is English a second language according to the text?",
            options: ["USA", "Australia", "Singapore", "UK"],
            correctAnswer: 2
          },
          {
            question: "What might Australians say for 'Hello'?",
            options: ["Bonjour", "G'day", "Ni hao", "Cheers"],
            correctAnswer: 1
          }
        ]
      },
      speaking: {
        topic: "Talking about Learning English",
        dialogue: [
          { speaker: "Tom", text: "How do you practice your English speaking?" },
          { speaker: "Mai", text: "I usually watch English movies and mimic the actors." },
          { speaker: "Tom", text: "That's a good method. I prefer speaking with foreigners in the park." },
          { speaker: "Mai", text: "Wow, you are very brave. I want to try that too." }
        ],
        discussionPoints: [
          "Why is English important for your future?",
          "Share a tip for learning new vocabulary.",
          "Do you like American or British accent more? Why?"
        ]
      },
      quiz: [
        {
          question: "The book _____ you gave me is fantastic.",
          options: ["who", "whom", "which", "where"],
          correctAnswer: 2,
          explanation: "Use 'which' for things in relative clauses."
        },
        {
          question: "Choose the word with different stress pattern.",
          options: ["nation", "national", "nationality", "native"],
          correctAnswer: 2,
          explanation: "na'tionality (3rd syllable), others are on 1st."
        },
        {
          question: "He speaks English very _____; he sounds like a native speaker.",
          options: ["fluent", "fluency", "fluently", "fluid"],
          correctAnswer: 2,
          explanation: "Adverb 'fluently' modifies the verb 'speaks'."
        },
        {
          question: "Look _____ this word in the dictionary if you don't know it.",
          options: ["up", "at", "for", "after"],
          correctAnswer: 0,
          explanation: "'Look up' means to search for information."
        },
        {
          question: "Is English an _____ language in your country?",
          options: ["office", "official", "officially", "officer"],
          correctAnswer: 1,
          explanation: "Adjective 'official' modifies 'language'."
        }
      ]
    }
  },
  {
    id: 9,
    title: "Unit 9",
    theme: "Technology",
    description: "Discover innovations, digital devices, and how AI is changing our lives.",
    imagePrompt: "Futuristic city with flying drones and robots, cyberpunk neon style",
    sections: {
      vocabulary: [
        {
          word: "device",
          meaning: "Thiết bị",
          example: "A smartphone is a useful electronic device.",
          imageDescription: "Collection of gadgets: phone, tablet, laptop",
          aiPrompt: "Modern electronic devices layout on a white desk: smartphone, tablet, laptop, smartwatch, minimalist style",
          altText: "Electronic devices"
        },
        {
          word: "innovation",
          meaning: "Sự đổi mới, sáng tạo",
          example: "Technological innovation has changed how we live.",
          imageDescription: "A glowing lightbulb with digital circuits inside",
          aiPrompt: "Lightbulb with glowing digital circuit board filament, floating in dark space, representing idea and technology",
          altText: "Innovation concept"
        },
        {
          word: "artificial intelligence",
          meaning: "Trí tuệ nhân tạo (AI)",
          example: "Robots with artificial intelligence can learn from humans.",
          imageDescription: "A robot hand touching a human hand",
          aiPrompt: "Robot hand reaching out to touch a human finger, spark of light at contact point, Michelangelo creation style but sci-fi",
          altText: "AI Robot"
        },
        {
          word: "application",
          meaning: "Ứng dụng (App)",
          example: "I use a learning application to study math.",
          imageDescription: "Smartphone screen with colorful app icons",
          aiPrompt: "Close up of smartphone screen displaying colorful square application icons, shallow depth of field",
          altText: "Apps on phone"
        },
        {
          word: "digital",
          meaning: "Kỹ thuật số",
          example: "We are living in a digital age.",
          imageDescription: "Binary code (0 and 1) streaming like rain",
          aiPrompt: "Matrix style digital rain, binary code numbers 0 and 1 glowing green on black background",
          altText: "Digital binary code"
        }
      ],
      pronunciation: {
        title: "Tone in Statement Questions",
        description: "Statement questions look like statements but function as questions. They usually end with a rising tone.",
        rules: [
          "You're a student? (↗)",
          "He likes coding? (↗)"
        ],
        examples: [
          "She's coming with us? (↗)",
          "You finished the homework? (↗)"
        ]
      },
      grammar: {
        title: "Reported Speech (Statements)",
        explanation: "When reporting what someone said, we often move the verb tense back one step (Backshift).",
        examples: [
          "Direct: 'I like tech,' said Tom. -> Reported: Tom said (that) he liked tech.",
          "Direct: 'I am using a tablet,' she said. -> Reported: She said she was using a tablet.",
          "Direct: 'I will buy a robot,' he said. -> Reported: He said he would buy a robot."
        ],
        practiceQuestion: {
          question: "'I can fix the computer,' he said. -> He said he _____ fix the computer.",
          options: ["can", "could", "will", "would"],
          correctAnswer: 1
        }
      },
      listening: {
        title: "Technology in Daily Life",
        transcript: "Narrator: Technology plays a huge role in our daily lives. We wake up to digital alarms, check news on smartphones, and commute using ride-hailing apps. At school, interactive whiteboards make learning fun. However, relying too much on technology can make us lazy. It is important to balance screen time with outdoor activities.",
        questions: [
          {
            question: "What do we use to commute according to the text?",
            options: ["Bikes", "Ride-hailing apps", "Helicopters", "Boats"],
            correctAnswer: 1
          },
          {
            question: "What makes learning fun at school?",
            options: ["Digital alarms", "Smartphones", "Interactive whiteboards", "Paper books"],
            correctAnswer: 2
          }
        ]
      },
      speaking: {
        topic: "Pros and Cons of Technology",
        dialogue: [
          { speaker: "Student A", text: "Technology helps us connect with friends instantly." },
          { speaker: "Student B", text: "That's true, but it also makes us spend less time with family face-to-face." },
          { speaker: "Student A", text: "Agreed. Also, online information helps with homework." },
          { speaker: "Student B", text: "Yes, but some information is fake news." }
        ],
        discussionPoints: [
          "Is AI dangerous or helpful?",
          "Do you prefer reading e-books or paper books?",
          "How much time do you spend on social media?"
        ]
      },
      quiz: [
        {
          question: "He said that he _____ a new laptop the following day.",
          options: ["will buy", "bought", "would buy", "buy"],
          correctAnswer: 2,
          explanation: "Reported speech: 'will' becomes 'would', 'tomorrow' becomes 'the following day'."
        },
        {
          question: "The light bulb is a famous _____.",
          options: ["invent", "invention", "inventor", "inventive"],
          correctAnswer: 1,
          explanation: "Invention is the noun referring to the object created."
        },
        {
          question: "Smartphones allow us to access the internet _____.",
          options: ["wirelessly", "wireless", "wire", "wiring"],
          correctAnswer: 0,
          explanation: "Adverb 'wirelessly' modifies 'access'."
        },
        {
          question: "AI stands for _____ Intelligence.",
          options: ["Automatic", "Artificial", "Applied", "Active"],
          correctAnswer: 1,
          explanation: "AI = Artificial Intelligence."
        },
        {
          question: "Mary told me she _____ tired then.",
          options: ["is", "was", "were", "been"],
          correctAnswer: 1,
          explanation: "Reported speech: 'is' becomes 'was'."
        }
      ]
    }
  },
  {
    id: 10,
    title: "Unit 10",
    theme: "Community Service",
    description: "Discuss volunteering, charity work, and how to support your community.",
    imagePrompt: "Group of diverse teenagers planting trees in a park, wearing volunteer t-shirts, sunny day",
    sections: {
      vocabulary: [
        {
          word: "volunteer",
          meaning: "Tình nguyện viên / Làm tình nguyện",
          example: "She works as a volunteer at the local hospital.",
          imageDescription: "Person wearing a 'Volunteer' shirt helping an elderly person",
          aiPrompt: "Young person helping an elderly woman cross the street, wearing a vest that says VOLUNTEER, warm lighting",
          altText: "Volunteer work"
        },
        {
          word: "charity",
          meaning: "Tổ chức từ thiện / Lòng từ thiện",
          example: "They raised money for a charity supporting orphans.",
          imageDescription: "A donation box full of money",
          aiPrompt: "Clear donation box filled with bills and coins, label says 'Charity', on a wooden table",
          altText: "Charity box"
        },
        {
          word: "donation",
          meaning: "Khoản quyên góp",
          example: "Your small donation can make a big difference.",
          imageDescription: "Hands giving a gift box to another pair of hands",
          aiPrompt: "Top view of hands passing a gift box wrapped in simple paper to another pair of cupped hands, symbol of giving",
          altText: "Making a donation"
        },
        {
          word: "campaign",
          meaning: "Chiến dịch",
          example: "The 'Clean Up' campaign was very successful.",
          imageDescription: "Posters on a wall advertising a community event",
          aiPrompt: "Community bulletin board with colorful posters advertising a 'Clean Up The City' campaign",
          altText: "Campaign posters"
        },
        {
          word: "benefit",
          meaning: "Lợi ích / Giúp ích",
          example: "Community service benefits both the giver and receiver.",
          imageDescription: "Scales showing balance between giving and receiving",
          aiPrompt: "Balance scales, on one side a heart, on the other side a smiling face, representing mutual benefit",
          altText: "Benefit concept"
        }
      ],
      pronunciation: {
        title: "Intonation in Statements & Questions (Review)",
        description: "Focus on politeness. Polite requests often use a rising tone at the end.",
        rules: [
          "Could you help me? (↗)",
          "Would you mind opening the door? (↗)"
        ],
        examples: [
          "Can I join the group? (↗)",
          "Certainly. (↘)"
        ]
      },
      grammar: {
        title: "Past Perfect Tense",
        explanation: "Describes an action finished before another past action. Structure: Had + V3/ed.",
        examples: [
          "When we arrived, the train had left.",
          "She had finished her homework before she went to bed.",
          "I realized I had lost my keys."
        ],
        practiceQuestion: {
          question: "By the time the police arrived, the thief _____.",
          options: ["left", "has left", "had left", "was leaving"],
          correctAnswer: 2
        }
      },
      listening: {
        title: "Teen Volunteer Work",
        transcript: "Interviewer: Hi Sarah, tell us about your volunteer work. Sarah: Last summer, I volunteered at a food bank. By the time I arrived on the first day, the team had already packed 100 boxes. I helped distribute food to homeless people. It was tiring but rewarding. I learned that helping others brings happiness.",
        questions: [
          {
            question: "Where did Sarah volunteer?",
            options: ["A hospital", "A school", "A food bank", "A park"],
            correctAnswer: 2
          },
          {
            question: "What had the team done before Sarah arrived?",
            options: ["Left home", "Packed 100 boxes", "Eaten lunch", "Distributed food"],
            correctAnswer: 1
          }
        ]
      },
      speaking: {
        topic: "Planning a Community Activity",
        dialogue: [
          { speaker: "A", text: "We should organize a book drive for poor children." },
          { speaker: "B", text: "Great idea. When should we start?" },
          { speaker: "A", text: "Next Monday. We need to make posters first." },
          { speaker: "B", text: "I will ask the teacher for permission." }
        ],
        discussionPoints: [
          "What skills can you learn from volunteering?",
          "Plan a project to help elderly people in your neighborhood.",
          "Should volunteering be mandatory for students?"
        ]
      },
      quiz: [
        {
          question: "Before I went to the cinema, I _____ my dinner.",
          options: ["eat", "ate", "had eaten", "have eaten"],
          correctAnswer: 2,
          explanation: "Past Perfect (had eaten) happens before Past Simple (went)."
        },
        {
          question: "They launched a _____ to help flood victims.",
          options: ["camp", "campaign", "campus", "camping"],
          correctAnswer: 1,
          explanation: "A campaign is an organized course of action to achieve a goal."
        },
        {
          question: "We rely on _____ from the public to run this shelter.",
          options: ["donors", "donations", "donate", "donating"],
          correctAnswer: 1,
          explanation: "Donations (noun) refers to the money/items given."
        },
        {
          question: "She _____ never _____ a horse before she visited the farm.",
          options: ["has / ridden", "had / ridden", "was / riding", "did / ride"],
          correctAnswer: 1,
          explanation: "Past Perfect for experience before a past time."
        },
        {
          question: "Volunteering helps you _____ new skills.",
          options: ["gain", "do", "make", "take"],
          correctAnswer: 0,
          explanation: "Collocation: gain skills."
        }
      ]
    }
  },
  {
    id: 11,
    title: "Unit 11",
    theme: "Healthy Lifestyle",
    description: "Focus on nutrition, exercise, mental health, and maintaining a balanced life.",
    imagePrompt: "Flat lay of healthy food (vegetables, fruits), running shoes, and a water bottle on a wooden floor",
    sections: {
      vocabulary: [
        {
          word: "nutrition",
          meaning: "Dinh dưỡng",
          example: "Good nutrition is vital for a healthy body.",
          imageDescription: "A food pyramid chart",
          aiPrompt: "Colorful food pyramid chart showing grains, vegetables, fruits, and proteins, educational illustration",
          altText: "Nutrition pyramid"
        },
        {
          word: "balanced diet",
          meaning: "Chế độ ăn cân bằng",
          example: "You need a balanced diet with plenty of vegetables.",
          imageDescription: "A plate divided into sections: greens, protein, carbs",
          aiPrompt: "Top down view of a white dinner plate divided into 3 sections containing salad, grilled chicken, and brown rice",
          altText: "Balanced meal"
        },
        {
          word: "mental health",
          meaning: "Sức khỏe tinh thần",
          example: "Meditation improves your mental health.",
          imageDescription: "Silhouette of a head with flowers blooming inside",
          aiPrompt: "Artistic silhouette of a human head profile with colorful flowers blooming inside the brain area, symbolizing mental well-being",
          altText: "Mental health art"
        },
        {
          word: "stress relief",
          meaning: "Giảm căng thẳng",
          example: "Yoga is great for stress relief.",
          imageDescription: "Person doing yoga in a calm room",
          aiPrompt: "Woman doing yoga meditation pose in a sunlit room with plants, peaceful atmosphere",
          altText: "Yoga for stress"
        },
        {
          word: "immune system",
          meaning: "Hệ miễn dịch",
          example: "Vitamin C boosts your immune system.",
          imageDescription: "Shield protecting a body from viruses",
          aiPrompt: "Cartoon illustration of a blue shield protecting a human figure from green virus particles",
          altText: "Immune system shield"
        }
      ],
      pronunciation: {
        title: "Sentence Stress",
        description: "Content words (nouns, verbs, adjectives) are stressed. Structure words (prepositions, articles) are unstressed.",
        rules: [
          "STRESSED: Eat, Apple, Healthy, Run",
          "Unstressed: a, the, of, in"
        ],
        examples: [
          "EAT an APPLE every DAY.",
          "EXERCISE is GOOD for YOU."
        ]
      },
      grammar: {
        title: "To-infinitives vs. Gerunds",
        explanation: "Some verbs take To-V (want, decide, hope). Some take V-ing (enjoy, avoid, practice). Some take both.",
        examples: [
          "I want to eat healthy food. (want + to V)",
          "She avoids eating sugar. (avoid + V-ing)",
          "Remember to lock the door. (Task) vs Remember locking the door. (Memory)"
        ],
        practiceQuestion: {
          question: "He decided _____ a gym membership.",
          options: ["buy", "buying", "to buy", "bought"],
          correctAnswer: 2
        }
      },
      listening: {
        title: "Healthy Habits",
        transcript: "Doctor: To live a long life, you must watch your diet. Avoid eating too much fast food because it contains bad fats. Instead, focus on fresh fruits and vegetables. Also, remember to exercise for at least 30 minutes a day. Finally, don't forget to sleep 8 hours a night to let your body recover.",
        questions: [
          {
            question: "What should you avoid eating?",
            options: ["Fresh fruits", "Vegetables", "Fast food", "Rice"],
            correctAnswer: 2
          },
          {
            question: "How long should you exercise daily?",
            options: ["10 minutes", "30 minutes", "2 hours", "5 minutes"],
            correctAnswer: 1
          }
        ]
      },
      speaking: {
        topic: "Giving Advice for Healthy Living",
        dialogue: [
          { speaker: "Patient", text: "I feel tired all the time. What should I do?" },
          { speaker: "Doctor", text: "You should try to get more sleep and drink more water." },
          { speaker: "Patient", text: "What about exercise?" },
          { speaker: "Doctor", text: "Start with walking 20 minutes a day." }
        ],
        discussionPoints: [
          "Is being thin the same as being healthy?",
          "How does stress affect your body?",
          "Create a healthy menu for one day."
        ]
      },
      quiz: [
        {
          question: "She suggested _____ for a walk in the park.",
          options: ["go", "to go", "going", "went"],
          correctAnswer: 2,
          explanation: "Suggest + V-ing."
        },
        {
          question: "I promise _____ smoking next year.",
          options: ["stop", "stopping", "to stop", "stopped"],
          correctAnswer: 2,
          explanation: "Promise + To V."
        },
        {
          question: "Lack of sleep can affect your _____ health.",
          options: ["mentality", "mental", "mentally", "mentoring"],
          correctAnswer: 1,
          explanation: "Adjective 'mental' modifies 'health'."
        },
        {
          question: "You should maintain a _____ diet.",
          options: ["balance", "balancing", "balanced", "balances"],
          correctAnswer: 2,
          explanation: "Balanced diet (Adjective)."
        },
        {
          question: "My father managed _____ smoking after 20 years.",
          options: ["give up", "to give up", "giving up", "given up"],
          correctAnswer: 1,
          explanation: "Manage + To V."
        }
      ]
    }
  },
  {
    id: 12,
    title: "Unit 12",
    theme: "Culture Exchange",
    description: "Learn about traditions, customs, festivals, and introducing Vietnamese culture to the world.",
    imagePrompt: "People from different countries holding hands around a globe, traditional costumes, watercolor style",
    sections: {
      vocabulary: [
        {
          word: "heritage",
          meaning: "Di sản",
          example: "Ha Long Bay is a World Heritage Site.",
          imageDescription: "Ha Long Bay limestone islands",
          aiPrompt: "Beautiful landscape of Ha Long Bay with limestone islands rising from emerald water, traditional junk boat, realistic photography",
          altText: "Ha Long Bay"
        },
        {
          word: "custom",
          meaning: "Phong tục",
          example: "It is a custom to visit pagodas on Tet holiday.",
          imageDescription: "People praying at a pagoda",
          aiPrompt: "Vietnamese people wearing Ao Dai praying at a temple with incense, red lanterns, festive atmosphere",
          altText: "Pagoda visit"
        },
        {
          word: "diversity",
          meaning: "Sự đa dạng",
          example: "Cultural diversity makes the world interesting.",
          imageDescription: "Mosaic of different cultural patterns",
          aiPrompt: "Artistic mosaic pattern combining textures from different cultures: African tribal, Asian silk, European tapestry, Native American geometric",
          altText: "Cultural patterns"
        },
        {
          word: "festival",
          meaning: "Lễ hội",
          example: "The Mid-Autumn Festival is for children.",
          imageDescription: "Children carrying lanterns",
          aiPrompt: "Night scene of children carrying colorful star-shaped lanterns, full moon in sky, Mid-Autumn festival vibe",
          altText: "Lantern festival"
        },
        {
          word: "identity",
          meaning: "Bản sắc",
          example: "Preserving cultural identity is important.",
          imageDescription: "A fingerprint made of cultural symbols",
          aiPrompt: "A giant fingerprint where the ridges are made of tiny cultural symbols like dragons, lotus, drums",
          altText: "Identity fingerprint"
        }
      ],
      pronunciation: {
        title: "Review of Tone",
        description: "Using correct tone to express emotions (surprise, doubt, certainty).",
        rules: [
          "Really? (↗) - Surprise",
          "Really. (↘) - Agreement/Certainty"
        ],
        examples: [
          "You don't like Pho? (↗) (Surprise)",
          "I love it! (↘) (Certainty)"
        ]
      },
      grammar: {
        title: "Passive Voice Review",
        explanation: "Object + Be + V3/ed (+ by Subject). Used when the action is more important than the doer.",
        examples: [
          "Active: People speak English here. -> Passive: English is spoken here.",
          "Active: They built this temple in 1070. -> Passive: This temple was built in 1070.",
          "Active: We will hold the festival next week. -> Passive: The festival will be held next week."
        ],
        practiceQuestion: {
          question: "The Ao Dai _____ by both men and women.",
          options: ["wear", "is wearing", "is worn", "worn"],
          correctAnswer: 2
        }
      },
      listening: {
        title: "Cultural Exchange Programs",
        transcript: "Host: Welcome to the Culture Exchange program. Today we have students from Vietnam and Japan. Mai, tell us about Tet. Mai: Tet is our most important holiday. Houses are cleaned and decorated with peach blossoms. Special food like Banh Chung is prepared. It is a time for family reunions.",
        questions: [
          {
            question: "What is prepared for Tet?",
            options: ["Pizza", "Sushi", "Banh Chung", "Bread"],
            correctAnswer: 2
          },
          {
            question: "What do people do to their houses?",
            options: ["Sell them", "Clean and decorate", "Paint them black", "Close them"],
            correctAnswer: 1
          }
        ]
      },
      speaking: {
        topic: "Introducing Vietnamese Culture",
        dialogue: [
          { speaker: "Visitor", text: "What is the traditional dress of Vietnam?" },
          { speaker: "You", text: "It is the Ao Dai. It's a long slit tunic worn over trousers." },
          { speaker: "Visitor", text: "When do people wear it?" },
          { speaker: "You", text: "Women wear it on special occasions like weddings or Tet, and teachers wear it to school." }
        ],
        discussionPoints: [
          "What is your favorite Vietnamese dish to introduce to a foreigner?",
          "Explain the meaning of Lucky Money.",
          "Why should we learn about other cultures?"
        ]
      },
      quiz: [
        {
          question: "Thousands of lanterns _____ released into the sky.",
          options: ["were", "was", "did", "have"],
          correctAnswer: 0,
          explanation: "Passive voice plural past: were + V3."
        },
        {
          question: "We should respect the cultural _____ of other nations.",
          options: ["different", "differs", "diversity", "diverse"],
          correctAnswer: 2,
          explanation: "Noun 'diversity' needed after 'cultural'."
        },
        {
          question: "My long-term goal is to master the English _____.",
          options: ["language", "tongue", "speech", "talk"],
          correctAnswer: 0,
          explanation: "English language."
        },
        {
          question: "This song _____ by a famous musician last year.",
          options: ["writes", "wrote", "was written", "is written"],
          correctAnswer: 2,
          explanation: "Passive past simple: was written."
        },
        {
          question: "It is the _____ in Vietnam to worship ancestors.",
          options: ["custom", "habit", "law", "rule"],
          correctAnswer: 0,
          explanation: "Custom refers to traditional practice."
        }
      ]
    }
  }
];