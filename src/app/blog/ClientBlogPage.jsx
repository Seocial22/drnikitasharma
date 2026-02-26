'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Smile, Baby, Shield, TypeOutline, LucideTypeOutline } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useMemo } from 'react';

const POSTS_PER_PAGE = 6; // Still the default for paginated view

const ClientBlogPage = ({ blogs }) => {
  // Set up intersection observers for different sections
  const [badgeRef, badgeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [descRef, descInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [tagsRef, tagsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [credentialsRef, credentialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [doctorInfoRef, doctorInfoInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [specialtiesRef, specialtiesInView] = new useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [membershipsRef, membershipsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // --- Pagination & View All Logic Start ---
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllBlogs, setShowAllBlogs] = useState(false); // New state to toggle view

  // Sort blogs by date in descending order (latest first)
  const sortedBlogs = useMemo(() => {
    if (!Array.isArray(blogs)) {
      console.warn("Blogs prop is not an array. Please provide an array of blog posts.");
      return [];
    }
    return [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [blogs]);

  // Determine which posts to display based on showAllBlogs state
  const displayedPosts = useMemo(() => {
    if (showAllBlogs) {
      return sortedBlogs; // Show all sorted blogs
    } else {
      // Calculate current posts for the displayed page
      const indexOfLastPost = currentPage * POSTS_PER_PAGE;
      const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
      return sortedBlogs.slice(indexOfFirstPost, indexOfLastPost);
    }
  }, [showAllBlogs, currentPage, sortedBlogs]);

  // Calculate total pages (only relevant when not showing all)
  const totalPages = Math.ceil(sortedBlogs.length / POSTS_PER_PAGE);

  // Function to change page
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // Optional: Scroll to top of the blog grid when page changes
      window.scrollTo({ top: document.querySelector('.blog-grid-section')?.offsetTop || 0, behavior: 'smooth' });
    }
  };

  // Function to toggle between paginated and all blogs view
  const toggleView = () => {
    setShowAllBlogs(prev => !prev);
    setCurrentPage(1); // Reset to first page when toggling view
    // Optional: Scroll to top of the blog grid when toggling
    window.scrollTo({ top: document.querySelector('.blog-grid-section')?.offsetTop || 0, behavior: 'smooth' });
  };


  // Generate page numbers for rendering
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

    if (endPage - startPage + 1 < maxPageNumbersToShow) {
      startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(<button key="1" onClick={() => paginate(1)} className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">1</button>);
      if (startPage > 2) {
        pageNumbers.push(<span key="ellipsis-start" className="mx-1 px-3 py-1 text-gray-500">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => paginate(i)}
          className={`mx-1 px-3 py-1 rounded transition-colors duration-200 ${
            currentPage === i ? 'bg-[#00A79D] text-white font-semibold' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(<span key="ellipsis-end" className="mx-1 px-3 py-1 text-gray-500">...</span>);
      }
      pageNumbers.push(<button key={totalPages} onClick={() => paginate(totalPages)} className="mx-1 px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300">{totalPages}</button>);
    }

    return pageNumbers;
  };
  // --- Pagination & View All Logic End ---

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <motion.div
                ref={badgeRef}
                initial={{ opacity: 0, y: 10 }}
                animate={badgeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-3 py-1 rounded-full bg-gradient-to-br from-[#00A79D] to-[#4DC7BD] text-white text-sm font-semibold mb-4"
              >
                Pediatric Dental Insights
              </motion.div>

              <motion.h1
                ref={titleRef}
                initial={{ opacity: 0, y: 20 }}
                animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl pb-2 md:text-5xl font-extrabold bg-gradient-to-br from-[#00A79D] to-[#4DC7BD] bg-clip-text text-transparent mb-6"
              >
                Pediatric Dental Blog by Dr. Nikita Sharma
              </motion.h1>

              <motion.p
                ref={descRef}
                initial={{ opacity: 0, y: 30 }}
                animate={descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-gray-700 mb-8 max-w-3xl"
              >
                {`Expert articles on pediatric dentistry, child oral health, and preventive dental care from a leading pediatric dentist.`}
              </motion.p>

              <motion.div
                ref={tagsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={tagsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-6"
              >
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#BCF7F1] text-[#007A72] text-sm">
                  <TypeOutline className="h-4 w-4 mr-1" />
                  Pediatric Dentistry
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#D5FAF7] text-[#007A72] text-sm">
                  <Baby className="h-4 w-4 mr-1" />
                  Child Dental Care
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#BCF7F1] text-[#007A72] text-sm">
                  <Shield className="h-4 w-4 mr-1" />
                  Preventive Care
                </span>
              </motion.div>
            </div>
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/3 relative flex items-center justify-center p-4 md:p-0"
            >
              <div className="relative w-full max-w-sm bg-[#E0F7FA] p-3 rounded-xl sm:mx-0 mx-auto">
                <Image
                  src="/images/drnikita.png"
                  alt="Dr. Nikita Sharma"
                  width={384}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg"
                  priority
                />
              </div>
            </motion.div>
          </div>
          {/* Doctor credentials */}
          <motion.div
            ref={credentialsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={credentialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#00A79D] to-[#4DC7BD] text-white p-6 md:p-8"
          >
            <div className="md:flex justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Dr. Nikita Sharma</h3>
                <p className="text-[#BCF7F1]"> B.D.S., M.D.S., Pedodontist & Child Dental Specialist </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Nivik Smile Care</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid-section">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Latest Blog Posts</h2>
            {sortedBlogs.length > POSTS_PER_PAGE && ( // Only show button if there are more posts than one page
              <button
                onClick={toggleView}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200"
              >
                {showAllBlogs ? 'All post' : `View All (${sortedBlogs.length} Posts)`}
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedPosts.map((blog) => ( // Use displayedPosts here
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={blog.image || '/images/dental-blog-placeholder.jpg'}
                    alt={blog.alt || blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-fit transition-transform duration-500 group-hover:scale-110"
                    priority={blog.id <= 3}
                  />
                  {blog.tags && blog.tags[0] && (
                    <span className="absolute bottom-4 right-4 bg-gradient-to-br from-[#00A79D] to-[#4DC7BD] text-white text-xs px-3 py-1 rounded-full">
                      {blog.tags[0]}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3 text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-[#00A79D]">{blog.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#00A79D] transition-colors duration-300">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="text-gray-700 mb-5 line-clamp-3">
                    {blog.excerpt || (blog.content ? blog.content.substring(0, 150) + '...' : '')}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags && blog.tags.slice(1).map((tag, index) => (
                      <span key={index} className="inline-block bg-[#E0F8F5] text-[#007A72] text-xs px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center text-sm font-medium bg-gradient-to-br from-[#00A79D] to-[#4DC7BD] text-white px-4 py-2 rounded-lg hover:opacity-90 transition duration-300"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read Full Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Pagination Controls (conditional rendering) */}
        {!showAllBlogs && totalPages > 1 && ( // Only show if not in "show all" mode and there's more than 1 page
          <div className="flex justify-center mt-12 items-center space-x-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Previous
            </button>
            {renderPageNumbers()}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              Next
            </button>
          </div>
        )}

        {/* Doctor Info Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <motion.div
              ref={doctorInfoRef}
              initial={{ opacity: 0, x: -50 }}
              animate={doctorInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/3 bg-gradient-to-br from-[#00A79D] to-[#4DC7BD] p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-4">About Dr. Nikita Sharma</h3>
              <p className="mb-6">Specialized pediatric dentist dedicated to creating positive dental experiences for children and promoting lifelong oral health.</p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Nivik Smile Care</h4>
                    <p className="text-[#BCF7F1]">B-455 Panchsheel, B Block, Ajmer Rajasthan, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-[#BCF7F1]">B.D.S., M.D.S. (Pedodontics)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-semibold">Experience</h4>
                    <p className="text-[#BCF7F1]">Practicing since 2015</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="md:w-2/3 p-8">
              <motion.div
                ref={specialtiesRef}
                initial={{ opacity: 0, y: 30 }}
                animate={specialtiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialized In</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-[#BCF7F1] p-3 rounded-lg mr-4">
                      <Baby className="h-6 w-6 text-[#00A79D]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pediatric Dentistry</h4>
                      <p className="text-gray-600">Specialized dental care for infants, children and adolescents</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#D5FAF7] p-3 rounded-lg mr-4">
                      <LucideTypeOutline className="h-6 w-6 text-[#00A79D]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Preventive Dentistry</h4>
                      <p className="text-gray-600">Fluoride treatments, sealants and oral health education</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#BCF7F1] p-3 rounded-lg mr-4">
                      <Smile className="h-6 w-6 text-[#00A79D]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Behavior Management</h4>
                      <p className="text-gray-600">Creating positive dental experiences for children</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#D5FAF7] p-3 rounded-lg mr-4">
                      <Shield className="h-6 w-6 text-[#00A79D]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Early Orthodontics</h4>
                      <p className="text-gray-600">Interceptive orthodontic treatment for children</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={membershipsRef}
                initial={{ opacity: 0, y: 30 }}
                animate={membershipsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Approach</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-[#BCF7F1] text-[#007A72] px-3 py-1 rounded-full">Child-Friendly Environment</span>
                  <span className="bg-[#D5FAF7] text-[#007A72] px-3 py-1 rounded-full">Pain-Free Techniques</span>
                  <span className="bg-[#BCF7F1] text-[#007A72] px-3 py-1 rounded-full">Preventive Focus</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBlogPage;