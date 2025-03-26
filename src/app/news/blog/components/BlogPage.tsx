"use client";
import React, { useState } from 'react';
import { X, BookOpen, Calendar, User } from 'lucide-react';

// Blog Post Interface
interface BlogPost {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  fullContent: string;
  readTime: number;
  imageUrl: string;
}

// Sample Blog Posts
const initialPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Dance is Good for Your Mind and Body",
    author: "Ron",
    date: "March 18, 2025",
    excerpt: "Discover how dancing transforms your physical and mental well-being",
    fullContent: `Dance is more than just a series of movements set to music – it's a celebration of life, a powerful tool for self-expression, and an incredible workout for both your mind and body. Whether you're a seasoned dancer or someone who only busts out moves at weddings, the benefits of dancing go far beyond the dance floor. Here are just a few reasons why dance is one of the best activities you can incorporate into your life:

1. A Workout That Doesn't Feel Like Exercise
Let's face it: hitting the gym can sometimes feel like a chore. But when you're dancing, exercise transforms into joy. From hip-hop to salsa, each step strengthens your muscles, improves your endurance, and boosts your cardiovascular health – all while having fun. You'll burn calories, increase your flexibility, and tone your body without even realizing it.

2. A Natural Mood Booster
Feeling stressed or overwhelmed? Dance it out! Moving to music triggers the release of endorphins – the body's natural "happy hormones" – which can elevate your mood and reduce stress. Whether it's a freestyle jam in your living room or a structured class, dancing is a proven way to shake off negativity and embrace positivity.

3. Brain Training at Its Best
Dancing is not just a physical activity; it's a mental workout too. Learning choreography, staying in sync with music, and remembering steps stimulate your brain and improve cognitive function. Studies have shown that regular dancing can enhance memory, sharpen focus, and even reduce the risk of conditions like dementia.

4. Connect and Communicate
Dance is a universal language that transcends barriers. It allows you to connect with others, whether you're grooving at a social event or rehearsing with a group. Dancing fosters a sense of community, teamwork, and belonging. Plus, partner dances like tango or swing offer a unique way to bond with someone special.

5. Confidence in Every Step
There's nothing quite like the feeling of mastering a new move or nailing a routine. As you improve your skills and push past your comfort zone, dance builds self-esteem and confidence. It's a reminder that you are capable, strong, and graceful in your own unique way.

6. A Form of Emotional Expression
Dance is a powerful outlet for expressing emotions that words can't capture. Whether it's joy, sorrow, love, or excitement, dancing allows you to communicate your innermost feelings. This emotional release can be incredibly therapeutic, helping you process experiences and find balance.

7. Ageless and Timeless
One of the best things about dance is that it's for everyone, regardless of age or skill level. From toddlers taking their first steps in a dance class to seniors staying active with ballroom sessions, dance is a lifelong passion that adapts to your abilities and keeps you moving at every stage of life.

How to Start Your Dance Journey
Ready to experience these incredible benefits for yourself? Start small! Put on your favorite song and dance around your living room. Join a beginner's dance class to learn the basics of a style you've always admired. And most importantly, remember that there's no right or wrong way to dance – it's all about having fun and feeling good.

At Blingers Empire, we believe in the transformative power of dance. Our classes are designed to help you explore your potential, connect with others, and discover the joy of movement. Whether you're looking to get fit, make friends, or simply try something new, we can't wait to welcome you to the dance floor.

So, what are you waiting for? Put on your dancing shoes and let's move together! Your mind, body, and soul will thank you.`,
    readTime: 3,
    imageUrl: "/blog/id_1.jpg"
  },
  {
    id: 2,
    title: "The Role of Music in Dance",
    author: "Ronny", 
    date: "March 12, 2025",
    excerpt: "How to Choose the Perfect Soundtrack for your dance routines",
    fullContent: `When it comes to dance, music isn’t just a backdrop – it’s the heartbeat of every movement, the spark that ignites creativity, and the thread that ties emotion to performance. Choosing the right music for your routines and performances can transform your choreography into a captivating story. Here’s a deep dive into the role of music in dance and how to pick the perfect soundtrack for your performances;

1. Music Sets the Tone and Emotion

The right piece of music establishes the mood and energy of a dance routine. A slow, melodic tune can evoke deep emotions, perfect for contemporary or lyrical dance. On the other hand, an upbeat track with driving rhythms can energize the audience and dancers alike, making it ideal for hip-hop or jazz routines.

When choosing music, consider the story you want to tell. Are you aiming to inspire, move, or entertain your audience? Let the emotions in the music guide your choreography.

2. Rhythm Drives Movement

Dance and rhythm go hand in hand. The tempo and beat of the music determine the pace of your choreography. A fast-paced song demands quick, sharp movements, while a slower rhythm allows for fluid, graceful expressions.

When selecting music, ensure that its rhythm complements the dance style. For instance, Latin dances like salsa thrive on syncopated beats, while classical ballet pairs beautifully with orchestral compositions.

3. Lyrics and Narrative

Songs with meaningful lyrics can add another layer of storytelling to your performance. If the lyrics align with your choreography’s theme, they can amplify the emotional impact. However, be cautious not to let the lyrics overpower the dance. Ensure that the movements and music work in harmony.

For abstract or non-narrative dances, instrumental tracks provide a clean slate, allowing the audience to interpret the performance freely.

4. Audience Connection

Music has the power to evoke memories and emotions. Choosing a song that resonates with your audience can make your performance unforgettable. Popular tracks or timeless classics often strike a chord with viewers, creating an instant connection.

However, don’t shy away from introducing unique or lesser-known music. A fresh sound can captivate the audience and make your performance stand out.

5. Cultural Relevance

If your choreography celebrates a specific culture, selecting music that aligns with that culture’s traditions is essential. For example, Afrobeat tracks complement African dance styles, while traditional Irish jigs are perfect for Irish step dancing. Using culturally authentic music enhances the integrity and impact of your performance.

6. Practical Considerations

Duration: Choose a track that matches the time constraints of your performance. If the song is too long, consider editing it to fit your routine.

Audio Quality: Ensure the music is of high quality for clear playback during rehearsals and performances.

Copyright: Always use music legally, securing licenses or permissions if necessary. Platforms like royalty-free music libraries can be a great resource.

How to Choose the Perfect Music

Experiment: Explore different genres and artists to discover what resonates with your choreography.

Rehearse with Music: Test your choreography with potential tracks to see how well they align.

Seek Feedback: Share your options with peers or instructors for a fresh perspective.

Stay True to Your Vision: Ultimately, the music should enhance your creative expression and the story you wish to tell.

In Conclusion

Music is the soul of dance, shaping every movement and creating a deep connection between the performer and the audience. By carefully selecting the perfect soundtrack, you can elevate your dance routine into an unforgettable experience.

We Blingers Empire, embrace the transformative power of music and movement. Whether you’re choreographing your next masterpiece or exploring dance for the first time, let us help you find the rhythm that inspires you. After all, the perfect music doesn’t just accompany a dance – it makes it come alive.`,
    readTime: 4,
    imageUrl: "/blog/id_2.jpeg"
  },
  {
    id: 3,
    title: "The Magic of Dance ",
    author: "Juvera", 
    date: "March 25, 2025",
    excerpt: "Where Movement Meets Passion",
    fullContent: `Dance is more than just a sequence of moves; it's a conversation without words, a way to express emotion, and an art form that connects us all. Whether you're a seasoned dancer or someone who's just started, the world of dance has something exciting and fulfilling for everyone. Let’s take a step into the rhythm of life and explore the magic behind the moves!


1. The Power of Dance to Tell a Story

Every style of dance tells a story in its own way—from the structured elegance of ballet to the spontaneous energy of hip hop. When dancers perform, they channel emotions, histories, and imaginations into every step. Imagine watching a group of dancers in a contemporary dance performance, their bodies moving with purpose and grace as they narrate a story of struggle, love, and freedom.


2. Dance as a Workout: More Than Just Fun

While dance is definitely entertaining, it also doubles as an amazing workout! Whether it's salsa, hip hop, or ballet, each style challenges different parts of your body. Dancing increases flexibility, builds muscle, and improves coordination. It’s one of the most enjoyable ways to get fit—because who wouldn’t want to break a sweat while having fun?


3. The Social Side of Dance: Connecting with Others

Dance isn't just about the moves; it’s also about the community. Whether you're joining a ballroom class or jamming to a dancehall beat, there's a sense of connection that comes with sharing the experience with others. Dance classes often become a space for forming friendships, exchanging ideas, and growing together as artists.


4. The Evolution of Dance Styles

From the early days of tap dance to the rise of urban dance, the world of dance has evolved beautifully over time. The fusion of cultures, music, and innovation has led to new, hybrid forms that continue to push boundaries. Take Afro Urban dance, for example—it’s an energetic and expressive dance style that celebrates African roots with a modern twist.


5. Why Dance is for Everyone

Dance is universal—regardless of age, skill level, or background. It's for the young and the old, the beginner and the professional. Anyone can start their journey with a simple step, and over time, they’ll discover their own rhythm, improving not just as a dancer but as a person. Dance empowers confidence, builds discipline, and allows self-expression in ways that few other activities can match.


Dance is one of the purest forms of expression—a blend of joy, artistry, fitness, and connection. So, whether you're looking to take your first dance class or just enjoy watching the beauty of movement, dance offers a world of possibilities. Remember, the only limit in dance is the one you place on yourself. Step into your rhythm, and let the magic unfold!

If you’re ready to start your dance journey or simply want to learn more, come join us at Blingers Empire where every step is an opportunity to grow, connect, and express yourself. We can’t wait to dance with you!`,
    readTime: 2,
    imageUrl: "/blog/id_3.jpg"
  }
  /*{
    id: 3,
    title: "The Role of Music in Dance",
    author: "Ron", 
    date: "march 10, 2025",
    excerpt: "How to Choose the Perfect Soundtrack for your dance routines",
    fullContent: ` `
    readTime: 5,
    imageUrl: "/blog/id_2.jpeg"
  } */
];

