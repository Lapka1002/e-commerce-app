const ReviewCard = ({ review }) => {
  const { user = "Guest", date, rating = 0, comment = "" } = review;
  return (
    <div className="border border-gray-200 rounded-lg p-5 shadow-md bg-white">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-semibold text-lg">
          {user.charAt(0).toUpperCase()}
        </div>
        <div>
          <p className="font-semibold text-gray-800">{user}</p>
          <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1 text-yellow-500">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>
      <p className="mt-3 text-gray-700 leading-relaxed">{comment}</p>
    </div>
  );
};


export default ReviewCard;