import  Link  from "next/link"



const Navigation = () => {
    return (
      <div className="flex bg-blue-700 h-20 items-center gap-4">
        <Link className="text-white text-xl  font-bold " href="/">Home</Link>
        <Link className="text-white text-xl font-bold" href="/pet">Pet</Link>
      </div>
    );
};

export default Navigation;
