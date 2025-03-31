import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Rise of AI-Powered Spam Detection',
      excerpt: 'How artificial intelligence is revolutionizing the way we identify and prevent spam.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 2,
      title: 'Top 10 Common Spam Techniques to Watch Out For',
      excerpt: 'Learn about the most prevalent spam tactics and how to protect yourself.',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      category: 'Security',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee9223994e?auto=format&fit=crop&q=80&w=800'
    },
    {
      id: 3,
      title: 'The Future of Email Security',
      excerpt: 'Exploring upcoming trends and technologies in email protection.',
      author: 'Elena Rodriguez',
      date: 'March 5, 2024',
      category: 'Industry News',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Latest Updates from
              <span className="block text-green-500 dark:text-green-400">Our Blog</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Stay informed about the latest in spam detection, cybersecurity, and online safety.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-navy-darker rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-green-500 dark:text-green-400 mb-2">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-semibold mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-green-500 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;