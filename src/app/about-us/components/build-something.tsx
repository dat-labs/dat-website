import { GitHubLogoIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons';

const BuildWithData = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Helps you to</h2>
      <h1 className="text-4xl font-bold">Build something amazing with your data</h1>
      <div className="flex items-center space-x-8 mt-8">
        <div className="flex items-center space-x-4 border border-gray-300 px-4 py-2 rounded-md">
          <GitHubLogoIcon className="w-6 h-6" />
          <span>Contribute on github</span>
        </div>
        <div className="flex items-center space-x-4 border border-gray-300 px-4 py-2 rounded-md">
          <GitHubLogoIcon className="w-6 h-6" />
          <span>Join our growing Slack community</span>
        </div>
        <div className="flex items-center space-x-4 border border-gray-300 px-4 py-2 rounded-md">
          <EnvelopeOpenIcon className="w-6 h-6" />
          <span>Subscribe to our newsletter to stay up-to-date.</span>
        </div>
      </div>
    </div>
  );
};

export default BuildWithData;