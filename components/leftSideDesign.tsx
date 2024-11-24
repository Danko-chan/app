export function LeftSideDesign() {
  return (
    <div className="relative w-full h-full bg-blue-600 overflow-hidden">
      <svg
        className="absolute bottom-0 left-0 w-full h-auto"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1E40AF"
          fillOpacity="1"
          d="M0,32L48,53.3C96,75,192,117,288,144C384,171,480,181,576,165.3C672,149,768,107,864,101.3C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Protect Your Digital World</h1>
        <p className="text-xl text-center mb-8">
          Horizon: Your advanced cybersecurity solution against phishing attacks
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Real-time Protection</h3>
            <p className="text-sm">Continuous monitoring and instant alerts</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-sm">Advanced algorithms to detect threats</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">User Education</h3>
            <p className="text-sm">Interactive training to boost awareness</p>
          </div>
          <div className="bg-white bg-opacity-20 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Secure Browsing</h3>
            <p className="text-sm">Safe web experience across all devices</p>
          </div>
        </div>
      </div>
    </div>
  );
}
