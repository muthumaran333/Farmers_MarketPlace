import React, { useState } from 'react';

const Reviews = ({ product }) => {
  // State to hold the reviews
  const [reviews, setReviews] = useState(product.reviews || []);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(5); // Default rating to 5

  // Handler for submitting a new review
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim()) {
      const updatedReviews = [
        ...reviews,
        { text: newReview, rating: newRating, id: reviews.length + 1 },
      ];
      setReviews(updatedReviews); // Update the reviews state
      setNewReview(''); // Clear the input field
      setNewRating(5); // Reset rating to default
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>

      {/* Review Submission Form */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex flex-col mb-4">
          <label className="text-sm font-medium">Rating:</label>
          <select
            value={newRating}
            onChange={(e) => setNewRating(Number(e.target.value))}
            className="border border-gray-300 rounded-md p-2"
          >
            {[1, 2, 3, 4, 5].map((rating) => (
              <option key={rating} value={rating}>
                {rating} {rating > 1 ? 'Stars' : 'Star'}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label className="text-sm font-medium">Write a Review:</label>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            rows="4"
            className="border border-gray-300 rounded-md p-2"
            placeholder="Share your thoughts..."
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
        >
          Submit Review
        </button>
      </form>

      {/* Display Existing Reviews */}
      <div className="mt-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="border-b mb-4 pb-2">
              <p className="font-semibold">
                {review.rating} Stars
              </p>
              <p className="text-gray-700">{review.text}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to leave a review!</p>
        )}
      </div>
    </div>
  );
};

export default Reviews;
