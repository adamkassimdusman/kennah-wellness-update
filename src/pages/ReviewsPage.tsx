import React, { useState } from 'react';
import { Star, CheckCircle2, MessageSquarePlus, X } from 'lucide-react';
import { TESTIMONIALS, TestimonialItem } from '../data/siteData';

interface ReviewsPageProps {
  onNavigate: (path: string) => void;
}

export const ReviewsPage: React.FC<ReviewsPageProps> = ({ onNavigate }) => {
  const [reviewsList, setReviewsList] = useState<TestimonialItem[]>(TESTIMONIALS);
  const [modalOpen, setModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newQuote, setNewQuote] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [submittedAlert, setSubmittedAlert] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAuthor && newQuote) {
      const added: TestimonialItem = {
        id: String(Date.now()),
        author: newAuthor,
        location: newLocation || 'Pittsburgh, PA',
        quote: newQuote,
        rating: newRating
      };
      setReviewsList([added, ...reviewsList]);
      setModalOpen(false);
      setNewAuthor('');
      setNewLocation('');
      setNewQuote('');
      setSubmittedAlert(true);
      setTimeout(() => setSubmittedAlert(false), 5000);
    }
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#094454] text-white py-16 lg:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[#75ADB2] uppercase tracking-wider text-xs font-bold font-outfit mb-2 block">
            Reviews
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-outfit tracking-tight mb-4">
            What Families Are Saying
          </h1>
          <p className="max-w-2xl mx-auto text-teal-100/90 text-sm sm:text-base leading-relaxed">
            Take a moment to explore our reviews. If you’ve recently experienced our home care service, we’d greatly appreciate your feedback.
          </p>

          <div className="mt-6">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#75ADB2] hover:bg-white text-slate-950 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-md"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Leave a Review</span>
            </button>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-20 bg-[#F4F6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {submittedAlert && (
            <div className="mb-8 max-w-xl mx-auto bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-center gap-3 text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>Thank you! Your review has been added and shared with our team.</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviewsList.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <img
                      src="/images/Google_Favicon_2025.svg_-150x150.png"
                      alt="Google Reviews"
                      className="w-6 h-6 object-contain"
                    />
                    <div className="flex items-center text-amber-400 gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-bold text-[#094454] font-outfit text-sm">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-7 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-[#094454] font-outfit mb-1">
              Share Your Experience
            </h3>
            <p className="text-xs text-slate-600 mb-5">
              Your review helps other families in Allison Park & Pittsburgh make informed care decisions.
            </p>

            <form onSubmit={handleAddReview} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewRating(star)}
                      className="p-1 focus:outline-hidden"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newRating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Miller"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  City / Neighborhood
                </label>
                <input
                  type="text"
                  placeholder="e.g. Allison Park, PA"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your Review
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about how Kenah Wellness supported your family..."
                  value={newQuote}
                  onChange={(e) => setNewQuote(e.target.value)}
                  className="w-full bg-[#F4F6F0] border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-hidden focus:border-[#75ADB2]"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#75ADB2] hover:bg-[#094454] text-slate-950 hover:text-white font-bold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Post Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
