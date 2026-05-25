export default function Loading() {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white/80 backdrop-blur-sm border border-rose-100 rounded-3xl shadow-lg p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-8 animate-pulse">
          <div className="h-4 w-24 bg-rose-200 rounded-full mx-auto mb-4" />
          <div className="h-8 w-56 bg-rose-100 rounded-full mx-auto mb-3" />
          <div className="h-4 w-40 bg-rose-50 rounded-full mx-auto" />
        </div>

        {/* Form Loading */}
        <div className="space-y-4 mb-10 animate-pulse">
          <div>
            <div className="h-4 w-20 bg-rose-100 rounded mb-2" />
            <div className="h-12 w-full bg-rose-50 rounded-2xl" />
          </div>

          <div>
            <div className="h-4 w-28 bg-rose-100 rounded mb-2" />
            <div className="h-28 w-full bg-rose-50 rounded-2xl" />
          </div>

          <div className="flex gap-3">
            <div className="h-11 flex-1 bg-rose-100 rounded-2xl" />
            <div className="h-11 w-28 bg-rose-200 rounded-2xl" />
          </div>
        </div>

        {/* Comment List */}
        <div className="space-y-5">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border border-rose-100 bg-rose-50/60 rounded-3xl p-5 animate-pulse"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-rose-200 shrink-0" />

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-4 w-32 bg-rose-200 rounded-full" />
                    <div className="h-3 w-16 bg-rose-100 rounded-full" />
                  </div>

                  <div className="space-y-2">
                    <div className="h-3 w-full bg-rose-100 rounded-full" />
                    <div className="h-3 w-11/12 bg-rose-100 rounded-full" />
                    <div className="h-3 w-8/12 bg-rose-100 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Flower Blur */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-rose-200/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-200/20 blur-3xl rounded-full" />
      </div>
    </div>
  );
}
