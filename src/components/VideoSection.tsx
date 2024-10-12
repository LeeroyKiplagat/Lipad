const VideoSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-8 rounded-lg shadow-lg">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Learn how to use Lipad
        </h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean ut
          vulputate nisi. Nulla viverra odio nec risus vehicula luctus.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="w-full max-w-lg h-64 bg-gray-200 rounded-lg relative">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0"
            className="w-full h-full rounded-lg"
          ></iframe>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div
                className="w-5 h-5 bg-red-500"
                style={{ clipPath: "polygon(0% 0%, 100% 50%, 0% 100%)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