const BlogPage: React.FC = () => {
  const [posts] = useState<BlogPost[]>(initialPosts);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Full Article Modal Component
  const ArticleModal: React.FC<{ post: BlogPost; onClose: () => void }> = ({ post, onClose }) => {
    return (
      <div 
        className="fixed inset-0 z-50 overflow-y-auto bg-black/70 
        flex items-center justify-center p-4"
      >
        <div 
          className="bg-white rounded-xl max-w-4xl mx-auto 
          relative max-h-[90vh] overflow-y-auto p-8 
          transform transition-all duration-300 
          bg-gradient-to-br from-[#1a3264]/10 to-[#c4a01c]/10"
        >
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 bg-red-500 
            text-white rounded-full p-2 hover:bg-red-600 
            transition-colors"
          >
            <X size={24} />
          </button>

          {/* Article Header */}
          <div className="mb-8 text-center">
            <h1 
              className="text-4xl font-bold mb-4 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-[#1a3264] to-[#c4a01c]"
            >
              {post.title}
            </h1>
            
            {/* Article Metadata */}
            <div 
              className="flex justify-center items-center 
              space-x-4 text-gray-600 mb-4"
            >
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <BookOpen size={16} className="mr-2" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose max-w-none text-gray-800 
            whitespace-pre-wrap"
          >
            {post.fullContent}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-[#1a3264] to-[#c4a01c] 
      text-white font-sans p-8 space-y-10 overflow-hidden relative">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 
          className="text-5xl font-bold mb-4 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-white to-yellow-200"
        >
          Our Blog
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          Transformative power of dance through inspiring stories
        </p>
      </header>
      
      {/* Blog Posts Grid */}
      <div 
        className="grid md:grid-cols-2 gap-8 relative z-10 
        transform transition-all duration-500"
      >
        {posts.map(post => (
          <div 
            key={post.id} 
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 
            border border-white/20 hover:border-[#c4a01c] 
            transition-all duration-300 cursor-pointer 
            transform hover:-translate-y-2 hover:scale-105 
            shadow-lg hover:shadow-2xl"
            onClick={() => setSelectedPost(post)}
          >
            <div 
              className="h-48 w-full bg-cover bg-center rounded-lg mb-4"
              style={{ backgroundImage: `url(${post.imageUrl})` }}
            />
            <h2 
              className="text-2xl font-bold mb-2 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-[#1a3264] to-[#1a3264]"
            >
              {post.title}
            </h2>
            <div className="flex items-center space-x-4 text-white/70 mb-2">
              <span className="flex items-center">
                <User size={16} className="mr-2" /> {post.author}
              </span>
              <span className="flex items-center">
                <BookOpen size={16} className="mr-2" /> {post.readTime} min read
              </span>
            </div>
            <p className="text-white/80">{post.excerpt}</p>
          </div>
        ))}
      </div>

      {/* Render Article Modal if a post is selected */}
      {selectedPost && (
        <ArticleModal 
          post={selectedPost} 
          onClose={() => setSelectedPost(null)} 
        />
      )}

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button 
          className="bg-[#c4a01c] text-[#1a3264] 
          px-6 py-3 rounded-full text-lg font-bold 
          hover:bg-[#1a3264] hover:text-white 
          transition-all duration-300"
        >
          Enjoy!
        </button>
      </div>
    </div>
  );
};

export default BlogPage;