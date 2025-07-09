
import React, { useState, useEffect } from 'react';
import { Search, Loader, AlertCircle, User } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Loader className="h-12 w-12 animate-spin mx-auto text-blue-600 dark:text-blue-400" />
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading posts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AlertCircle className="h-12 w-12 mx-auto text-red-600 dark:text-red-400" />
          <p className="mt-4 text-red-600 dark:text-red-400">Error: {error}</p>
          <Button onClick={fetchPosts} className="mt-4">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blog Posts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Explore posts fetched from JSONPlaceholder API
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search posts..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
        </div>

        {/* Posts Grid */}
        {currentPosts.length === 0 ? (
          <Card>
            <Card.Content className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No posts found matching your search.
              </p>
            </Card.Content>
          </Card>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-200">
                  <Card.Header>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                      {post.title}
                    </h3>
                  </Card.Header>
                  <Card.Content>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                      {post.body}
                    </p>
                  </Card.Content>
                  <Card.Footer>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <User className="h-4 w-4 mr-1" />
                      User {post.userId}
                    </div>
                  </Card.Footer>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <Button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  variant="outline"
                  size="sm"
                >
                  Previous
                </Button>
                
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <Button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        variant={currentPage === page ? 'primary' : 'outline'}
                        size="sm"
                      >
                        {page}
                      </Button>
                    );
                  } else if (page === currentPage - 2 || page === currentPage + 2) {
                    return <span key={page} className="text-gray-400">...</span>;
                  }
                  return null;
                })}

                <Button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  variant="outline"
                  size="sm"
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Posts;
