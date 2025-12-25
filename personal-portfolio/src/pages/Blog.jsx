import React from 'react';
import './Blog.css';
import NavBar from '../components/NavBar';
import BlogCard from '../components/BlogCard';
import NewsletterCard from '../components/NewsletterCard';
import Footer from '../components/FooterSection';
import { FiSearch } from 'react-icons/fi';

const blogData = [
    {
        id: 1,
        title: "The Future of UX: Integrating AI",
        category: "UX Research",
        date: "2025.12.20",
        excerpt: "Exploring how generative AI can assist research synthesis while maintaining empathy...",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=200"
    },
    {
        id: 2,
        title: "Mastering Auto Layout in Figma",
        category: "Design Systems",
        date: "2025.12.15",
        excerpt: "A deep dive into complex nesting and absolute positioning within Figma's latest updates...",
        image: null 
    },
    {
        id: 3,
        title: "Information Architecture Backbone",
        category: "IA",
        date: "2025.12.05",
        excerpt: "Understanding how content organization impacts user retention and cognitive load...",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=200"
    }
];

const Blog = () => {
    return (
        <div className="blog-page-wrapper">
            <NavBar />

            <div className="blog-page-layout">
                {/* Sidebar */}
                <aside className="blog-sidebar">
                    <h1 className="sidebar-logo">Blog</h1>
                    <div className="sidebar-search">
                        <input type="text" placeholder="Search" />
                        <FiSearch className="search-ico" />
                    </div>
                    
                    <div className="sidebar-nav">
                        <p className="sidebar-label">Categories</p>
                        <button className="sidebar-link active">All Posts</button>
                        <button className="sidebar-link">UX Design</button>
                        <button className="sidebar-link">Development</button>
                        <button className="sidebar-link">Branding</button>
                    </div>
                </aside>

                {/* Main Content Grid */}
                <main className="blog-main-content">
                    <div className="blog-cards-grid">
                        {blogData.map((post) => (
                            <BlogCard key={post.id} {...post} />
                        ))}
                    </div>
                </main>
            </div>

            {/* Newsletter section fits before the footer */}
            <div className="blog-newsletter-section">
                <NewsletterCard />
            </div>

            <Footer />
        </div>
    );
};

export default Blog;