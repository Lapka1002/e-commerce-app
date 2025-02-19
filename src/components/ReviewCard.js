const ReviewCard = ({ review }) => {
    return (
      <div className="border border-gray-200 rounded-lg p-5 shadow-md bg-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold text-lg">
            {review.user?.charAt(0).toUpperCase() || "G"}
          </div>
          <div>
            <p className="font-semibold text-gray-800">{review.user || "Guest"}</p>
            <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-yellow-500">
          {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
        </div>
        <p className="mt-3 text-gray-700 leading-relaxed">{review.comment}</p>
      </div>
    );
  };
  

export default ReviewCard;