import { Button } from "@/components/ui/button";

const UserAccount = () => {
  return (
    <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-muted shadow-2xl rounded-lg text-gray-900">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://raw.githubusercontent.com/najatul6/najatul6/main/coverImg/najatul6.jpg"
          alt="Mountain"
        />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden flex justify-center items-center bg-gray-600">
        <img
          className="object-cover object-center h-32"
          src="https://www.najatulislam.me/najatul6.png"
          alt="Woman looking front"
        />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">Md Najatul islam</h2>
        <p>najatulislam11@gmail.com</p>
        {/* <p className="text-gray-500">User</p> */}
      </div>
      <div className="p-4 border-t mx-8 mt-2 flex justify-center items-center">
        <Button>Change Name</Button>
      </div>
    </div>
  );
};

export default UserAccount;
